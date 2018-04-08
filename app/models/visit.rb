class Visit < Ahoy::Visit
  DEFAULT_PAGINATION_COLUMN = :started_at

  scope :get_meta_titles_for_page, -> (page) { order("started_at DESC").select(:id, :started_at).limit(10).offset(10 * (page - 1)) }

  def self.text_fields
    {started_at: :disabled}
  end
end
