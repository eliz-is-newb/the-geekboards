class PostSerializer < ActiveModel::Serializer
  attributes :id, :date, :body, :board_id
  has_many :comments
end
