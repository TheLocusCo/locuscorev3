class Ahoy::Store < Ahoy::DatabaseStore
  def authenticate(data)
    visit = Ahoy::Visit.where(visit_token: data[:visit_token]).first
    visit ||= Ahoy::Visit.where(user_agent: data[:user_agent]).first

    if visit && visit.respond_to?(:user) && !visit.user
      begin
        visit.user = User.find(data[:user_id])
        visit.save!
      rescue ActiveRecord::AssociationTypeMismatch
        # do nothing
      end
    end
  end
end

# set to true for JavaScript tracking
Ahoy.api = true
Ahoy.server_side_visits = :when_needed
