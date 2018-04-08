class RolesController < ApplicationController
  load_and_authorize_resource
  before_action :authenticate_user!
  before_action :set_role, only: %i(edit show update destroy)

  # GET /roles
  # GET /roles.json
  def index
    @roles = Role.fetch_ordered_by_page(params["page"])
  end

  # GET /roles/1
  # GET /roles/1.json
  def show
  end

  def new
  end

  def edit
  end

  # POST /roles
  # POST /roles.json
  def create
    @role = Role.new(role_params)

    if @role.save
      render :show, status: :created, location: @role
    else
      render json: {errors: errors_as_array_hash(@role.errors)}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /roles/1
  # PATCH/PUT /roles/1.json
  def update
    if @role.update(role_params)
      render :show, status: :ok, location: @role
    else
      render json: {errors: errors_as_array_hash(@role.errors)}, status: :unprocessable_entity
    end
  end

  # DELETE /roles/1
  # DELETE /roles/1.json
  def destroy
    @role.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_role
      @role = Role.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def role_params
      params.require(:role).permit(:id, :name, :description, :pf_graphics, :pf_projects, :pf_posts, :pf_users, :pf_categories, :pf_roles, :pf_resumes, :pf_media, :pf_mangas, :pf_notifications, :pf_comments, :pf_visits)
    end
end
