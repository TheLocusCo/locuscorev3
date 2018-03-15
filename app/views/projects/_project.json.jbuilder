json.(project, :id, :name, :client, :role, :link, :main_description)

json.categories project.categories_as_basic_with_all
json.media project.media_with_urls

json.href "/projects/#{project.id}"
json.date project.created_at.strftime("%B %d, %Y")
json.meta_title project.name
json.field_meta Project.map_field_metadata
