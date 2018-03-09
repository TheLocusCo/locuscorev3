json.(notification, :id, :from_name, :from_email, :content, :start_displaying_at, :stops_displaying_at, :viewed_users, :n_type, :icon)

json.truncated_content truncate(notification.content, length: 140, separator: ' ')
json.created_at notification.created_at.strftime("%B %d (%H:%M %P), %Y")
json.parsed_start_displaying_at notification.start_displaying_at.strftime("%B %d (%H:%M %P), %Y")
json.parsed_stops_displaying_at notification.stops_displaying_at.strftime("%B %d (%H:%M %P), %Y")
json.href "/notifications/#{notification.id}"
json.meta_title "#{notification.from_name}(#{notification.from_email})"
json.field_meta Notification.map_field_metadata
