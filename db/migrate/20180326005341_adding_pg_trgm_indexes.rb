class AddingPgTrgmIndexes < ActiveRecord::Migration[5.1]
  def up
    execute <<-SQL
      CREATE INDEX trgm_graphics_title_indx ON graphics USING gist (title gist_trgm_ops);

      CREATE INDEX trgm_mangas_name_indx ON mangas USING gist (name gist_trgm_ops);
      CREATE INDEX trgm_mangas_authors_indx ON mangas USING gist (authors gist_trgm_ops);
      CREATE INDEX trgm_mangas_artists_indx ON mangas USING gist (artists gist_trgm_ops);

      CREATE INDEX trgm_media_name_indx ON media USING gist (name gist_trgm_ops);

      CREATE INDEX trgm_notifications_from_email_indx ON notifications USING gist (from_email gist_trgm_ops);

      CREATE INDEX trgm_posts_title_indx ON posts USING gist (title gist_trgm_ops);

      CREATE INDEX trgm_projects_name_indx ON projects USING gist (name gist_trgm_ops);

      CREATE INDEX trgm_resumes_title_indx ON resumes USING gist (title gist_trgm_ops);

      CREATE INDEX trgm_users_username_indx ON users USING gist (username gist_trgm_ops);
      CREATE INDEX trgm_users_name_indx ON users USING gist (name gist_trgm_ops);
    SQL
  end

  def down
  end
end
