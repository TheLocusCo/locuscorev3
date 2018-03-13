module Actions
  class ParseAndUpdateMedia
    extend LightService::Action
    expects :params, :main_object
    promises :params, :main_object

    executed do |context|
      next context if !context.params.key?(:media) || context.params[:media].empty?

      media = []
      context.params[:media].each do |medium|
        media << Medium.find_by(medium)
      end

      context.main_object.media = media
    end
  end
end
