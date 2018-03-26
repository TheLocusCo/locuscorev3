json.data do
  json.array! @resumes, partial: 'resumes/resume', as: :resume
end
json.merge! Resume.map_pagination_meta(Resume::DEFAULT_PAGINATION_COLUMN)
