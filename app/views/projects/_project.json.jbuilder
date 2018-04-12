json.(project, :id, :name, :client, :role, :link)

json.categories project.categories_as_basic_with_all
json.media project.media_with_urls

json.categories_as_string project.categories.pluck(:name).join(", ")

if defined?(index).nil?
  json.main_description project.main_description
end

json.href "/projects/#{project.id}"
json.date project.created_at.strftime("%B %d, %Y")
json.meta_title project.name
json.field_meta Project.map_field_metadata
