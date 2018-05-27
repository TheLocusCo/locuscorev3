class ApplicationController < ActionController::API
  include CanCan::ControllerAdditions
  include DeviseTokenAuth::Concerns::SetUserByToken

  rescue_from ActiveRecord::RecordInvalid do |exception|
    if current_user
      render json: { errors: [exception.record.errors.messages] }
    end
  end

  rescue_from ActiveRecord::RecordNotUnique do |exception|
    if current_user
      render json: { error: "Internal Server Error", exception: [exception] }
    end
  end

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
