class UsersController < ApplicationController
  load_and_authorize_resource
  before_action :authenticate_user!
  before_action :set_user, only: %i(edit show update destroy activity)

  # GET /users
  # GET /users.json
  def index
    @users = User.fetch_ordered_by_page(params["page"])
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  def activity
    @visit = Ahoy::Visit.order("started_at DESC").where(user_id: @user.id).first
    @ip_events = [] # All events that could be here would show up in the next var...
    @user_events = Ahoy::Event.events_for_user(@visit.id, @user.id)
    @event_days = Ahoy::Event.uniq_events_days_for_user(@user.id)
    @event_links = Ahoy::Event.top_x_url_visits_for_user(15, @user.id)
  end

  def new
  end

  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params.except(:role))

    if @user.save
      if user_params[:role]
        @user.role_id = Role.find_by_name(user_params[:role]).id
        @user.save
      end
      render :show, status: :created, location: @user
    else
      render json: {errors: errors_as_array_hash(@user.errors)}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    if @user.update(user_params.except(:role))
      if user_params[:role]
        @user.role_id = Role.friendly.find_by_name(user_params[:role]).id
        @user.save if @user.changed?
      end
      render :show, status: :ok, location: @user
    else
      render json: {errors: errors_as_array_hash(@user.errors)}, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:id, :username, :email, :name, :role, :password)
    end
end
