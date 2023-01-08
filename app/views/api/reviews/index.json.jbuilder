# @reviews.each do |review|
#     json.set! review.id do
#         json.partial! 'review', review: review
#     end
# end

@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :reviewer_id, :listing_id, :title, :body, :star_rating, :created_at

        #another key-value pair for extracting the username
        json.username review.reviewer.username
    end
end
