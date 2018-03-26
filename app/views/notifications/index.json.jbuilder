json.data do
  json.array! @notifications, partial: 'notifications/notification', as: :notification
end
json.merge! Notification.map_pagination_meta(Notification::DEFAULT_PAGINATION_COLUMN)
