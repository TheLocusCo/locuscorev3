json.data do
  json.array! @visits, partial: 'visits/visit', as: :visit, locals: {index: true}
end
json.merge! Visit.map_pagination_meta(Visit::DEFAULT_PAGINATION_COLUMN)
