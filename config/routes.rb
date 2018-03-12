Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :posts, only: %i(index show)
    resources :projects, only: %i(index show)
    resources :categories, only: [:index]
    resources :notifications, only: [:create]
    resources :comments, only: [:create]
  end

  scope '/authed' do
    get 'users/new', to: 'users#new'
    resources :users
    get 'users/:id/edit', to: 'users#edit'

    get 'roles/new', to: 'roles#new'
    resources :roles
    get 'roles/:id/edit', to: 'roles#edit'

    get 'resumes/new', to: 'resumes#new'
    resources :resumes
    get 'resumes/:id/edit', to: 'resumes#edit'

    get 'notifications/new', to: 'notifications#new'
    resources :notifications
    get 'notifications/:id/edit', to: 'notifications#edit'

    get 'media/new', to: 'media#new'
    resources :media
    get 'media/:id/edit', to: 'media#edit'

    get 'mangas/new', to: 'mangas#new'
    resources :mangas
    get 'mangas/:id/edit', to: 'mangas#edit'

    get 'graphics/new', to: 'graphics#new'
    resources :graphics
    get 'graphics/:id/edit', to: 'graphics#edit'

    get 'categories/new', to: 'categories#new'
    resources :categories
    get 'categories/:id/edit', to: 'categories#edit'

    get 'comments/new', to: 'comments#new'
    resources :comments
    get 'comments/:id/edit', to: 'comments#edit'

    get 'posts/new', to: 'posts#new'
    resources :posts
    get 'posts/:id/edit', to: 'posts#edit'
  end
end
