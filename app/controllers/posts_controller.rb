class PostsController < ApplicationController
  before_action :authenticate_user!, except: %i(index show)
  before_action :set_post, only: %i(edit show update destroy)

  def index
    @posts = case params["mode"]
             when "withoutHidden" then Post.fetch_ordered_by_page(params["page"], %i(user categories media)).not_hidden_and_is_published
             else                      Post.fetch_ordered_by_page(params["page"], %i(user categories media))
             end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  def new
  end

  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    service_result = Organizers::BuildJoinTableObjects.call(post_params, 'post', 'new')
    @post = service_result.main_object

    if service_result.failure?
      render json: {errors: service_result.message}, status: :unprocessable_entity
    else
      render :show, status: :created, location: @post
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    if @post.update(post_params)
      render :show, status: :ok, location: @post
    else
      render json: {errors: @post.errors}, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :content, :author_id, :icon, :hidden, :published_at, categories: %i(id name), media: %i(id name))
    end
end
