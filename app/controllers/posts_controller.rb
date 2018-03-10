class PostsController < ApplicationController
  before_action :set_post, only: %i(show update destroy)

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

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)

    if @post.save
      render :show, status: :created, location: @post.preload(:categories, :user)
    else
      render json: {errors: @post.errors}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    if @post.update(post_params)
      render :show, status: :ok, location: @post.preload(:categories, :comments, :user)
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
      params.require(:post).permit(:title, :content, :author_id, :icon, :hidden, :published_at)
    end
end
