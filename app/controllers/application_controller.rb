class ApplicationController < ActionController::API
  include CanCan::ControllerAdditions
  include DeviseTokenAuth::Concerns::SetUserByToken

  after_action :authenticate_for_ahoy

  rescue_from CanCan::AccessDenied do |exception|
    render json: {error: "account", exception: ["You are not allowed to access this resource"]}
  end

  def errors_as_array_hash(error_hash = {})
    error_hash.map {|k,v| {"#{k}" => v}}
  end

  def authenticate_for_ahoy
    ahoy.authenticate(current_user) if current_user
  end
end
