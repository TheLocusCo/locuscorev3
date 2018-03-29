class PageController < ApplicationController
  def index
    send_file("#{Rails.root}/client/build/index.html", type: 'text/html')
  end

  def service_worker
    send_file("#{Rails.root}/client/build/service-worker.js", type: 'text/javascript')
  end
end
