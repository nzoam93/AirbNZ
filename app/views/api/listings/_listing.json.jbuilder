json.extract! listing,
    :id,
    :owner_id,
    :title,
    :description,
    :address,
    :city,
    :state,
    :zip_code,
    :price,
    :num_beds,
    :num_baths,
    :num_guests
#We added another key-value pairing to allow us to grab the owner username
json.owner_name listing.owner.username

#adding another key-value pair
#it will be available in state under listing.photo_urls


# json.photo_urls listing.photos.map{|photo| photo.url}
