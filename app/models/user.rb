class User < ApplicationRecord
  before_save :downcase
  before_save :ensure_unique

  # Include default devise modules.
  devise :database_authenticatable,
          :rememberable, :trackable, :validatable, :lockable
  include DeviseTokenAuth::Concerns::User

  validates :username, presence: true, length: { in: 6..20 }
  validates :email, presence: true, format: { with: /@/, message: "Please ensure proper email format" }
  validates :encrypted_password, presence: true
  validates :role_id, presence: true

  has_many :posts, foreign_key: :author_id
  has_many :comments
  belongs_to :role

  def self.is_admin?(user_id)
    User.find(user_id.to_i).preload(:role).role.name == "Admin"
  end

  def self.fields_to_not_show
    [:id, :current_sign_in_ip, :ip_list, :sign_in_count, :encrypted_password, :created_at, :updated_at]
  end

  def self.text_fields
    {password: :string}
  end

  def self.tooltips
    {tooltips: {password: "Entering anything into this field will change the user's password, leaving it blank will leave it the same."}}
  end

  def self.select_fields
    {role: :select, select: { role: get_roles }}
  end

  def downcase
    self.username.downcase
    self.email.downcase
  end

  def ensure_unique
    self.ip_list.uniq
  end

  private
    def get_roles
      Role.pluck(:name)
    end
end
