class PostsController < ApplicationController
  before_action :set_post, only: %i(show update destroy)

  def index
    @posts = case params["mode"]
             when "withoutHidden" then Post.fetch_ordered_by_page(params["page"], %i(user categories media)).not_hidden_and_is_published
             else                      Post.fetch_ordered_by_page(params["page"], %i(user categories media))
             end
  end
end
