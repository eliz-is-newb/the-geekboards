class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
    
        def create 
            user = User.create!(user_params)
            render json: user, serializer: UserSerializer, status: :created 
        end 

        def index 
            users = User.all 
            render json: users
        end 

        def show 
            user = find_user
            render json: user
        end 
        
        def user_comments 
            user = find_user 
            render json: User.comment
        end 
        
        def find_user_posts
            user = User.find(params[:id])
            render json: user, serializer: ShowUserPostsSerializer  
        end 


        private 

        def find_user
            User.find(params[:id])
        end
        
        def user_params 
            params.permit(:username, :password, :email) 
        end 
        
        def render_unprocessable_entity_response(exception)
            render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
        end 
        
        def render_not_found_response 
            render json: { error: "User not found"}, status: :not_found 
        end    
end
