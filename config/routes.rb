Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]
  resources :posts, only: [:index, :show, :create, :destroy]
  resources :boards, only: [:index, :show]
  
  # ʚ♥ɞ Users
get '/users',             to: 'users#index'
get '/users/:id',         to: 'users#show'
get 'users/:id/posts',    to: 'users#find_user_posts'
post '/users',            to: 'users#create'


  # ʚ♥ɞ Posts
get '/posts',                   to: 'posts#index'
get '/boards/:id/posts',        to: 'posts#show' 
get '/boards/:id/posts/:id',    to: 'posts#show'
patch '/boards/:id/posts/:id',   to: 'posts#update'
post '/boards/:id/posts',       to: 'posts#create'
delete '/boards/:id/posts/:id', to: 'posts#destroy'

  # ʚ♥ɞ Boards
get '/boards',         to: 'boards#index' 
get '/boards/:id',     to: 'boards#show'

  # ʚ♥ɞ Comments
get '/boards/:id/posts/:id/comments',        to: 'post#comments' 
get '/boards/:id/posts/:id/comments/:id',    to: 'comments#show'
post '/boards/:id/posts/:id/comments',       to: 'comments#create'
delete '/boards/:id/posts/:id/comments/:id', to: 'comments#destroy'




  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
