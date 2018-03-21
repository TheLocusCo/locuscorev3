class GraphicsController < ApplicationController
  load_and_authorize_resource
  before_action :authenticate_user!, except: %i(index show)
  before_action :set_graphic, only: %i(edit show update destroy)

  # GET /graphics
  # GET /graphics.json
  def index
    @graphics = Graphic.fetch_ordered_by_page(params["page"]).where.not(library: "scenejs")
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
    @graphic = Graphic.new(graphic_params)

    if @graphic.save
      render :show, status: :created, location: @graphic
    else
      render json: @graphic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /graphics/1
  # PATCH/PUT /graphics/1.json
  def update
    if @graphic.update(graphic_params)
      render :show, status: :ok, location: @graphic
    else
      render json: @graphic.errors, status: :unprocessable_entity
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

    # Never trust parameters from the scary internet, only allow the white list through.
    def graphic_params
      params.require(:medium).permit(:id, :title, :script_content, :icon, :load_from_file, :canvas_id, :fullscreen_by_default, :content_description, :basic_description, :extra_params)
    end
end
