json.data do
  json.array! @roles, partial: 'roles/role', as: :role
end
json.merge! Role.map_pagination_meta(Role::DEFAULT_PAGINATION_COLUMN)
