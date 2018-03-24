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

  scope :get_meta_titles_for_page, -> (page) { order("created_at DESC").select(:id, :created_at, :username).limit(10).offset(10 * (page - 1)) }

  def self.is_admin?(user_id)
    User.find(user_id.to_i).role.name == "Super Admin"
  end

  def self.fields_to_not_show
    [
      :id, :current_sign_in_ip, :ip_list, :sign_in_count, :encrypted_password,
      :agent_list, :security_hash, :role_id, :provider, :uid, :reset_password_token,
      :reset_password_sent_at, :remember_created_at, :current_sign_in_at,
      :last_sign_in_at, :last_sign_in_ip, :confirmation_token, :confirmed_at,
      :confirmation_sent_at, :unconfirmed_email, :locked_at,:created_at, :updated_at
    ]
  end

  def self.text_fields
    {password: :string}
  end

  def self.tooltips
    {tooltips: {password: "Entering anything into this field will change the user's password, leaving it blank will leave it the same."}}
  end

  def self.select_fields
    {role: :select, select: { role: Role.pluck(:name) }}
  end

  def downcase
    self.username.downcase
    self.email.downcase
  end

  def ensure_unique
    self.ip_list.uniq
  end
end
