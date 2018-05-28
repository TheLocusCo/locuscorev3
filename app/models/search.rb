class Search
  #include CanCan::Ability

  #hash of things the current user can search
  def self.searchable_hash(user_id)
    user = User.find(user_id) unless user_id.nil?

    user ||= User.new
    ability = Ability.new(user)


    shash = {} #search_hash, a search that doesnt match something in this hash SHOULD NOT BE EXECUTED
               #All searches should have "by" in their logical as that is how the scoping renders the scoping fields h[:logical].split('by').last

    #nested_action defines additional attributes on the search
    #  select_from |indicates what query the query should be able to pick from
    #  returns     |the query piece to return on select fields that need to return a type OTHER than their "initiator"
    #  using       |the second query piece that the initiator is searching from
    #  embedded    |only used for hidden fields. This SQL (must include .) will be executed server side on the matching hash. The user cant modify this in any way.
    #  params      |only used for param fields. Adds additional params to the redirected index. Useful for request analytics. Should be a HASH and not a STRING
    #  overriding  |necessary to specify multiple search queries for the SAME term without using hidden fields
    #  search_type |can specify fuzzy_search for nested_action string queries (its normally basic)
    s,b,d,h,p,o = 'string', 'boolean', 'date', 'hidden', 'params', 'order'

    if ability.can? :edit_update, Comment
      shash[:comments] = {icon: 'comment'}
      shash[:comments][:poster_name]      = {icon: 'user',     type: s, logical: 'Search comments by who posted them',                nested_action: {select_from: 'Comment.pluck(:poster_name).uniq.sort'}}
      shash[:comments][:poster_ip]        = {icon: 'network',  type: s, logical: 'Search comments by the ip that posted them',        nested_action: {select_from: 'Comment.pluck(:poster_ip).uniq.sort'}}
      shash[:comments][:approved]         = {icon: 'check',    type: b, logical: 'Search comments by if they are approved or not',    nested_action: {}}
      shash[:comments][:created_at]       = {icon: 'calendar', type: d, logical: 'Search comments by when they were created',         nested_action: {select_from: {earliest: 'Comment.pluck(:created_at).min', latest: 'Comment.pluck(:created_at).max'}}}
      shash[:comments][:commentable_type] = {icon: 'tag',      type: s, logical: 'Search comments by what they were posted to',       nested_action: {select_from: 'Comment.pluck(:commentable_type).uniq.sort'}}
      shash[:comments][:posted_by_anon]   = {icon: 'help',     type: h, logical: 'Search comments by if they were posted by an anon', nested_action: {embedded: '.where("user_id = 0")'}}
      shash[:comments][:order]            = {icon: 'menu',     type: o, logical: 'Change the order of the search results',            nested_action: {select_from: ["created_at ASC"]}}
    end

    shash[:graphics] = {icon: 'eye'}
    shash[:graphics][:title]             = {icon: 'vcard',    type: s, logical: 'Search Web Graphics by their title',                nested_action: {search_type: 'fuzzy'}}
    shash[:graphics][:title_list]        = {icon: 'doc-text', type: s, logical: 'Search Web Graphics by a list of their titles',     nested_action: {select_from: 'Graphic.pluck(:title).sort', overriding: 'title'}}
    shash[:graphics][:haml_description]  = {icon: 'doc-text', type: s, logical: 'Search Web Graphics by their detailed description', nested_action: {search_type: 'basic'}}
    shash[:graphics][:index_description] = {icon: 'doc-text', type: s, logical: 'Search Web Graphics by their short description',    nested_action: {search_type: 'basic'}}
    shash[:graphics][:category]          = {icon: 'tag',      type: s, logical: 'Search Web Graphics by their categories',           nested_action: {select_from: 'Category.belonging_to("graphics").pluck(:name).uniq.sort', join_on: {name: :categories, field: :name}}}
    shash[:graphics][:scenejs]           = {icon: 'globe',    type: b, logical: 'Search Web Graphics by whether it uses SceneJS',    nested_action: {}}
    shash[:graphics][:created_at]        = {icon: 'calendar', type: d, logical: 'Search Web Graphics by when they were created',     nested_action: {select_from: {earliest: 'Graphic.pluck(:created_at).min', latest: 'Graphic.pluck(:created_at).max'}}}
    shash[:graphics][:order]             = {icon: 'menu',     type: o, logical: 'Change the order of the search results',            nested_action: {select_from: ["title DESC", "title ASC", "created_at ASC"]}}

    if ability.can? :read, Manga
      shash[:mangas] = {icon: 'book'}
      shash[:mangas][:name]         = {icon: 'vcard',    type: s, logical: 'Search mangas by their name',              nested_action: {search_type: 'fuzzy'}}
      shash[:mangas][:name_list]    = {icon: 'doc-text', type: s, logical: 'Search mangas by a list of their names',   nested_action: {select_from: 'Manga.pluck(:name).sort', overriding: 'name'}}
      shash[:mangas][:authors]      = {icon: 'user',     type: s, logical: 'Search mangas by their author',            nested_action: {search_type: 'fuzzy'}}
      shash[:mangas][:authors_list] = {icon: 'doc-text', type: s, logical: 'Search mangas by a list of their authors', nested_action: {select_from: "z = []; Manga.pluck(:authors).each {|s| z << s.gsub(' (Story & Art)', '')}; z.uniq.sort", overriding: 'authors'}}
      shash[:mangas][:artists]      = {icon: 'user',     type: s, logical: 'Search mangas by their artist',            nested_action: {search_type: 'fuzzy'}}
      shash[:mangas][:artists_list] = {icon: 'doc-text', type: s, logical: 'Search mangas by a list of their artists', nested_action: {select_from: "z = []; Manga.pluck(:artists).each {|s| z << s.gsub(' (Story & Art)', '') unless s.blank?}; z.uniq.sort", overriding: 'artists'}}
      shash[:mangas][:genre]        = {icon: 'tag',      type: s, logical: 'Search mangas by their genre',             nested_action: {select_from: 'Category.belonging_to("mangas").pluck(:name).uniq.sort', join_on: {name: :categories, field: :name}}}
      shash[:mangas][:created_at]   = {icon: 'calendar', type: d, logical: 'Search mangas by when they were created',  nested_action: {select_from: {earliest: 'Manga.pluck(:created_at).min', latest: 'Manga.pluck(:created_at).max'}}}
      shash[:mangas][:with_fancy]   = {icon: 'window',   type: p, logical: 'Use the fancy mangas Gallery',             nested_action: {params: {fancyDisplay: true}}}
      shash[:mangas][:order]        = {icon: 'menu',     type: o, logical: 'Change the order of the search results',   nested_action: {select_from: ["name DESC", "name ASC", "created_at ASC"]}}
    end

    unless user.id.nil?
      shash[:media] = {icon: 'picture'}
      shash[:media][:name]             = {icon: 'vcard',    type: s, logical: 'Search media by their name',                           nested_action: {search_type: 'fuzzy'}}
      shash[:media][:name_list]        = {icon: 'doc-text', type: s, logical: 'Search media by a list of their names',                nested_action: {select_from: 'Medium.pluck(:name).sort', overriding: 'name'}}
      shash[:media][:user]             = {icon: 'user',     type: s, logical: 'Search media by who created them',                     nested_action: {select_from: 'User.joins(:media).where("user_id IS NOT NULL").pluck(:name).uniq.sort', join_on: {name: :user, field: :name}}} if ability.can? :edit_update, Medium
      shash[:media][:category]         = {icon: 'tag',      type: s, logical: 'Search media by their categories',                     nested_action: {select_from: 'Category.belonging_to("media").pluck(:name).uniq.sort', join_on: {name: :categories, field: :name}}}
      shash[:media][:globally_visable] = {icon: 'search',   type: b, logical: 'Search media by whether it is globally visable',       nested_action: {}}
      shash[:media][:created_at]       = {icon: 'calendar', type: d, logical: 'Search media by when they were created',               nested_action: {select_from: {earliest: 'Medium.pluck(:created_at).min', latest: 'Medium.pluck(:created_at).max'}}}
      shash[:media][:has_image]        = {icon: 'camera',   type: h, logical: 'Search media by if they have an image attached',       nested_action: {embedded: '.where("image_file_name is not null")'}}
      shash[:media][:has_generic]      = {icon: 'doc-text', type: h, logical: 'Search media by if they have a generic file attached', nested_action: {embedded: '.where("generic_file_name is not null")'}}
      shash[:media][:order]            = {icon: 'menu',     type: o, logical: 'Change the order of the search results',               nested_action: {select_from: ["name DESC", "name ASC", "created_at ASC"]}}
    end

    if ability.can? :edit_update, Notification
      shash[:notifications] = {icon: 'attention'}
      shash[:notifications][:content]             = {icon: 'vcard',    type: s, logical: 'Search notifications by their content',              nested_action: {search_type: 'basic'}}
      shash[:notifications][:from_email]          = {icon: 'user',     type: s, logical: 'Search notifications by their email',                nested_action: {search_type: 'fuzzy'}}
      shash[:notifications][:from_email_list]     = {icon: 'doc-text', type: s, logical: 'Search notifications by a list of their emails',     nested_action: {select_from: 'Notification.pluck(:from_email).sort', overriding: 'from_email'}}
      shash[:notifications][:created_at]          = {icon: 'calendar', type: d, logical: 'Search notifications by when they were created',     nested_action: {select_from: {earliest: 'Notification.pluck(:created_at).min', latest: 'Notification.pluck(:created_at).max'}}}
      shash[:notifications][:start_displaying_at] = {icon: 'calendar', type: d, logical: 'Search notifications by when their campaign starts', nested_action: {select_from: {earliest: 'Notification.pluck(:start_displaying_at).min', latest: 'Notification.pluck(:start_displaying_at).max'}}}
      shash[:notifications][:n_type]              = {icon: 'tag',      type: s, logical: 'Search notifications by their type',                 nested_action: {select_from: 'Notification.pluck(:n_type).uniq.sort'}}
      shash[:notifications][:order]               = {icon: 'menu',     type: o, logical: 'Change the order of the search results',             nested_action: {select_from: ["created_at ASC"]}}
    end

    shash[:posts] = {icon: 'doc'}
    shash[:posts][:title]      = {icon: 'vcard',    type: s, logical: 'Search posts by their title',            nested_action: {search_type: 'fuzzy'}}
    shash[:posts][:title_list] = {icon: 'doc-text', type: s, logical: 'Search posts by a list of their titles', nested_action: {select_from: 'Post.pluck(:title).sort', overriding: 'title'}}
    shash[:posts][:content]    = {icon: 'doc-text', type: s, logical: 'Search posts by their content',          nested_action: {search_type: 'basic'}}
    shash[:posts][:category]   = {icon: 'tag',      type: s, logical: 'Search posts by their categories',       nested_action: {select_from: 'Category.belonging_to("posts").pluck(:name).uniq.sort', join_on: {name: :categories, field: :name}}}
    shash[:posts][:author]     = {icon: 'user',     type: s, logical: 'Search posts by who created them',       nested_action: {select_from: 'User.joins(:posts).where("author_id IS NOT NULL").pluck(:name).uniq.sort', join_on: {name: :user, field: :name}}}
    shash[:posts][:created_at] = {icon: 'calendar', type: d, logical: 'Search posts by when they were created', nested_action: {select_from: {earliest: 'User.pluck(:created_at).min', latest: 'User.pluck(:created_at).max'}}}
    shash[:posts][:order]      = {icon: 'menu',     type: o, logical: 'Change the order of the search results', nested_action: {select_from: ["title DESC", "title ASC", "created_at ASC"]}}

    shash[:projects] = {icon: 'folder'}
    shash[:projects][:name]       = {icon: 'vcard',    type: s, logical: 'Search projects by their title',            nested_action: {search_type: 'fuzzy'}}
    shash[:projects][:name_list]  = {icon: 'doc-text', type: s, logical: 'Search projects by a list of their titles', nested_action: {select_from: 'Project.pluck(:name).sort', overriding: 'name'}}
    shash[:projects][:category]   = {icon: 'tag',      type: s, logical: 'Search projects by their category',         nested_action: {select_from: 'Category.belonging_to("projects").pluck(:name).uniq.sort', join_on: {name: :categories, field: :name}}}
    shash[:projects][:created_at] = {icon: 'calendar', type: d, logical: 'Search projects by when they were created', nested_action: {select_from: {earliest: 'Project.pluck(:created_at).min', latest: 'Project.pluck(:created_at).max'}}}
    shash[:projects][:with_fancy] = {icon: 'window',   type: p, logical: 'Use the fancy projects gallery',            nested_action: {params: {fancyDisplay: true}}} unless user.id.nil?
    shash[:projects][:order]      = {icon: 'menu',     type: o, logical: 'Change the order of the search results',    nested_action: {select_from: ["name DESC", "name ASC", "created_at ASC"]}}

    if ability.can? :read, Visit
      shash[:visits] = {icon: 'network'}
      shash[:visits][:ip]                   = {icon: 'signal',    type: s, logical: 'Search visits by their ip',                            nested_action: {select_from: 'Visit.pluck(:ip).uniq.sort', search_type: 'basic'}}
      shash[:visits][:top_visit_ipv4]       = {icon: 'signal',    type: s, logical: 'Search visits by their first two parts in ipv4',       nested_action: {select_from: "z = []; Visit.pluck(:ip).each {|s| z << \"\#{s.split('.').at(0)}.\#{s.split('.').at(1)}\" }; z.uniq.sort", overriding: 'ip', search_type: 'fuzzy'}}
      shash[:visits][:top_visit_ipv6]       = {icon: 'signal',    type: s, logical: 'Search visits by their first two parts in ipv6',       nested_action: {select_from: "z = []; Visit.pluck(:ip).each {|s| z << \"\#{s.split(':').at(0)}.\#{s.split(':').at(1)}\" }; z.uniq.sort", overriding: 'ip', search_type: 'fuzzy'}}
      shash[:visits][:active]               = {icon: 'eye',       type: h, logical: 'Search visits by if they are currently active',        nested_action: {embedded: '.eager_load(:events).where("ahoy_events.time > ?", 1.hour.ago)'}}
      shash[:visits][:logged_in_this_day]   = {icon: 'calendar',  type: h, logical: 'Search visits by if they connected today',             nested_action: {embedded: '.where("started_at > ?", Date.today.beginning_of_day)'}}
      shash[:visits][:logged_in_this_week]  = {icon: 'calendar',  type: h, logical: 'Search visits by if they connected in this week',      nested_action: {embedded: '.where("started_at > ?", Date.today.beginning_of_week)'}}
      shash[:visits][:logged_in_this_month] = {icon: 'calendar',  type: h, logical: 'Search visits by if they connected in this month',     nested_action: {embedded: '.where("started_at > ?", Date.today.beginning_of_month)'}}
      shash[:visits][:logged_in_from]       = {icon: 'calendar',  type: d, logical: 'Search visits by if they connected from a date range', nested_action: {select_from: {earliest: 'Visit.pluck(:started_at).min', latest: 'Visit.pluck(:started_at).max'}}}
      shash[:visits][:referring_domain]     = {icon: 'direction', type: s, logical: 'Search visits by what site has referred them',         nested_action: {select_from: 'Visit.where("referring_domain IS NOT NULL").pluck(:referring_domain).uniq'}}
      shash[:visits][:country]              = {icon: 'globe',     type: s, logical: 'Search visits by their country',                       nested_action: {select_from: 'Visit.where("country IS NOT NULL").pluck(:country).uniq'}}
      shash[:visits][:region]               = {icon: 'globe',     type: s, logical: 'Search visits by their region (state)',                nested_action: {select_from: 'Visit.where("region IS NOT NULL").pluck(:region).uniq'}}
      shash[:visits][:city]                 = {icon: 'globe',     type: s, logical: 'Search visits by their city',                          nested_action: {select_from: 'Visit.where("city IS NOT NULL").pluck(:city).uniq'}}
      shash[:visits][:landing_page]         = {icon: 'location',  type: s, logical: 'Search visits by where they hit the site',             nested_action: {select_from: 'Visit.where("landing_page IS NOT NULL").pluck(:landing_page).uniq'}}
      shash[:visits][:browser]              = {icon: 'doc-landscape', type: s, logical: 'Search visits by their browser',                   nested_action: {select_from: 'Visit.pluck(:browser).uniq'}}
      shash[:visits][:os]                   = {icon: 'drive',     type: s, logical: 'Search visits by their operating system',              nested_action: {select_from: 'Visit.pluck(:os).uniq'}}
      shash[:visits][:user_agent]           = {icon: 'mobile',    type: s, logical: 'Search visits by their user agent',                    nested_action: {select_from: 'Visit.pluck(:user_agent).uniq'}}
      shash[:visits][:user]                 = {icon: 'user',      type: s, logical: 'Search visits by if they have a user attached',        nested_action: {select_from: 'User.joins(:visits).where("user_id IS NOT NULL").pluck(:name).uniq.sort', join_on: {name: :user, field: :name}}}
      shash[:visits][:order]                = {icon: 'menu',      type: o, logical: 'Change the order of the search results',               nested_action: {select_from: ["ip DESC", "ip ASC", "started_at ASC"]}}
      # shash[:visits][:with_fullscreen]      = {icon: 'chart-bar', type: p, logical: 'View the results in chart form',                 nested_action: {params: {fancyDisplay: true}}}
    end

    if ability.can? :create, Resume
      shash[:resumes] = {icon: 'newspaper'}
      shash[:resumes][:title]      = {icon: 'vcard',    type: s, logical: 'Search resumes by their title',            nested_action: {search_type: 'fuzzy'}}
      shash[:resumes][:title_list] = {icon: 'doc-text', type: s, logical: 'Search resumes by a list of their titles', nested_action: {select_from: 'Resume.pluck(:title).sort', overriding: 'title'}}
      shash[:resumes][:company]    = {icon: 'tag',      type: s, logical: 'Search resumes by their company',          nested_action: {select_from: 'Resume.get_uniq_array_of_nested_data("company")'}}
      shash[:resumes][:created_at] = {icon: 'calendar', type: d, logical: 'Search resumes by when they were created', nested_action: {select_from: {earliest: 'Resume.pluck(:created_at).min', latest: 'Resume.pluck(:created_at).max'}}}
      shash[:resumes][:order]      = {icon: 'menu',     type: o, logical: 'Change the order of the search results',   nested_action: {select_from: ["title DESC", "title ASC", "created_at ASC"]}}
    end

    if ability.can? :edit_update, User
      shash[:users] = {icon: 'users'}
      shash[:users][:username]      = {icon: 'vcard',          type: s, logical: 'Search users by their username',             nested_action: {search_type: 'fuzzy'}}
      shash[:users][:username_list] = {icon: 'doc-text',       type: s, logical: 'Search users by a list of their usernames',  nested_action: {select_from: 'User.pluck(:username).sort', overriding: 'username'}}
      shash[:users][:name]          = {icon: 'user',           type: s, logical: 'Search users by their full name',            nested_action: {search_type: 'fuzzy'}}
      shash[:users][:name_list]     = {icon: 'doc-text',       type: s, logical: 'Search users by a list of their full names', nested_action: {select_from: 'User.pluck(:name).sort', overriding: 'name'}}
      shash[:users][:ip_list]       = {icon: 'signal',         type: s, logical: 'Search users by the ips they have used',     nested_action: {select_from: 'User.get_uniq_array_of_nested_data("ip_list")'}}
      shash[:users][:created_at]    = {icon: 'calendar',       type: d, logical: 'Search users by when they were created',     nested_action: {select_from: {earliest: 'User.pluck(:created_at).min', latest: 'User.pluck(:created_at).max'}}}
      shash[:users][:signed_in]     = {icon: 'login',          type: h, logical: 'Search users by if they have logged in',     nested_action: {embedded: '.where("sign_in_count > 0")'}}
      shash[:users][:locked_out]    = {icon: 'cancel-squared', type: h, logical: 'Search users by if they are locked out',     nested_action: {embedded: '.where("locked_at is not null")'}}
      shash[:users][:order]         = {icon: 'menu',           type: o, logical: 'Change the order of the search results',     nested_action: {select_from: ["name DESC", "name ASC", "username DESC", "username ASC", "created_at ASC", "signed_in DESC", "signed_in ASC"]}}
    end

    shash
  end
end
