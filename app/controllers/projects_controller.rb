class ProjectsController < ApplicationController
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
    @project = Project.new(project_params)

    if @project.save
      render :show, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    if @project.update(project_params)
      render :show, status: :ok, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
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
      params.fetch(:project, {})
    end
end
