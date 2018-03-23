json.data do
  json.partial! "graphics/graphic", graphic: @graphic
  json.extra_params @graphic.extra_params
end
