class MangasController < ApplicationController
  load_and_authorize_resource
  before_action :set_manga, only: %i(edit show update destroy)

  # GET /mangas
  # GET /mangas.json
  def index
    @mangas = case params["mode"]
              when "all"       then Manga.fetch_ordered
              when "paginated" then Manga.fetch_ordered_by_page(params["page"])
              else                  Manga.fetch_ordered
              end
  end

  # GET /mangas/1
  # GET /mangas/1.json
  def show
  end

  def new
  end

  def edit
  end

  # POST /mangas
  # POST /mangas.json
  def create
    service_result = Organizers::BuildJoinTableObjects.call(manga_params, 'manga', :create)
    @manga = service_result.main_object

    if service_result.failure?
      render json: {errors: service_result.message}, status: :unprocessable_entity
    else
      render :show, status: :created, location: @manga
    end
  end

  # PATCH/PUT /mangas/1
  # PATCH/PUT /mangas/1.json
  def update
    service_result = Organizers::BuildJoinTableObjects.call(manga_params, 'manga', :update)
    @manga = service_result.main_object

    if service_result.failure?
      render json: {errors: service_result.message}, status: :unprocessable_entity
    else
      render :show, status: :ok, location: @manga
    end
  end

  # DELETE /mangas/1
  # DELETE /mangas/1.json
  def destroy
    @manga.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manga
      @manga = Manga.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manga_params
      params.require(:manga).permit(:id, :name, :sources, :header_image_location, :total_chapters, :authors, :artists, :description, :downloaded_chapters, :chapters_at, categories: %i(id name))
    end
end
