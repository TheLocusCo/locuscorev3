json.(graphic, :id, :title, :icon, :library, :load_from_file, :fullscreen_by_default, :content_description, :basic_description, :slug)

if graphic.extra_params.blank?
  json.extra_params Hash.class_eval("{}")
else
  json.extra_params Hash.class_eval(graphic.extra_params)
end

json.categories graphic.categories_as_basic_with_all

if defined?(index).nil?
  # json.media graphic.media_with_urls
  json.script_content graphic.script_content
end

json.href "/graphics/#{graphic.slug}"
json.meta_title graphic.title
json.field_meta Graphic.map_field_metadata
