class CategoriesController < ApplicationController
  load_and_authorize_resource
  before_action :set_category, only: %i(edit show update destroy)

  # GET /categories
  # GET /categories.json
  def index
    @categories = case params["type"]
                  when "posts" then Category.belonging_to("posts")
                  when "projects" then Category.belonging_to("projects")
                  when "graphics" then Category.belonging_to("graphics")
                  when "mangas" then Category.belonging_to("mangas")
                  when "media" then Category.belonging_to("media")
                  else              Category.ordered_by_name
                  end

    @categories = case params["mode"]
                  when "withAllCat" then @categories.uniq.to_a.insert(0, Category.new({id: 0, name: "All Categories"}))
                  else                   @categories
                  end
  end

  # GET /categories/1
  # GET /categories/1.json
  def show
  end

  def new
  end

  def edit
  end

  # POST /categories
  # POST /categories.json
  def create
    @category = Category.new(category_params)

    if @category.save
      render :show, status: :created, location: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  # PATCH/PUT /categories/1.json
  def update
    if @category.update(category_params)
      render :show, status: :ok, location: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  # DELETE /categories/1.json
  def destroy
    @category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def category_params
      params.require(:category).permit(:name)
    end
end
