class ResumesController < ApplicationController
  load_and_authorize_resource
  skip_authorize_resource only: :primary_resume_download
  before_action :authenticate_user!, except: %i(show primary_resume_download)
  before_action :set_resume, only: %i(edit show update destroy)

  respond_to :json, :pdf

  # GET /resumes
  # GET /resumes.json
  def index
    @resumes = Resume.fetch_ordered_by_page(params["page"])
  end

  # GET /resumes/1
  # GET /resumes/1.json
  def show
    if request.format == 'application/pdf'
      if params[:download]
        send_pdf(download: true)
      else
        send_pdf
      end
    end
  end

  def new
  end

  def edit
  end

  def primary_resume_download
    @resume = Resume.where("company ilike ?", "%thelocus%").first

    if @resume.company.downcase != 'thelocus'
      raise "ActionController::UnpermittedParameters"
    end

    pdf = @resume.generate_pdf(true)
    send_data( pdf.render, filename: @resume.file_title, type: 'application/pdf')
  end

  # POST /resumes
  # POST /resumes.json
  def create
    @resume = Resume.new(resume_params)

    if @resume.save
      render :show, status: :created, location: @resume
    else
      render json: {errors: errors_as_array_hash(@resume.errors)}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /resumes/1
  # PATCH/PUT /resumes/1.json
  def update
    if @resume.update(resume_params)
      render :show, status: :ok, location: @resume
    else
      render json: {errors: errors_as_array_hash(@resume.errors)}, status: :unprocessable_entity
    end
  end

  # DELETE /resumes/1
  # DELETE /resumes/1.json
  def destroy
    @resume.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_resume
      @resume = Resume.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def resume_params
      params.require(:resume).permit(:id, :title, :company, :prawn_content)
    end

    def send_pdf(download: false)
      pdf = @resume.generate_pdf(true)
      pdf_args = {filename: @resume.file_title, type: 'application/pdf'}
      pdf_args[:disposition] = 'inline' unless download

      send_data(pdf.render, pdf_args)
    end
end
