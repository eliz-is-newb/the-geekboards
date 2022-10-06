class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :image_url
      t.string :body
      t.integer :board_id
      t.integer :user_id 
      t.timestamps
    end
  end
end
