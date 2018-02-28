Rails.application.routes.draw do
  resources :users
  resources :roles
  resources :resumes
  resources :notifications
  resources :media
  resources :mangas
  resources :graphics
  resources :categories
  resources :comments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :posts, only: %i(index show)
    resources :projects
  end
end
