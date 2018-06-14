class AddSlugToMostModels < ActiveRecord::Migration[5.1]
  def change
    add_column :mangas, :slug, :string
    add_index :mangas, :slug

    add_column :media, :slug, :string
    add_index :media, :slug

    add_column :resumes, :slug, :string
    add_index :resumes, :slug

    add_column :roles, :slug, :string
    add_index :roles, :slug

    add_column :users, :slug, :string
    add_index :users, :slug
  end
end
