class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :image_url
  belongs_to :user
  belongs_to :board 

end
