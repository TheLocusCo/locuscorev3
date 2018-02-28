module ActiveRecordExtension

  extend ActiveSupport::Concern

  # add your instance methods here
  # def foo
  #   "foo"
  # end

  def categories_as_basic_with_all(returned = [])
    returned << categories.map { |x| { id: x.id, name: x.name }}
    returned.insert(0, { id: 0, name: "All Categories" })

    returned.flatten(1)
  end

  def media_with_urls(returned = [])
    returned << media.map { |x| { id: x.id, name: x.name } }

    returned.flatten(1)
  end

  # add your static(class) methods here
  class_methods do
    def fetch_ordered_by_page(current_page, preload_associations = [])
      offset = 10 * ((current_page.to_i) - 1)

      limit(10).offset(offset).order("inserted_at DESC").preload(*preload_associations)
    end

    def map_field_metadata
      {}
    end
  end
end

# include the extension
ActiveRecord::Base.send(:include, ActiveRecordExtension)
