class Category < ApplicationRecord
  validates :name, presence: true, format: { with: /\A[A-Z][a-z|\w]+\z/, message: "Please only use letters and spaces" }
  before_save :capitalize_name

  has_and_belongs_to_many :projects, join_table: :projects_categories
  has_and_belongs_to_many :posts, join_table: :posts_categories
  has_and_belongs_to_many :graphics, join_table: :graphics_categories
  has_and_belongs_to_many :mangas, join_table: :mangas_categories
  has_and_belongs_to_many :media, join_table: :media_categories

  scope :ordered_by_name, -> { order("name ASC") }
  scope :belonging_to, -> (name) { ordered_by_name.joins(name) } # :projects, etc

  def capitalize_name
    self.name = self.name.split(" ").map { |s| s.capitalize }.join(" ")
  end
end
