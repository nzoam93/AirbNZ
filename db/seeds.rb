# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



#aws stuff
require "open-uri"

#example for aws seeding. Make sure to use the real url AND to not put inside of appilcaitonrecord.transaction

# Attach bench photos
# Bench.first(3).each_with_index do |bench, index|
#   bench.photo.attach(
#     # The string passed to URI.open should be the URL of the image in its bucket.
#     # This sample assumes the bucket name is `benchbnb-seeds`.
#     io: URI.open("https://benchbnb-seeds.s3.amazonaws.com/bench_#{index + 1}.jpg"),
#     filename: "bench_#{index + 1}.jpg"
#   )
# end


# ApplicationRecord.transaction do
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Review.destroy_all
    Reservation.destroy_all
    Listing.destroy_all
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
    ApplicationRecord.connection.reset_pk_sequence!('reservations')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    user1 = User.create!(
      username: 'Demo-lition',
      email: 'demo@user.io',
      password: 'password'
    )

    user2 = User.create!(
      username: 'Noam',
      email: 'noam@gmail.com',
      password: 'password'
    )

    # More users
    # 10.times do
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   })
    # end

    puts "Creating listings..."
    listing1 = Listing.create!(
      owner_id: 2,
      title: '3 Bedroom in Oakland',
      description: 'This is the first example',
      address: '123 AirBNZ St',
      city: 'Oakland',
      state: 'CA',
      zip_code: '94605',
      price: 500,
      num_beds: 3,
      num_baths: 2,
      num_guests: 6
    )

    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1.jpg"), filename: "house1.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room1.jpg"), filename: "house1room1.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room2.jpg"), filename: "house1room2.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room3.jpg"), filename: "house1room3.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room4.jpg"), filename: "house1room4.jpg")

    listing2 = Listing.create!(
      owner_id: 2,
      title: '4 Bedroom in SF',
      description: 'This is the second example',
      address: '123 Post St',
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94605',
      price: 700,
      num_beds: 4,
      num_baths: 2,
      num_guests: 8
    )

    # listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2.jpg"), filename: "house2.jpg")
    # listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room1.jpg"), filename: "house2room1.jpg")
    # listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room2.jpg"), filename: "house2room2.jpg")
    # listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room3.jpg"), filename: "house2room3.jpg")
    # listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room4.jpg"), filename: "house2room4.jpg")

    listing3 = Listing.create!(
      owner_id: 2,
      title: '1 Bedroom in Vallejo',
      description: 'This is the third example',
      address: '123 Vallejo St',
      city: 'Vallejo',
      state: 'CA',
      zip_code: '94605',
      price: 300,
      num_beds: 1,
      num_baths: 1,
      num_guests: 2
    )

    # listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3.jpg"), filename: "house3.jpg")
    # listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room1.jpg"), filename: "house3room1.jpg")
    # listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room2.jpg"), filename: "house3room2.jpg")
    # listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room3.jpg"), filename: "house3room3.jpg")
    # listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room4.jpg"), filename: "house3room4.jpg")

    listing4 = Listing.create!(
      owner_id: 1,
      title: '5 Bedroom in San Rafael',
      description: 'This is the fourth example',
      address: '123 San Rafael St',
      city: 'San Rafael',
      state: 'CA',
      zip_code: '94605',
      price: 800,
      num_beds: 5,
      num_baths: 3,
      num_guests: 10
    )

    # listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4.jpg"), filename: "house4.jpg")
    # listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room1.jpg"), filename: "house4room1.jpg")
    # listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room2.jpg"), filename: "house4room2.jpg")
    # listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room3.jpg"), filename: "house4room3.jpg")
    # listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room4.jpg"), filename: "house4room4.jpg")


    listing5 = Listing.create!(
      owner_id: 1,
      title: '3 Bedroom in Richmond',
      description: 'This is the fifth example',
      address: '123 Richmond St',
      city: 'Richmond',
      state: 'CA',
      zip_code: '94605',
      price: 250,
      num_beds: 3,
      num_baths: 1,
      num_guests: 6
    )

    # listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5.jpg"), filename: "house5.jpg")
    # listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room1.jpg"), filename: "house5room1.jpg")
    # listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room2.jpg"), filename: "house5room2.jpg")
    # listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room3.jpg"), filename: "house5room3.jpg")
    # listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room4.jpg"), filename: "house5room4.jpg")

    listing6 = Listing.create!(
      owner_id: 1,
      title: '1 Bedroom in San Mateo',
      description: 'This is the sixth example',
      address: '123 San Mateo St',
      city: 'San Mateo',
      state: 'CA',
      zip_code: '94605',
      price: 150,
      num_beds: 1,
      num_baths: 1,
      num_guests: 2
    )

    listing7 = Listing.create!(
      owner_id: 1,
      title: '3 Bedroom in Palo Alto',
      description: 'This is the seventh example',
      address: '123 Palo Alto St',
      city: 'Palo Alto',
      state: 'CA',
      zip_code: '94605',
      price: 630,
      num_beds: 3,
      num_baths: 2,
      num_guests: 6
    )

    listing8 = Listing.create!(
      owner_id: 1,
      title: '4 Bedroom in Marin',
      description: 'This is the eighth example',
      address: '123 Marin St',
      city: 'Marin',
      state: 'CA',
      zip_code: '94605',
      price: 545,
      num_beds: 4,
      num_baths: 2,
      num_guests: 8
    )

    listing9 = Listing.create!(
      owner_id: 1,
      title: '6 Bedroom in Vallejo',
      description: 'This is the ninth example',
      address: '123 Vallejo St',
      city: 'Vallejo',
      state: 'CA',
      zip_code: '94605',
      price: 430,
      num_beds: 6,
      num_baths: 3,
      num_guests: 12
    )

    listing10 = Listing.create!(
      owner_id: 1,
      title: '2 Bedroom in SF',
      description: 'This is the tenth example',
      address: '123 San Francisco St',
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94605',
      price: 160,
      num_beds: 2,
      num_baths: 1,
      num_guests: 4
    )

    listing11 = Listing.create!(
      owner_id: 1,
      title: '2 Bedroom in Oakland',
      description: 'This is the eleventh example',
      address: '123 Oakland St',
      city: 'Oakland',
      state: 'CA',
      zip_code: '94605',
      price: 140,
      num_beds: 2,
      num_baths: 1,
      num_guests: 4
    )

    listing12 = Listing.create!(
      owner_id: 2,
      title: '1 Bedroom in Marin',
      description: 'This is the twelvth example',
      address: '123 Marin St',
      city: 'Marin',
      state: 'CA',
      zip_code: '94605',
      price: 95,
      num_beds: 1,
      num_baths: 1,
      num_guests: 2
    )

    puts "Creating reservations..."
    reservation1 = Reservation.create!(
      reserver_id: 1,
      listing_id: 4,
      check_in_date: "2023-01-15",
      check_out_date: "2023-01-19",
      num_guests: 6
    )

    reservation2 = Reservation.create!(
      reserver_id: 2,
      listing_id: 5,
      check_in_date: "2023-01-14",
      check_out_date: "2023-01-17",
      num_guests: 6
    )

    puts "Creating Reviews..."
    # Create one user with an easy to remember username, email, and password:
    review1 = Review.create!(
      reviewer_id: 1,
      listing_id: 5,
      title: 'loved my stay at this place!',
      body: 'This was worthy of 4 stars because of this and that.',
      star_rating: 4
    )

    review2 = Review.create!(
      reviewer_id: 2,
      listing_id: 7,
      title: '5 stars accomodation!',
      body: 'This was truly 5-star accomodation!',
      star_rating: 5
    )


    puts "Done!"
  # end
