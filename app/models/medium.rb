class Medium < ApplicationRecord
  has_attached_file :image, styles: { thumb: "250x180#", slider_show: "480x367#", slider_big: "640x390#", slider_small: "200x280#" }# , default_url: "/images/:style/missing.png"
  has_attached_file :generic
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_and_belongs_to_many :categories, join_table: :media_categories
  has_and_belongs_to_many :posts, join_table: :posts_media
  has_and_belongs_to_many :projects, join_table: :projects_media

  before_destroy { |m| m.categories.clear }
  before_destroy { |m| m.posts.clear }
  before_destroy { |m| m.projects.clear }

  scope :get_meta_titles_for_page, -> (page) { order("created_at DESC").select(:id, :created_at, :updated_at).limit(10).offset(10 * (page - 1)) }

  def self.many_to_many_as
    {categories: :categories}
  end

  def self.fields_to_not_show
    [
      :id, :local_media, :arc_media, :arc_media_generic, :created_at, :updated_at,
      :image_file_name, :image_content_type, :image_file_size, :image_updated_at,
      :generic_file_name, :generic_content_type, :generic_file_size, :generic_updated_at
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
end
