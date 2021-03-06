class Medium < ApplicationRecord
  DEFAULT_PAGINATION_COLUMN = :created_at
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_attached_file :image, styles: { thumb: "250x180#", slider_show: "480x367#", slider_big: "640x390#", slider_small: "200x280#" }# , default_url: "/images/:style/missing.png"
  has_attached_file :generic, s3_permissions: :private, path: "/uploads2/:class/:id_partition/:style/:filename"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_and_belongs_to_many :categories, join_table: :media_categories
  has_and_belongs_to_many :posts, join_table: :posts_media
  has_and_belongs_to_many :projects, join_table: :projects_media

  before_destroy { |m| m.categories.clear }
  before_destroy { |m| m.posts.clear }
  before_destroy { |m| m.projects.clear }
  before_destroy { |m| m.image.destroy if m.image_file_name }
  before_destroy { |m| m.generic.destroy if m.generic_file_name }

  scope :get_meta_titles_for_page, -> (page) { order("created_at DESC").select(:id, :created_at, :updated_at).limit(10).offset(10 * (page - 1)) }

  def self.many_to_many_as
    {categories: :categories}
  end

  def self.fields_to_not_show
    [
      :id, :local_media, :arc_media, :arc_media_generic, :created_at, :updated_at,
      :image_file_name, :image_content_type, :image_file_size, :image_updated_at,
      :generic_file_name, :generic_content_type, :generic_file_size, :generic_updated_at,
      :slug
    ]
  end

  def self.text_fields
    {description: :text, image: :upload, generic: :upload}
  end

  def self.tooltips
    {tooltips: {
      image: "Only allows image files",
      generic: "Allows all files (prevents images)"
    }}
  end

  def self.select_fields
    {user_ids_who_can_view: :multiselect, select: {user_ids_who_can_view: Medium.get_users_for_select}, user_id: :hidden, hidden: {user_id: "currentUser"}}
  end

  def image_urls
    {
      original: image.url.gsub("s3.amazonaws.com/#{ENV['S3_BUCKET']}", "#{ENV['S3_BUCKET']}.s3.amazonaws.com"),
      thumb: image.url(:thumb).gsub("s3.amazonaws.com/#{ENV['S3_BUCKET']}", "#{ENV['S3_BUCKET']}.s3.amazonaws.com"),
      slider_show: image.url(:slider_show).gsub("s3.amazonaws.com/#{ENV['S3_BUCKET']}", "#{ENV['S3_BUCKET']}.s3.amazonaws.com"),
      slider_big: image.url(:slider_big).gsub("s3.amazonaws.com/#{ENV['S3_BUCKET']}", "#{ENV['S3_BUCKET']}.s3.amazonaws.com"),
      slider_small: image.url(:slider_small).gsub("s3.amazonaws.com/#{ENV['S3_BUCKET']}", "#{ENV['S3_BUCKET']}.s3.amazonaws.com"),
    }
  end

  def generic_url
    {
      original: generic.expiring_url(60).gsub("s3.amazonaws.com/#{ENV['S3_BUCKET']}", "#{ENV['S3_BUCKET']}.s3.amazonaws.com")
    }
  end
end
