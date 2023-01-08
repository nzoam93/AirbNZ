# @reviews.each do |review|
#     json.set! review.id do
#         json.partial! 'review', review: review
#     end
# end

@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :reviewer_id, :listing_id, :title, :body, :star_rating

        #another key-value pair
        json.user review.reviewer
    end
end
