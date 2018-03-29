class PageController < ApplicationController
  def index
    render file: "public/index.html"
  end

  def service_worker
    render file: "public/service-worker.js", content_type: "text/javascript"
  end
end
