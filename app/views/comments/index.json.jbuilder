json.data do
  json.array! @comments, partial: 'comments/comment', as: :comment, locals: {index: true}
end
json.merge! Comment.map_pagination_meta(:created_at)
