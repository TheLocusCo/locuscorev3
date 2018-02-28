class MangasController < ApplicationController
  before_action :set_manga, only: [:show, :update, :destroy]

  # GET /mangas
  # GET /mangas.json
  def index
    @mangas = Manga.all
  end

  # GET /mangas/1
  # GET /mangas/1.json
  def show
  end

  # POST /mangas
  # POST /mangas.json
  def create
    @manga = Manga.new(manga_params)

    if @manga.save
      render :show, status: :created, location: @manga
    else
      render json: @manga.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /mangas/1
  # PATCH/PUT /mangas/1.json
  def update
    if @manga.update(manga_params)
      render :show, status: :ok, location: @manga
    else
      render json: @manga.errors, status: :unprocessable_entity
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
      params.fetch(:manga, {})
    end
end
