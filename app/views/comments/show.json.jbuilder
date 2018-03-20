json.data do
  json.partial! "comments/comment", comment: @comment
  json.owned_by Comment.parse_owned_by(@comment, "title")
end
