class MediaController < ApplicationController
  load_and_authorize_resource
  before_action :authenticate_user!, except: %i(show_image show_download)
  before_action :set_medium, only: %i(edit show update destroy show_download show_image)

  # GET /media
  # GET /media.json
  def index
    @media = case params["mode"]
             when "all" then  Medium.fetch_ordered
             when "paginated" then Medium.fetch_ordered_by_page(params["page"])
             else                  Medium.fetch_ordered_by_page(params["page"])
             end
  end

  # GET /media/1
  # GET /media/1.json
  def show
  end

  def new
  end

  def edit
  end

  def show_image
  end

  def show_download
  end

  # POST /media
  # POST /media.json
  def create
    service_result = Organizers::BuildJoinTableObjects.call(medium_params, 'medium', :create)
    @medium = service_result.main_object

    if service_result.failure?
      render json: {errors: errors_as_array_hash(service_result.message)}, status: :unprocessable_entity
    else
      render :show, status: :created, location: @medium
    end
  end

  # PATCH/PUT /media/1
  # PATCH/PUT /media/1.json
  def update
    update_medium
  end

  def upload_generic
    params[:medium] = {}
    params[:medium][:id] = params[:id]
    params[:medium][:generic] = params[:file]

    update_medium
  end

  def upload_image
    params[:medium] = {}
    params[:medium][:id] = params[:id]
    params[:medium][:image] = params[:file]

    update_medium
  end

  # DELETE /media/1
  # DELETE /media/1.json
  def destroy
    @medium.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medium
      @medium = Medium.friendly.find(params[:id])
    end

    def create_params
      medium_params.except(:categories, :media)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def medium_params
      params.require(:medium).permit(:id, :name, :description, :globally_visible, :user_ids_who_can_view, :user_id, :image, :generic, categories: %i(id name))
    end

    def update_medium
      service_result = Organizers::BuildJoinTableObjects.call(medium_params, 'medium', :update)
      @medium = service_result.main_object

      if service_result.failure?
        render json: {errors: errors_as_array_hash(service_result.message)}, status: :unprocessable_entity
      else
        render :show, status: :ok, location: @medium
      end
    end
end
