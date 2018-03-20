json.data do
  json.partial! "resumes/resume", resume: @resume, edit: true
end
