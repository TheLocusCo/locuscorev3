class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable,
          :rememberable, :trackable, :validatable, :lockable
  include DeviseTokenAuth::Concerns::User
end
