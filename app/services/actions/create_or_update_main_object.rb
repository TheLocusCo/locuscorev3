module Actions
  class CreateOrUpdateMainObject
    extend LightService::Action
    expects :params, :obj_class, :action
    promises :params, :main_object

    executed do |context|
      main_object = case context.action
                    when :create then context.obj_class.capitalize.constantize
                                        .send(:create, context.params.except(:categories, :media))
                    when :update then context.obj_class.capitalize.constantize
                                        .send(:update, context.params[:id], context.params.except(:categories, :media))
                    end

      main_object.save if context.action == :create

      next context if object_errors?(main_object, context)

      context.main_object = main_object
    end

    def self.object_errors?(object, context)
      if object.errors.any?
        context.fail_and_return!(object.errors)
        return true
      end

      false
    end
  end
end
