parent_object = Comment.parse_owned_by(@comment, "owner")
parent_hash = {}
parent_hash[parent_object.class.to_s.downcase.to_sym] = parent_object
json.data do
  json.partial! "comments/comment", comment: @comment
  json.owned_by Comment.parse_owned_by(@comment, "title")
  json.owner do
    json.partial!("#{@comment.commentable_type.pluralize.downcase}/#{@comment.commentable_type.downcase}", parent_hash)
  end
  json.merge!({field_meta: Comment.map_field_metadata.merge({owner: :commentable_select, select: { owner: Comment.get_commentables(@comment.commentable_type) }})})
end
