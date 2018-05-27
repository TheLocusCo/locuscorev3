module Actions
  class ParseAndUpdateCategories
    extend LightService::Action
    expects :params, :main_object
    promises :params, :main_object

    # errors for invalid categories are caught in application controller
    executed do |context|
      next context if !context.params.key?(:categories) || context.params[:categories].empty?

      categories = []
      context.params[:categories].each do |cat|
        next if cat[:name] == 'All Categories'
        categories << Category.find_or_create_by(cat)
      end

      context.main_object.categories = categories
    end
  end
end
