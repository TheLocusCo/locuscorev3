json.data do
  json.array! @mangas, partial: 'mangas/manga', as: :manga
end
json.merge! Manga.map_pagination_meta(:name)
