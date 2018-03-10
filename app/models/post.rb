class Post < ApplicationRecord
  before_save :titleize

  validates :title, uniqueness: true
  validates :title, presence: true
  validates :content, presence: true

  belongs_to :user, foreign_key: :author_id
  has_and_belongs_to_many :categories, join_table: :posts_categories
  has_and_belongs_to_many :comments, join_table: :posts_comments
  has_and_belongs_to_many :media, join_table: :posts_media

  scope :not_hidden_and_is_published, -> { where.not(hidden: true).where("published_at < ?", Time.now) }

  def self.many_to_many_as
    {categories: :categories, media: :media}
  end

  def self.fields_to_not_show
    [:id, :inserted_at, :updated_at]
  end

  def self.text_fields
    {content: :html, published_at: :datetime}
  end

  def self.tooltips
    {tooltips: {hidden: "If set to true, this post will not show up in the Blog UI", published_at: "If set, will not show the post until the beginning of that day. (defaults to today)"}}
  end

  def self.select_fields
    {select: {}, author_id: :hidden, hidden: {author_id: "currentUser"}}
  end
end
