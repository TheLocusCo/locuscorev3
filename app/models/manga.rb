class Manga < ApplicationRecord
  DEFAULT_PAGINATION_COLUMN = :created_at
  has_and_belongs_to_many :categories, join_table: :mangas_categories
  has_and_belongs_to_many :comments, join_table: :mangas_comments

  before_destroy { |m| m.categories.clear }
  before_destroy { |m| m.comments.clear }

  scope :get_meta_titles_for_page, -> (page) { order("created_at DESC").select(:id, :created_at, :name).limit(10).offset(10 * (page - 1)) }

  def self.many_to_many_as
    {categories: :categories}
  end

  def self.fields_to_not_show
    [:id, :needs_update, :created_at, :updated_at]
  end

  def self.text_fields
    {name: :text, sources: :text, header_image_location: :text, description: :text, downloaded_chapters: :text, licensed_at: :text, chapters_at: :text, genres: :disabled}
  end

  def self.tooltips
    {tooltips: {genres: "This field is only here for reference due to how the manga parser works, may remove someday"}}
  end

  def self.select_fields
    {select: {}}
  end
end
