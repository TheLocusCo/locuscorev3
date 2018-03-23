json.(graphic, :script_content, :id, :title, :icon, :library, :load_from_file, :fullscreen_by_default, :content_description, :basic_description)

if graphic.extra_params.blank?
  json.extra_params Hash.class_eval("{paramZero: 'fullscreen'}")
else
  json.extra_params Hash.class_eval(graphic.extra_params).merge!(Hash.class_eval("{paramZero: 'fullscreen'}"))
end
json.categories graphic.categories_as_basic_with_all
# json.media graphic.media_with_urls

json.href "/graphics/#{graphic.id}"
json.meta_title graphic.title
json.field_meta Graphic.map_field_metadata
