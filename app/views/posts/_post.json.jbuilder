json.(post, :id, :title, :published_at, :author_id, :icon)

json.categories post.categories_as_basic_with_all
json.media post.media_with_urls

if defined?(index).nil?
  json.content post.content.html_safe
end

json.basic_description truncate(post.content.html_safe, length: 140, separator: ' ')
json.href "/posts/#{post.id}"
json.author post.user.name
json.date post.published_at.strftime("%B %d, %Y")
json.meta_title post.title
json.field_meta Post.map_field_metadata
