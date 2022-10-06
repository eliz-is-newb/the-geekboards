class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :board_id
  belongs_to :posts
end
