json.merge! role.attributes
json.href "/roles/#{role.id}"
json.meta_title role.name
json.field_meta Post.map_field_metadata
