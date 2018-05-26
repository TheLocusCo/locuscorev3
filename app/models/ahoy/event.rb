class Ahoy::Event < ApplicationRecord
  include Ahoy::QueryMethods

  self.table_name = "ahoy_events"

  belongs_to :visit
  belongs_to :user, optional: true

  def self.events_for_ip_and_visit(ip, visit_id)
    joins(:visit)
      .where("ahoy_visits.ip = ? AND ahoy_visits.id != ?", ip, visit_id)
  end

  def self.uniq_events_days_for_ip(ip)
    joins(:visit)
      .where("ahoy_visits.ip = ?", ip).order("time ASC")
      .pluck(:time).map { |x| x.strftime("%m/%d/%Y") }.uniq
  end

  def self.top_x_url_visits_for_ip(x, ip)
    joins(:visit)
      .where("ahoy_visits.ip = ?", ip).order("time DESC")
      .pluck(:properties)
      .each_with_object(Hash.new(0)) { |props, counts| counts[props["page"]] += 1 }
      .sort_by { |k, v| v }.reverse.take(x).map { |x| x[0] }.reverse
  end
end
