json.merge! visit.attributes
json.parsed_start_at visit.started_at.strftime("%B %d (%H:%M %P), %Y")
json.parsed_user visit.try(:user).try(:name)

if defined?(index).nil?
  # json.media graphic.media_with_urls
  json.events do
    json.array! visit.events, partial: 'events/event', as: :event, locals: {no_metadata: true}
  end

  json.visit_ip_events do
    json.array! @ip_events, partial: 'events/event', as: :event, locals: {no_metadata: true}
  end
end

json.href "/visits/#{visit.id}"
json.meta_title "Visit at #{visit.started_at.strftime("%B %d (%H:%M %P), %Y")}"
json.field_meta Visit.map_field_metadata
