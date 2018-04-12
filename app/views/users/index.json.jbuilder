json.data do
  json.array! @users, partial: 'users/user', as: :user, locals: {index: true}
end
json.merge! User.map_pagination_meta(User::DEFAULT_PAGINATION_COLUMN)
