module Actions
  class ParseAndAttachOwnerForComment
    extend LightService::Action
    expects :params, :main_object
    promises :params, :main_object

    executed do |context|
      next context if !context.params.key?(:owner) || context.params[:owner].empty?
      owner = [context.params[:commentable_type].constantize.send(:find, context.params[:owner][:id])]

      # Commented line doesn't work for some reason
      # context.main_object.send(params[:commentable_type].downcase.pluralize) = owner
      case context.params[:commentable_type].downcase.pluralize
      when 'graphics' then context.main_object.graphics = owner
      when 'mangas' then context.main_object.mangas = owner
      when 'posts' then context.main_object.posts = owner
      when 'projects' then context.main_object.projects = owner
      else                 raise "Unsupported owner for comment!"
      end
    end
  end
end
