json.(medium, :id, :name, :description, :globally_visible, :user_ids_who_can_view, :user_id, :slug)

json.categories medium.categories_as_basic_with_all

json.partial! "media/image", medium: medium
json.partial! "media/generic", medium: medium

json.creator medium.user.username
json.href "/media/#{medium.slug}"
json.meta_title medium.name
json.field_meta Medium.map_field_metadata
