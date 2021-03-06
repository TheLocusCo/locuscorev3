source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.6.5'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails'
gem 'pg'
gem 'rake'
# Use Puma as the app server
gem 'puma'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'
gem 'nokogiri'
gem 'rest-client'
gem 'devise_token_auth'
gem 'devise'
gem 'omniauth'
gem 'rack-cors', :require => 'rack/cors'
gem 'paperclip', '>= 6.0.0'
gem 'aws-sdk-s3'
gem 'light-service'
gem 'cancancan'
gem 'prawn'
gem 'ahoy_matey'
gem 'maxminddb'
gem 'redcarpet'
gem 'friendly_id'
gem 'sprockets'
# gem 'textacular' # gem isn't adding its methods correctly
# gem 'locuscorev3_mangas', path: '../locuscorev3_mangas'
gem 'locuscorev3_mangas', git: "https://github.com/TheLocusCo/locuscorev3_mangas.git"
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development


# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

group :production do
  gem 'rails_12factor', group: :production
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'pry-rails'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'pry'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen'
  gem 'capybara'
  gem 'capybara-webkit'
  gem 'selenium-webdriver'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
