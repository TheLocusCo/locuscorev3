class Graphic < ApplicationRecord
  DEFAULT_PAGINATION_COLUMN = :title

  has_and_belongs_to_many :categories, join_table: :graphics_categories
  has_and_belongs_to_many :comments, join_table: :graphics_comments

  before_destroy { |g| g.categories.clear }
  before_destroy { |g| g.comments.clear }

  scope :get_meta_titles_for_page, -> (page) { order("created_at DESC").select(:id, :created_at, :title, :library).where.not(library: "scenejs").limit(10).offset(10 * (page - 1)) }

  def self.many_to_many_as
    {categories: :categories}
  end

  def self.fields_to_not_show
    [:id, :category, :canvas_id, :load_from_file, :created_at, :updated_at]
  end

  def self.text_fields
    {content_description: :html, basic_description: :text}
  end

  def self.tooltips
    {tooltips: {extra_params: "Must be a Ruby Hash IE {paramOne: 'rainbow', paramTwo: 'four_Trails'}"}}
  end

  def self.select_fields
    {library: :select, select: { library: ["processing", "scenejs"] }}
  end
end
