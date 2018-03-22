module Actions
  class CreateOrUpdateComment
    extend LightService::Action
    expects :params, :action
    promises :params, :main_object

    executed do |context|
      context.params[:approved] = true if context.params.key?(:user_id)
      context.params[:owner] ||= {}
      context.params[:commentable_type] = "Graphic" if context.params.key?(:graphic)
      context.params[:commentable_type] = "Manga" if context.params.key?(:manga)
      context.params[:commentable_type] = "Post" if context.params.key?(:post)
      context.params[:commentable_type] = "Project" if context.params.key?(:project)

      if context.params.key?(:commentable_type) && !context.params[:owner].key?(:id)
        context.params[:owner][:id] = context.params[context.params[:commentable_type].downcase][:id]
      end

      main_object = case context.action
                    when :create then Comment.send(:create, context.params.except(:owner, :graphic, :manga, :post, :project))
                    when :update then Comment.send(:update, context.params[:id], context.params.except(:owner, :graphic, :manga, :post, :project))
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
