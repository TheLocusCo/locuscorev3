json.(event, :id, :visit_id)

# json.url event.properties["url"]
json.page event.properties["page"]
# json.created_at event.time.strftime("%B %d (%H:%M %P), %Y")
json.created_at_date event.time.strftime("%-m/%-d/%y")

if defined?(no_metadata).nil?
  json.href "/events/#{event.id}"
  json.meta_title "Event at #{event.time.strftime("%B %d (%H:%M %P), %Y")}"
  json.field_meta Event.map_field_metadata
end
