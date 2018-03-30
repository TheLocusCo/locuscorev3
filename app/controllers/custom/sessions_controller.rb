class Custom::SessionsController < DeviseTokenAuth::SessionsController
  def create
    super do |resource|
      if resource.id?
        ahoy.authenticate(resource)
      end
    end
  end
end
