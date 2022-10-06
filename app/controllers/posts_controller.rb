class PostsController < ApplicationController
    before_action :set_event, only: %i[ show update destroy ]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

    def create 
        post = Post.create!(post_params)
        render json: post, serializer: PostSerializer, status: :created 
    end 
    
    def index
        if params[:board_id]
            board = Board.find(params[:board_id])
            @posts = board.posts
        else
            @posts = Post.all
        end
        render json: @posts
    end
    
    def comments 
        post = find_post 
        render json: post.comments
    end 
    
    def show 
        posts = find_post
        render json: post 
    end 
    
    def destroy 
        post = find_post 
        post.destroy
        head :no_content 
    end 
    
    
    private 
    
    def find_post 
        Post.find(params[:id])
    end 
    
    def post_params 
        params.permit(:title, :body, :user_id) 
    end 
    
    def render_not_found_response 
        render json: { error: "Post not found" }, status: :not_found 
    end 
    
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
    end 
end
