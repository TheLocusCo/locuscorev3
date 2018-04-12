json.data do
  json.array! @roles, partial: 'roles/role', as: :role, locals: {index: true}
end
json.merge! Role.map_pagination_meta(Role::DEFAULT_PAGINATION_COLUMN)
