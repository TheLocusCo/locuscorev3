json.(resume, :id, :title, :company)

json.prawn_content resume.prawn_content if defined?(edit)
json.length resume.prawn_content.length
json.created_at resume.created_at.strftime("%B %d (%H:%M %P), %Y")
json.updated_at resume.updated_at.strftime("%B %d (%H:%M %P), %Y")
json.href "/resumes/#{resume.id}"
json.meta_title resume.title
json.field_meta Resume.map_field_metadata
