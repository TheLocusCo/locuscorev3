json.data do
  json.array! @posts, partial: 'posts/post', as: :post
end
json.merge! Post.map_pagination_meta(:title)
