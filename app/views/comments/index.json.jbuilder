json.data do
  json.array! @comments, partial: 'comments/comment', as: :comment
end
json.merge! Comment.map_pagination_meta(:created_at)
