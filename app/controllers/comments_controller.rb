class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocesssable_entity_response
  
    def create 
        comment = Comment.create!(comment_params)
        render json: comment, serializer: CommentSerializer, status: :created 
    end 
    

    
    def show 
        comment = find_comment
        render json: comment
    end 
    
     def destroy 
        comment = find_comment 
        Comment.destroy
        head :no_content 
    end 
    
    
    private 
    
    def find_comment 
        Comment.find(params[:id]) 
    end 
    
    def comment_params 
        params.permit(:body, :post_id, :user_id) 
    end 
    
    def render_not_found_response
        render json: { error: "Comment not found" }, status: :not_found 
    end 
    
    def render_unprocessable_entity_response(exception) 
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
    end 

end
