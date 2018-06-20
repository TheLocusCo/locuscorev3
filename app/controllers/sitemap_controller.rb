class SitemapController < ApplicationController
   def index
     @root_url = 'https://thelocus.co'
     @static_pages = [@root_url, "#{@root_url}/about_me", "#{@root_url}/contact", "#{@root_url}/web_resume", "#{@root_url}/site_stats"]
     @semi_static_pages = ["#{@root_url}/portfolio", "#{@root_url}/blog"]
     @posts = Post.order('created_at DESC').all
     @projects = Project.order('created_at DESC').all
     @graphics = Graphic.order('created_at DESC').all
   end
 end
