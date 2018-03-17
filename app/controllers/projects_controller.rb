class ProjectsController < ApplicationController
  load_and_authorize_resource
  before_action :set_project, only: %i(edit show update destroy)

  # GET /projects
  # GET /projects.json
  def index
    @projects = case params["mode"]
                when "all"       then Project.fetch_ordered
                when "paginated" then Project.fetch_ordered_by_page(params["page"], %i(categories media))
                else                  Project.fetch_ordered
                end
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
  end

  def new
  end

  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    service_result = Organizers::BuildJoinTableObjects.call(project_params, 'project', :create)
    @project = service_result.main_object

    if service_result.failure?
      render json: {errors: service_result.message}, status: :unprocessable_entity
    else
      render :show, status: :created, location: @project
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    service_result = Organizers::BuildJoinTableObjects.call(project_params, 'project', :update)
    @project = service_result.main_object

    if service_result.failure?
      render json: {errors: service_result.message}, status: :unprocessable_entity
    else
      render :show, status: :ok, location: @project
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:id, :name, :main_description, :client, :role, :link, categories: %i(id name), media: %i(id name))
    end
end
