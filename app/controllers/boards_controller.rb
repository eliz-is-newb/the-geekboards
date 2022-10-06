class BoardsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocesssable_entity_response
  
    def index 
        boards = Board.all 
        render json: boards
    end 
    
    def show 
        board = find_board 
        render json: board, serializer: BoardSerializer
    end 
    
    private 
    
    def find_board
        Board.find(params[:id]) 
    end 
    
    def render_not_found_response
        render json: { error: "Board not found" }, status: :not_found 
    end 
    
    def render_unprocessable_entity_response(exception) 
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
    end 
end
