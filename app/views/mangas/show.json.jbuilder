json.data do
  json.partial! "mangas/manga", manga: @manga
  json.comments @manga.comments, partial: 'comments/comment', as: :comment
end
