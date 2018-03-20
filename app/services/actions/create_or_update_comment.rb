module Actions
  class CreateOrUpdateComment
    extend LightService::Action
    expects :params, :action
    promises :params, :main_object

    executed do |context|
      context.params[:approved] = true if context.params.key?(:user_id)
      main_object = case context.action
                    when :create then Comment.send(:create, context.params)
                    when :update then Comment.send(:update, context.params[:id], context.params)
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
