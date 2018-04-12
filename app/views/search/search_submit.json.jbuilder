json.data do
  json.results do
    json.array! @search_results[:results], partial: "#{@search_results[:model]}/#{@search_results[:model].singularize}", as: @search_results[:model].singularize.to_sym, locals: {index: true}
  end
  json.model @search_results[:model]
  json.params @search_results[:params]
end

json.total_pages @search_results[:total_pages]
json.pagination_meta @search_results[:pagination_meta]
