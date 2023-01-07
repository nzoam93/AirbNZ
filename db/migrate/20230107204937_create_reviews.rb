class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :reviewer, foreign_key: {to_table: :users}, null: false
      t.references :listing, foreign_key: true, null: false
      t.string :title, null: false
      t.string :body, null: false 
      t.timestamps
    end
  end
end
