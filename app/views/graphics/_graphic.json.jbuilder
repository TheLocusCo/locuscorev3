json.(graphic, :id, :title, :icon, :library, :load_from_file, :fullscreen_by_default, :content_description, :basic_description, :extra_params)

json.categories graphic.categories_as_basic_with_all
json.media project.media_with_urls

json.href "/graphics/#{graphic.id}"
json.meta_title graphic.title
json.field_meta Graphic.map_field_metadata
