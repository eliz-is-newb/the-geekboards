class PostSerializer < ActiveModel::Serializer
  attributes :id, :date, :body, :board_id
  belongs_to :user
  has_many :comments
end
