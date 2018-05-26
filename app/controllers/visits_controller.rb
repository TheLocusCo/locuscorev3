class VisitsController < ApplicationController
  load_and_authorize_resource
  before_action :authenticate_user!
  before_action :set_visit, only: %i(show)

  # GET /visits
  # GET /visits.json
  def index
    @visits = Visit.fetch_ordered_by_page(params["page"], [], 'started_at DESC')
  end

  # GET /visits/1
  # GET /visits/1.json
  def show
    @ip_events = Ahoy::Event.events_for_ip_and_visit(@visit.ip, @visit.id)
    @event_days = Ahoy::Event.uniq_events_days_for_ip(@visit.ip)
    @event_links = Ahoy::Event.top_x_url_visits_for_ip(15, @visit.ip)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_visit
      @visit = Visit.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def visit_params
      params.require(:visit).permit(:id, :user_id)
    end
end
