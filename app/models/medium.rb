class Medium < ApplicationRecord
  has_attached_file :image, styles: { thumb: "250x180#", slider_show: "480x367#", slider_big: "640x390#", slider_small: "200x280#" }, storage: :s3# , default_url: "/images/:style/missing.png"
  has_attached_file :generic, storage: :s3
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_and_belongs_to_many :categories, join_table: :media_categories
  has_and_belongs_to_many :posts, join_table: :posts_media
  has_and_belongs_to_many :projects, join_table: :projects_media
end
