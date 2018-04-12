json.data do
  json.array! @projects, partial: 'projects/project', as: :project, locals: {index: true}
end
json.merge! Project.map_pagination_meta(Project::DEFAULT_PAGINATION_COLUMN)
