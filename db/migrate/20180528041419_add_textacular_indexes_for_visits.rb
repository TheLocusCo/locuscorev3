class AddTextacularIndexesForVisits < ActiveRecord::Migration[5.1]
  def up
    execute <<-SQL
      CREATE INDEX ON ahoy_visits USING gin(to_tsvector('english', ip));
      CREATE INDEX trgm_visits_ip_indx ON ahoy_visits USING gist (ip gist_trgm_ops);

      CREATE INDEX ON ahoy_visits USING gin(to_tsvector('english', referring_domain));
      CREATE INDEX ON ahoy_visits USING gin(to_tsvector('english', country));
      CREATE INDEX ON ahoy_visits USING gin(to_tsvector('english', region));
      CREATE INDEX ON ahoy_visits USING gin(to_tsvector('english', city));
      CREATE INDEX ON ahoy_visits USING gin(to_tsvector('english', landing_page));
      CREATE INDEX ON ahoy_visits USING gin(to_tsvector('english', browser));
      CREATE INDEX ON ahoy_visits USING gin(to_tsvector('english', os));
      CREATE INDEX ON ahoy_visits USING gin(to_tsvector('english', user_agent));
    SQL
  end

  def down
  end
end
