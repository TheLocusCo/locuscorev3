class MediaController < ApplicationController
  before_action :set_medium, only: %i(edit show update destroy)

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

  # POST /media
  # POST /media.json
  def create
    @medium = Medium.new(medium_params)

    if @medium.save
      render :show, status: :created, location: @medium
    else
      render json: @medium.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /media/1
  # PATCH/PUT /media/1.json
  def update
    if @medium.update(medium_params)
      render :show, status: :ok, location: @medium
    else
      render json: @medium.errors, status: :unprocessable_entity
    end
  end

  # DELETE /media/1
  # DELETE /media/1.json
  def destroy
    @medium.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medium
      @medium = Medium.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def medium_params
      params.fetch(:medium, {})
    end
end
