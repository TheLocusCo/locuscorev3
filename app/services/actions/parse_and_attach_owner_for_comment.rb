module Actions
  class ParseAndAttachOwnerForComment
    extend LightService::Action
    expects :params, :main_object
    promises :params, :main_object

    executed do |context|
      next context if !context.params.key?(:owner) || context.params[:owner].empty?
      owner = [params[:commentable_type].constantize.send(:find, params[:owner][:id])]

      context.main_object.send(params[:commentable_type].downcase.pluralize) = owner
    end
  end
end
