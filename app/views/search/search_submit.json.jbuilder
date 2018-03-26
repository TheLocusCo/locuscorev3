json.data do
  json.results do
    json.array! @search_results[:results], partial: "#{@search_results[:model].pluralize}/#{@search_results[:model]}", as: @search_results[:model].to_sym
  end
  json.model @search_results[:model]
  json.params @search_results[:params]
end

json.total_pages @search_results[:total_pages]
json.pagination_meta @search_results[:pagination_meta]
