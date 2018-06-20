xml.instruct!
xml.urlset('xmlns'.to_sym => "http://www.sitemaps.org/schemas/sitemap/0.9", 'xmlns:image'.to_sym => "http://www.google.com/schemas/sitemap-image/1.1") do
  @static_pages.each do |page|
    xml.url do
      xml.loc "#{page}"
      xml.changefreq("monthly")
    end
  end
  @semi_static_pages.each do |page|
    xml.url do
      xml.loc "#{page}"
      xml.changefreq("weekly")
    end
  end
  @posts.each do |post|
    xml.url do
      xml.loc "#{@root_url}/posts/#{post.slug}"
      xml.lastmod post.updated_at.strftime("%F")
      xml.changefreq("monthly")
      unless post.media.empty?
        post.media.each do |medium|
          xml.image :image do
            xml.image :loc, medium.image.url(:thumb).gsub('http://', 'https://')
          end
        end
      end
    end
  end
  @projects.each do |project|
    xml.url do
      xml.loc "#{@root_url}/projects/#{project.slug}"
      xml.lastmod project.updated_at.strftime("%F")
      xml.changefreq("monthly")
      unless project.media.empty?
        project.media.each do |medium|
          xml.image :image do
            xml.image :loc, medium.image.url(:thumb).gsub('http://', 'https://')
          end
        end
      end
    end
  end
  @graphics.each do |graphic|
    xml.url do
      xml.loc "#{@root_url}/graphics/#{graphic.slug}"
      xml.lastmod graphic.updated_at.strftime("%F")
      xml.changefreq("monthly")
    end
  end
end
