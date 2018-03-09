json.(resume, :id, :company)

json.length resume.prawn_content.length
json.created_at notification.created_at.strftime("%B %d (%H:%M %P), %Y")
json.updated_at notification.updated_at.strftime("%B %d (%H:%M %P), %Y")
json.href "/resumes/#{resume.id}"
json.meta_title resume.title
json.field_meta Resume.map_field_metadata
