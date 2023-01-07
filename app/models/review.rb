# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :bigint           not null
#  listing_id  :bigint           not null
#  title       :string           not null
#  body        :string           not null
#  star_rating :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
    validates :reviewer_id, :listing_id, :title, :body, :star_rating, presence: true

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end
