class Comment < ApplicationRecord
  validates :content, presence: true, length: { minimum: 5 }
  validates :poster_name, presence: true
  validates :poster_email, presence: true
  validates :commentable_type, presence: true

  has_and_belongs_to_many :projects, join_table: :projects_comments
  has_and_belongs_to_many :posts, join_table: :posts_comments
  has_and_belongs_to_many :graphics, join_table: :graphics_comments
  has_and_belongs_to_many :mangas, join_table: :mangas_comments

  before_destroy { |p| p.projects.clear }
  before_destroy { |p| p.posts.clear }
  before_destroy { |p| p.graphics.clear }
  before_destroy { |p| p.mangas.clear }

  scope :belonging_to, -> (name) { joins(name.to_sym) }
  scope :get_meta_titles_for_page, -> (page) { order("created_at DESC").select(:id, :created_at).limit(10).offset(10 * (page - 1)) }

  def self.fields_to_not_show
    [:id, :commentable_id, :created_at, :updated_at]
  end

  def self.text_fields
    {content: :html, commentable_type: :disabled}
  end

  def self.tooltips
    {tooltips: {owner: "Use this to reassign the owner of the comment (can only reassign to the same type of owner)"}}
  end

  def self.parse_owned_by(comment, mode)
    case comment.commentable_type
    when "Graphic" then mode == "title" ? "#{comment.graphics.first.title} (#{comment.graphics.first.id})" : comment.graphics.first
    when "Manga" then mode == "title" ? "#{comment.mangas.first.name} (#{comment.mangas.first.id})" : comment.mangas.first
    when "Post" then mode == "title" ? "#{comment.posts.first.title} (#{comment.posts.first.id})" : comment.posts.first
    when "Projects" then mode == "title" ? "#{comment.projects.first.title} (#{comment.projects.first.id})" : comment.projects.first
    end
  end

  def self.get_commentables(commentable_type)
    case commentable_type
    when "Graphic" then Graphic.all.map { |x| {id: x.id, title: x.title} }.sort_by { |x| x[:title] }
    when "Manga" then Manga.all.map { |x| {id: x.id, name: x.name} }.sort_by { |x| x[:name] }
    when "Post" then Post.all.map { |x| {id: x.id, title: x.title} }.sort_by { |x| x[:title] }
    when "Project" then Project.all.map { |x| {id: x.id, name: x.name} }.sort_by { |x| x[:name] }
    end
  end
end
