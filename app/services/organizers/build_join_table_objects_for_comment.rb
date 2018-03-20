module Organizers
  class BuildJoinTableObjectsForComment
    extend LightService::Organizer

    def self.call(params, action)
      with(params: params, action: action).reduce(
        Actions::CreateOrUpdateComment,
        Actions::ParseAndAttachOwnerForComment,
      )
    end
  end
end
