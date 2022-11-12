class UsersController < ApplicationController
    before_action :authorize, only: [:show, :update, :destroy]
    before_action :set_user, only: %i[ show update destroy ]
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
=======
    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
         
    def show
        user = set_user
        render json: user
    end

    def user_comments 
        user = find_user 
        render json: user.comments
    end 

        
        def find_user_posts
            user = User.find(params[:id])
            render json: user, serializer: ShowUserPostsSerializer  
        end 


        private 


        def set_user
            User.find_by(id: session[:user_id])
        end
        

        def find_user
            User.find(params[:id])
        end
        
        def authorize
            #If a session cookie does not include a user_id, return an error
            return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        end
        
        def user_params
            # PW and PW Confirmation automatically converted to password_digest on backend through bcrypt/has_secure_password
            params.permit( :username, :email, :password, :password_confirmation)
        end
        
        def render_unprocessable_entity_response(exception)
            render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
        end 
        
        def render_not_found_response 
            render json: { error: "User not found"}, status: :not_found 
        end    
end
