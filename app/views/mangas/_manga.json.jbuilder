json.(manga, :id, :name, :sources, :header_image_location, :genres, :needs_update, :total_chapters, :authors, :artists, :description, :downloaded_chapters, :licensed_at, :chapters_at)

json.categories manga.categories_as_basic_with_all
json.category_genres manga.categories.pluck(:name).join(", ")

if Rails.env.development?
  json.image_location ActionController::Base.helpers.asset_url("locuscorev3_mangas/manga_covers/#{manga.header_image_location.split("/").last}", type: :image).prepend("#{ENV['REACT_APP_BASE_ENDPOINT']}:#{ENV['REACT_APP_API_PORT']}")
else
  json.image_location ActionController::Base.helpers.asset_url("locuscorev3_mangas/manga_covers/#{manga.header_image_location.split("/").last}", type: :image).prepend(ENV['REACT_APP_BASE_ENDPOINT'])
end
json.href "/mangas/#{manga.id}"
json.meta_title manga.name
json.field_meta Manga.map_field_metadata
