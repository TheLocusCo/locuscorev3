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
    def fetch_ordered(preload_associations = [])
      order("created_at DESC").preload(*preload_associations)
    end

    def fetch_ordered_by_page(current_page, preload_associations = [])
      offset = 10 * ((current_page.to_i) - 1)

      limit(10).offset(offset).order("created_at DESC").preload(*preload_associations)
    end

    def map_field_metadata
      returned = self.columns.map { |c| { "#{c.name}".to_sym => c.type } }.reduce Hash.new, :merge # generate a hash of all of the fields and their types

      returned = self.respond_to?(:fields_to_not_show) ? returned.except(*self.fields_to_not_show) : returned.except(:id, :created_at, :created_at, :updated_at)
      returned = returned.merge(self.text_fields) if self.respond_to?(:text_fields)
      returned = returned.merge(self.many_to_many_as) if self.respond_to?(:many_to_many_as)
      returned = self.respond_to?(:tooltips) ? returned.merge(self.tooltips) : returned.merge({tooltips: {}})
      returned = self.respond_to?(:select_fields) ? returned.merge(self.select_fields) : returned.merge({select: {}})
      returned.merge!({resource_type: self.to_s.downcase, resource_plural: self.to_s.pluralize.downcase})
    end
  end
end

# include the extension
ActiveRecord::Base.send(:include, ActiveRecordExtension)
