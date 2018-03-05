Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :posts, only: %i(index show)
    resources :projects, only: %i(index show)
  end

  scope '/authed' do
    resources :users
    resources :roles
    resources :resumes
    resources :notifications
    resources :media
    resources :mangas
    resources :graphics
    resources :categories
    resources :comments
    resources :posts
  end
end
