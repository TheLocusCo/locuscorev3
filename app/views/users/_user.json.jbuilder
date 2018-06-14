json.(user, :id, :username, :name, :email, :sign_in_count, :current_sign_in_ip, :failed_attempts, :ip_list, :slug)

json.href "/users/#{user.slug}"
json.created_at user.created_at.strftime("%B %d (%H:%M %P), %Y")
json.updated_at user.updated_at.strftime("%B %d (%H:%M %P), %Y")
json.role user.role.name
json.meta_title user.name
json.field_meta User.map_field_metadata
