json.data do
  json.array! @projects, partial: 'projects/project', as: :project
end
json.merge! Project.map_pagination_meta(:name)
