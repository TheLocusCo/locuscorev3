json.data do
  json.(@medium, :id)

  json.partial! "media/generic", medium: @medium
end
