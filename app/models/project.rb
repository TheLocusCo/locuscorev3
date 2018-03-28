class Project < ApplicationRecord
  DEFAULT_PAGINATION_COLUMN = :name

  validates :name, presence: true
  validates :main_description, presence: true
  validates :client , presence: true
  validates :role , presence: true

  has_and_belongs_to_many :categories, join_table: :projects_categories
  has_and_belongs_to_many :comments, join_table: :projects_comments
  has_and_belongs_to_many :media, join_table: :projects_media

  before_destroy { |p| p.categories.clear }
  before_destroy { |p| p.comments.clear }
  before_destroy { |p| p.media.clear }

  scope :get_meta_titles_for_page, -> (page) { order("created_at DESC").select(:id, :created_at, :name).limit(10).offset(10 * (page - 1)) }

  def self.many_to_many_as
    {categories: :categories, media: :media}
  end

  def self.fields_to_not_show
    [:id, :created_at, :updated_at]
  end

  def self.text_fields
    {main_description: :html}
  end

  def self.tooltips
    {tooltips: {}}
  end

  def self.select_fields
    {select: {}}
  end
end
