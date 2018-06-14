class AddSlugToPostsProjectsGraphics < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :slug, :string
    add_index :posts, :slug

    add_column :projects, :slug, :string
    add_index :projects, :slug

    add_column :graphics, :slug, :string
    add_index :graphics, :slug
  end
end
