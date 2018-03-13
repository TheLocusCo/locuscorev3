module Actions
  class CreateOrUpdateMainObject
    extend LightService::Action
    expects :params, :obj_class, :action
    promises :params, :main_object

    executed do |context|
      main_object = context.obj_class.capitalize.constantize.send(context.action, context.params.except(:categories, :media))
      main_object.save

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
