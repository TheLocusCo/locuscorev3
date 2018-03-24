class ApplicationController < ActionController::API
  include CanCan::ControllerAdditions
  include DeviseTokenAuth::Concerns::SetUserByToken

  rescue_from CanCan::AccessDenied do |exception|
    render json: {error: "account", exception: ["You are not allowed to access this resource"]}
  end

  def errors_as_array_hash(error_hash = {})
    error_hash.map {|k,v| {"#{k}" => v}}
  end
end
