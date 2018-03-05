class FixCreatedAtAndAddIndexesToUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :encrypted_password, :string, :null => false, :default => ""

    add_index :users, [:uid, :provider],     unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :confirmation_token,   unique: true

    rename_column :categories, :inserted_at, :created_at
    rename_column :comments, :inserted_at, :created_at
    rename_column :graphics, :inserted_at, :created_at
    rename_column :mangas, :inserted_at, :created_at
    rename_column :media, :inserted_at, :created_at
    rename_column :notifications, :inserted_at, :created_at
    rename_column :posts, :inserted_at, :created_at
    rename_column :projects, :inserted_at, :created_at
    rename_column :resumes, :inserted_at, :created_at
    rename_column :roles, :inserted_at, :created_at
  end
end
