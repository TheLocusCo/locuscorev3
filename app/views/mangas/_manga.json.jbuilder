json.(manga, :id, :name, :sources, :header_image_location, :genres, :needs_update, :total_chapters, :authors, :artists, :description, :downloaded_chapters, :licensed_at, :chapters_at)

json.categories manga.categories_as_basic_with_all
json category_genres manga.categories.pluck(:name).join(", ")

json.href "/mangas/#{manga.id}"
json.meta_title manga.name
json.field_meta Manga.map_field_metadata
