json.data do
  json.partial! "projects/project", project: @project
  json.comments @project.comments, partial: 'comments/comment', as: :comment
end
