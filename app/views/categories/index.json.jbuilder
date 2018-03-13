json.data do
  json.array! @categories, partial: 'categories/category', as: :category
end
