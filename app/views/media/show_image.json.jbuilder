json.data do
  json.(@medium, :id)

  json.partial! "media/image", medium: @medium
end
