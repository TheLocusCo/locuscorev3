class Comment < ApplicationRecord
  validates :content, presence: true, length: { minimum: 5 }
  validates :poster_name, presence: true
  validates :poster_email, presence: true

  has_and_belongs_to_many :projects, join_table: :projects_comments
  has_and_belongs_to_many :posts, join_table: :posts_comments
  has_and_belongs_to_many :graphics, join_table: :graphics_comments
  has_and_belongs_to_many :mangas, join_table: :mangas_comments

  accepts_nested_attributes_for :projects
  accepts_nested_attributes_for :posts
  accepts_nested_attributes_for :graphics
  accepts_nested_attributes_for :mangas
end
