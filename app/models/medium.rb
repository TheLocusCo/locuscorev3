class Medium < ApplicationRecord
  has_attached_file :image, styles: { thumb: "250x180#", slider_show: "480x367#", slider_big: "640x390#", slider_small: "200x280#" }, storage: :s3# , default_url: "/images/:style/missing.png"
  has_attached_file :generic, storage: :s3
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_and_belongs_to_many :categories, join_table: :media_categories
  has_and_belongs_to_many :posts, join_table: :posts_media
  has_and_belongs_to_many :projects, join_table: :projects_media

  before_destroy { |m| m.categories.clear }
  before_destroy { |m| m.posts.clear }
  before_destroy { |m| m.projects.clear }

  def many_to_many_as do
    {categories: :categories}
  end

  def fields_to_not_show do
    [:id, :local_media, :arc_media, :arc_media_generic, :created_at, :updated_at]
  end

  def text_fields do
    {description: :text, image: :upload, generic: :upload}
  end

  def tooltips do
    {tooltips: {
      image: "Only allows image files",
      generic: "Allows all files (prevents images)"
    }}
  end

  def select_fields do
    {user_ids_who_can_view: :multiselect, select: {user_ids_who_can_view: Medium.get_users_for_select}, user_id: :hidden, hidden: {user_id: "currentUser"}}
  end
end
