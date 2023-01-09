# json.partial! 'review', review: @review

json.extract! @review, :id, :reviewer_id, :listing_id, :title, :body, :star_rating, :created_at

#key-value pair to get username in front end
json.username @review.reviewer.username

json.create_date @review.created_at.strftime("%b %e, %Y")
json.update_date @review.updated_at.strftime("%b %e, %Y")
