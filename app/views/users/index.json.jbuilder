json.data do
  json.array! @users, partial: 'users/user', as: :user
end
json.merge! User.map_pagination_meta(:username)
