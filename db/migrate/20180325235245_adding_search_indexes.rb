class AddingSearchIndexes < ActiveRecord::Migration[5.1]
  def up
    execute <<-SQL
      CREATE INDEX ON categories USING gin(to_tsvector('english', name));

      CREATE INDEX ON comments USING gin(to_tsvector('english', content));

      CREATE INDEX ON graphics USING gin(to_tsvector('english', title));

      CREATE INDEX ON mangas USING gin(to_tsvector('english', name));
      CREATE INDEX ON mangas USING gin(to_tsvector('english', authors));
      CREATE INDEX ON mangas USING gin(to_tsvector('english', artists));

      CREATE INDEX ON media USING gin(to_tsvector('english', name));

      CREATE INDEX ON notifications USING gin(to_tsvector('english', content));

      CREATE INDEX ON posts USING gin(to_tsvector('english', title));
      CREATE INDEX ON posts USING gin(to_tsvector('english', content));

      CREATE INDEX ON projects USING gin(to_tsvector('english', name));

      CREATE INDEX ON users USING gin(to_tsvector('english', username));
      CREATE INDEX ON users USING gin(to_tsvector('english', name));
    SQL
  end

  def down
  end
end
