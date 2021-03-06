if defined?(anon).nil?
  json.merge! visit.attributes
  json.parsed_start_at visit.started_at.strftime("%B %d (%H:%M %P), %Y")
  json.parsed_user visit.try(:user).try(:name)
else
  json.id 0
  json.ip visit.ip
end

if defined?(index).nil?
  json.events do
    json.array! visit.events, partial: 'events/event', as: :event, locals: {no_metadata: true}
  end

  json.visit_ip_events do
    json.array! @ip_events, partial: 'events/event', as: :event, locals: {no_metadata: true}
  end

  json.visit_user_events do
    json.array! @user_events, partial: 'events/event', as: :event, locals: {no_metadata: true}
  end
  json.event_days @event_days
  json.event_links @event_links
end

if defined?(anon).nil?
  json.href "/visits/#{visit.id}"
  json.meta_title "Visit at #{visit.started_at.strftime("%B %d (%H:%M %P), %Y")}"
  json.field_meta Visit.map_field_metadata
end
