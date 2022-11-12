class User < ApplicationRecord

has_many    :posts
has_many    :comments

    
validates :username, uniqueness: true, presence: true  
validates :email, uniqueness: true, presence: true
validates :password, presence: true, length: { in: 5..25 } 
has_secure_password
end
