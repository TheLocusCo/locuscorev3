module Ahoy
  class Tracker
    def authenticate(user)
      if exclude?
        debug "Authentication excluded"
      else
        @store.user = user

        data = {
          visit_token: visit_token,
          user_id: user.try(:id),
          user_agent: request.user_agent
        }

        @store.authenticate(data)
      end
      true
    rescue => e
      report_exception(e)
    end
  end
end
