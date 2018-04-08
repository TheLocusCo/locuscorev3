json.merge! visit.attributes
json.parsed_start_at visit.started_at.strftime("%B %d (%H:%M %P), %Y")
json.parsed_user visit.try(:user).try(:name)
json.href "/visits/#{visit.id}"
json.meta_title "Visit at #{visit.started_at.strftime("%B %d (%H:%M %P), %Y")}"
json.field_meta Visit.map_field_metadata
