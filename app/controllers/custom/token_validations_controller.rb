class Custom::TokenValidationsController < DeviseTokenAuth::TokenValidationsController
  def validate_token
    super do |resource|
      if resource.id?
        t = ahoy.authenticate(resource)
      end
    end
  end
end
