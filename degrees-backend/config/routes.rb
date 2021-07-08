Rails.application.routes.draw do
  post 'connections/create', to: 'connections#create'
  get 'connections/index', to: 'connections#index'
  get 'connections/show', to: 'connections#show'
  get 'users/index', to: 'users#index'
  post 'users/create', to: 'users#create'
  get 'users/show', to: 'users#show'
  get 'users/destroy'
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
