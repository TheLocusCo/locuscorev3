Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks], controllers: {
    sessions: 'custom/sessions',
    token_validations: 'custom/token_validations'
  }

  mount Locuscorev3Mangas::Engine, at: "/"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :graphics, only: %i(index show), defaults: { format: 'json' }
    resources :posts, only: %i(index show), defaults: { format: 'json' }
    resources :projects, only: %i(index show), defaults: { format: 'json' }
    resources :categories, only: [:index], defaults: { format: 'json' }
    resources :notifications, only: [:create], defaults: { format: 'json' }
    resources :comments, only: [:create], defaults: { format: 'json' }

    get 'media/:id/show_image', to: 'media#show_image'
    get 'media/:id/show_download', to: 'media#show_download'
    get 'primary_resume_download', to: 'resumes#primary_resume_download'

    get '/search_tree', to: 'search#search_tree'
    get '/field_search', to: 'search#field_search'
    get '/search_submit', to: 'search#search_submit'
  end

  scope '/authed' do
    get 'users/new', to: 'users#new'
    resources :users, defaults: { format: 'json' }
    get 'users/:id/edit', to: 'users#edit'

    get 'roles/new', to: 'roles#new'
    resources :roles, defaults: { format: 'json' }
    get 'roles/:id/edit', to: 'roles#edit'

    get 'resumes/new', to: 'resumes#new'
    resources :resumes, defaults: { format: 'json' }
    get 'resumes/:id/edit', to: 'resumes#edit'

    get 'notifications/new', to: 'notifications#new'
    resources :notifications, defaults: { format: 'json' }
    get 'notifications/:id/edit', to: 'notifications#edit'

    get 'media/new', to: 'media#new'
    resources :media, defaults: { format: 'json' }
    get 'media/:id/edit', to: 'media#edit'

    get 'graphics/new', to: 'graphics#new'
    resources :graphics, defaults: { format: 'json' }
    get 'graphics/:id/edit', to: 'graphics#edit'

    get 'categories/new', to: 'categories#new'
    resources :categories, defaults: { format: 'json' }
    get 'categories/:id/edit', to: 'categories#edit'

    get 'comments/new', to: 'comments#new'
    resources :comments, defaults: { format: 'json' }
    get 'comments/:id/edit', to: 'comments#edit'

    get 'projects/new', to: 'projects#new'
    resources :projects, defaults: { format: 'json' }
    get 'projects/:id/edit', to: 'projects#edit'

    get 'posts/new', to: 'posts#new'
    resources :posts, defaults: { format: 'json' }
    get 'posts/:id/edit', to: 'posts#edit'

    get 'media/:id/show_image', to: 'media#show_image'
    get 'media/:id/show_download', to: 'media#show_download'
    patch 'media/:id/upload_image', to: 'media#upload_image'
    patch 'media/:id/upload_generic', to: 'media#upload_generic'

    resources :visits, defaults: { format: 'json' }

    get '/search_tree', to: 'search#search_tree'
    get '/field_search', to: 'search#field_search'
    get '/search_submit', to: 'search#search_submit'
  end

  get '/service-worker', to: 'page#service_worker'

  get '*path', to: 'page#index', constraints:
  -> (request) do
    !request.xhr? && request.format.html?
  end
end
