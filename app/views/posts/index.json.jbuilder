json.data do
  json.array! @posts, partial: 'posts/post', as: :post, locals: {index: true}
end
json.merge! Post.map_pagination_meta(Post::DEFAULT_PAGINATION_COLUMN)
