class ChangingJoinTablesToCreatedAt < ActiveRecord::Migration[5.1]
  def change
    rename_column :graphics_categories, :inserted_at, :created_at
    rename_column :posts_categories, :inserted_at, :created_at
    rename_column :projects_categories, :inserted_at, :created_at
    rename_column :mangas_categories, :inserted_at, :created_at
    rename_column :media_categories, :inserted_at, :created_at
    rename_column :posts_media, :inserted_at, :created_at
    rename_column :projects_media, :inserted_at, :created_at
  end
end
