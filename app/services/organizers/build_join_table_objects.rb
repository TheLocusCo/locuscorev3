module Organizers
  class BuildJoinTableObjects
    extend LightService::Organizer

    def self.call(params, obj_class, action)
      with(params: params, obj_class: obj_class, action: action).reduce(
        Actions::CreateOrUpdateMainObject,
        Actions::ParseAndUpdateCategories,
        Actions::ParseAndUpdateMedia
      )
    end
  end
end
