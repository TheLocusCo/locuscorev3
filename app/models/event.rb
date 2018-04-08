class Event < Ahoy::Event
  DEFAULT_PAGINATION_COLUMN = :time

  scope :get_meta_titles_for_page, -> (page) { order("time DESC").select(:id, :time).limit(10).offset(10 * (page - 1)) }
end
