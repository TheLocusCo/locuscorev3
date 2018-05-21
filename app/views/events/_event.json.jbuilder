json.(event, :id, :visit_id, :user_id, :name, :time)

json.url event.properties["url"]
json.page event.properties["page"]
json.created_at event.time.strftime("%B %d (%H:%M %P), %Y")
json.created_at_date event.time.strftime("%B %d, %Y")
json.created_at_time event.time.strftime("%I:%M:%S %P")

unless defined?(no_metadata).nil?
  json.href "/events/#{event.id}"
  json.meta_title "Event at #{event.time.strftime("%B %d (%H:%M %P), %Y")}"
  json.field_meta Event.map_field_metadata
end
