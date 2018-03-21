class Notification < ApplicationRecord
  validates :from_name, presence: true
  validates :from_email, presence: true
  validates :starts_displaying_at, presence: true
  validates :stops_displaying_at, presence: true

  scope :has_not_been_seen_by, -> (user_id) { where.not("? != ANY (viewed_users)", user_id) }
  scope :check_authorization, -> (user_id) { User.is_admin?(user_id) ? where(true) : where.not(n_type: 'admin') }
  scope :get_meta_titles_for_page, -> (page) { order("created_at DESC").select(:id, :created_at).limit(10).offset(10 * (page - 1)) }

  def self.fields_to_not_show
    [:id, :viewed_users, :created_at, :updated_at]
  end

  def self.text_fields
    {content: :text, start_displaying_at: :datetime, stops_displaying_at: :datetime }
  end

  def self.tooltips
    {tooltips: {n_type: "Setting this value to \"admin\" makes this only show up for users with an admin role"}}
  end

  def self.select_fields
    {} # %{viewed_users: :multiselect, select: %{viewed_users: get_users_for_select()}}
  end
end
