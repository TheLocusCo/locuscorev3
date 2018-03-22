class CommentsController < ApplicationController
  load_and_authorize_resource
  before_action :authenticate_user!, except: %i(create)
  before_action :set_comment, only: %i(edit show update destroy)
  skip_load_resource only: :create

  # GET /comments
  # GET /comments.json
  def index
    @comments = case params["type"]
                when "post" then Comment.belonging_to(:posts)
                when "projects" then Comment.belonging_to(:projects)
                when "graphics" then Comment.belonging_to(:graphics)
                when "manga" then Comment.belonging_to(:manga)
                else              Comment.fetch_ordered_by_page(params["page"])
                end
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
  end

  def new
  end

  def edit
  end

  # POST /comments
  # POST /comments.json
  def create
    comment_params[:poster_ip] = request.remote_ip
    service_result = Organizers::BuildJoinTableObjectsForComment.call(comment_params, :create)
    @comment = service_result.main_object

    if service_result.failure?
      render json: {errors: service_result.message}, status: :unprocessable_entity
    else
      render :show, status: :created, location: @comment
    end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    service_result = Organizers::BuildJoinTableObjectsForComment.call(comment_params, :update)
    @comment = service_result.main_object

    if service_result.failure?
      render json: {errors: service_result.message}, status: :unprocessable_entity
    else
      render :show, status: :ok, location: @comment
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:id, :poster_name, :poster_email, :poster_website, :content, :approved, :user_id, :commentable_type, owner: [:id], manga: [:id], post: [:id], project: [:id], graphic: [:id])
    end
end
