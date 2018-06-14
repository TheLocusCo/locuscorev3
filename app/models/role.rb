class Role < ApplicationRecord
  DEFAULT_PAGINATION_COLUMN = :name
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates :name, presence: true
  validates :pf_graphics, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_projects, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_posts, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_users, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_categories, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_roles, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_resumes, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_media, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_mangas, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_notifications, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_comments, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }
  validates :pf_visits, format: { with: /\A[c|r|u|d|\W]*\z/, message: "Please use 'c', 'r', 'u', 'd', or any combination thereof (or 'crud')" }

  scope :get_meta_titles_for_page, -> (page) { order("created_at DESC").select(:id, :created_at, :name).limit(10).offset(10 * (page - 1)) }

  has_many :users

  def tooltips
    {tooltips: {pf_graphics: "Valid values for the pf_ fields are any combination of C, R, U, D with no spaces or blank."}}
  end
end
