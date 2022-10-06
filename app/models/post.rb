class Post < ApplicationRecord
belongs_to  :board
belongs_to  :user 

validates   :title, presence: true 
validates   :body, length: { maximum: 650}
end
