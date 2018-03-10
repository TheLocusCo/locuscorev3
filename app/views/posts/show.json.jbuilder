json.data do
  json.partial! "posts/post", post: @post
  json.comments @post.comments, partial: 'comments/comment', as: :comment
end
