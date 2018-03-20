json.(comment, :id, :poster_name, :poster_email, :poster_website, :poster_ip, :approved, :user_id, :content, :commentable_type)

json.length comment.content.length
json.created_at comment.created_at.strftime("%B %d (%H:%M %P), %Y")
json.updated_at comment.updated_at.strftime("%B %d (%H:%M %P), %Y")
json.created_at_date comment.created_at.strftime("%B %d, %Y")
json.updated_at_date comment.updated_at.strftime("%B %d, %Y")
json.created_at_time comment.created_at.strftime("%I:%M:%S %P")
json.updated_at_time comment.updated_at.strftime("%I:%M:%S %P")

json.href "/comments/#{comment.id}"
json.meta_title "#{comment.poster_name} (#{comment.poster_email})"
json.field_meta Comment.map_field_metadata
