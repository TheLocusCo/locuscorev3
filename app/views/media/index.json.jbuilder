json.data do
  json.array! @media, partial: 'media/medium', as: :medium
end
json.merge! Medium.map_pagination_meta(:title)
