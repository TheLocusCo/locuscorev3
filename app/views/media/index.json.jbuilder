json.data do
  json.array! @media, partial: 'media/medium', as: :medium
end
