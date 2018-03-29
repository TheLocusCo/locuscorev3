class PageController < ApplicationController
  def index
    render file: "public/index.html"
  end

  def service_worker
    render file: "public/service-worker.js"
  end
end
