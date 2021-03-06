class NotificationsController < ApplicationController
  load_and_authorize_resource
  before_action :authenticate_user!, except: %i(create)
  before_action :set_notification, only: %i(edit show update destroy)

  # GET /notifications
  # GET /notifications.json
  def index
    @notifications = case params["mode"]
                     when "forUser" then Notification.fetch_ordered.has_not_been_seen_by(params["forUser"]).check_authorization(params["forUser"])
                     else                Notification.fetch_ordered_by_page(params["page"])
                     end
  end

  # GET /notifications/1
  # GET /notifications/1.json
  def show
  end

  def new
  end

  def edit
  end

  # POST /notifications
  # POST /notifications.json
  def create
    @notification = Notification.new(notification_params)

    if @notification.save
      render :show, status: :created, location: @notification
    else
      render json: {errors: errors_as_array_hash(@notification.errors)}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notifications/1
  # PATCH/PUT /notifications/1.json
  def update
    if @notification.update(notification_params)
      render :show, status: :ok, location: @notification
    else
      render json: {errors: errors_as_array_hash(@notification.errors)}, status: :unprocessable_entity
    end
  end

  # DELETE /notifications/1
  # DELETE /notifications/1.json
  def destroy
    @notification.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_notification
      @notification = Notification.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def notification_params
      params.require(:notification).permit(:id, :from_name, :from_email, :content, :start_displaying_at, :stops_displaying_at, :viewed_users, :n_type, :icon, viewed_users: [])
    end
end
