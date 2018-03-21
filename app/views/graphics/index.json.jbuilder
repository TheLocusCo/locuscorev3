json.data do
  json.array! @graphics, partial: 'graphics/graphic', as: :graphic
end
json.merge! Graphic.map_pagination_meta(:title)
