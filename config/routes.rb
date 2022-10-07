Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]
  resources :posts, only: [:index, :show, :create, :destroy]
  resources :boards, only: [:index, :show]
  
  # ʚ♥ɞ Users
GET '/users',     to: 'users#index'
GET '/users/:id', to: 'users#show'
POST '/users',    to: 'users#create'

  # ʚ♥ɞ Posts
GET '/posts',                   to: 'posts#index'
GET '/posts/:id',               to: 'posts#show' 
POST '/boards/:id/posts',       to: 'posts#create'
DELETE '/boards/:id/posts/:id', to: 'posts#destroy'

  # ʚ♥ɞ Boards
GET '/boards',         to: 'boards#index' 
GET '/boards/:id',     to: 'boards#show'

  # ʚ♥ɞ Comments
GET '/boards/:id/posts/:id/comments',        to: 'post#comments' 
GET '/boards/:id/posts/:id/comments/:id',    to: 'comments#show'
POST '/boards/:id/posts/:id/comments',       to: 'comments#create'
DELETE '/boards/:id/posts/:id/comments/:id', to: 'comments#destroy'




  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
