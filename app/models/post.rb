class Post < ApplicationRecord
  before_save :titleize

  validates :title, uniqueness: true
  validates :title, presence: true
  validates :content, presence: true

  belongs_to :user, foreign_key: :author_id
  has_and_belongs_to_many :categories, join_table: :posts_categories
  has_and_belongs_to_many :comments
  has_and_belongs_to_many :media, join_table: :posts_media
end
