json.data do
  json.partial! "graphics/graphic", graphic: @graphic
  json.comments @graphic.comments, partial: 'comments/comment', as: :comment
end
