class GraphicsController < ApplicationController
  load_and_authorize_resource
  before_action :authenticate_user!, except: %i(index show)
  before_action :set_graphic, only: %i(edit show update destroy)

  # GET /graphics
  # GET /graphics.json
  def index
    @graphics = Graphic.fetch_ordered_by_page(params["page"])
  end

  # GET /graphics/1
  # GET /graphics/1.json
  def show
  end

  def new
  end

  def edit
  end

  # POST /graphics
  # POST /graphics.json
  def create
    service_result = Organizers::BuildJoinTableObjects.call(graphic_params, 'graphic', :create)
    @graphic = service_result.main_object

    if service_result.failure?
      render json: {errors: errors_as_array_hash(service_result.message)}, status: :unprocessable_entity
    else
      render :show, status: :created, location: @graphic
    end
  end

  # PATCH/PUT /graphics/1
  # PATCH/PUT /graphics/1.json
  def update
    service_result = Organizers::BuildJoinTableObjects.call(graphic_params, 'graphic', :update)
    @graphic = service_result.main_object

    if service_result.failure?
      render json: {errors: errors_as_array_hash(service_result.message)}, status: :unprocessable_entity
    else
      render :show, status: :ok, location: @graphic
    end
  end

  # DELETE /graphics/1
  # DELETE /graphics/1.json
  def destroy
    @graphic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_graphic
      @graphic = Graphic.find(params[:id])
    end

    def create_params
      graphic_params.except(:categories, :media)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def graphic_params
      params.require(:graphic).permit(:id, :title, :script_content, :library, :icon, :load_from_file, :canvas_id, :fullscreen_by_default, :content_description, :basic_description, :extra_params, categories: %i(id name))
    end
end
