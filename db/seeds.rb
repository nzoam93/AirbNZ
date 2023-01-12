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
      username: 'Demo Dan',
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
      title: '3 Bedroom in Marin',
      description: 'This is the first example. You can walk to Dillon Beach within 15 minutes!',
      address: '2098 Harrison St',
      city: 'Marin',
      state: 'CA',
      zip_code: '94605',
      price: 500,
      num_beds: 3,
      num_baths: 2,
      num_guests: 6,
      latitude: 38.23954,
      longitude: -122.93603
    )

    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1.jpg"), filename: "house1.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room1.jpg"), filename: "house1room1.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room2.jpg"), filename: "house1room2.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room3.jpg"), filename: "house1room3.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room4.jpg"), filename: "house1room4.jpg")

    listing2 = Listing.create!(
      owner_id: 2,
      title: '4 Bedroom in Palo Alto',
      description: 'This is the second example.  Great for University Students. Very close to campus!',
      address: '253 Berkeley Way',
      city: 'Palo Alto',
      state: 'CA',
      zip_code: '94131',
      price: 700,
      num_beds: 4,
      num_baths: 2,
      num_guests: 8,
      latitude: 37.43815,
      longitude: -122.15576
    )

    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2.jpg"), filename: "house2.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room1.jpg"), filename: "house2room1.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room2.jpg"), filename: "house2room2.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room3.jpg"), filename: "house2room3.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room4.jpg"), filename: "house2room4.jpg")

    listing3 = Listing.create!(
      owner_id: 2,
      title: '4 Bedroom in San Jose',
      description: 'This is the third example',
      address: '279 Carolina St',
      city: 'San Jose',
      state: 'CA',
      zip_code: '94590',
      price: 300,
      num_beds: 4,
      num_baths: 2,
      num_guests: 8,
      latitude: 37.32162,
      longitude: -121.76291
    )

    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3.jpg"), filename: "house3.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room1.jpg"), filename: "house3room1.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room2.jpg"), filename: "house3room2.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room3.jpg"), filename: "house3room3.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room4.jpg"), filename: "house3room4.jpg")

    listing4 = Listing.create!(
      owner_id: 1,
      title: '5 Bedroom in San Rafael',
      description: 'This is the fourth example. Near San Quentin Beach!',
      address: '123 San Rafael St',
      city: 'San Rafael',
      state: 'CA',
      zip_code: '94605',
      price: 800,
      num_beds: 5,
      num_baths: 3,
      num_guests: 10,
      latitude: 37.94228,
      longitude: -122.48462
    )

    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4.jpg"), filename: "house4.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room1.jpg"), filename: "house4room1.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room2.jpg"), filename: "house4room2.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room3.jpg"), filename: "house4room3.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room4.jpg"), filename: "house4room4.jpg")


    listing5 = Listing.create!(
      owner_id: 1,
      title: '3 Bedroom in Richmond',
      description: 'This is the fifth example. Just steps away from Point Molate Beach Park!',
      address: '123 Richmond St',
      city: 'Richmond',
      state: 'CA',
      zip_code: '94605',
      price: 250,
      num_beds: 3,
      num_baths: 1,
      num_guests: 6,
      latitude: 37.94700,
      longitude: -122.41495
    )

    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5.jpg"), filename: "house5.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room1.jpg"), filename: "house5room1.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room2.jpg"), filename: "house5room2.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room3.jpg"), filename: "house5room3.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room4.jpg"), filename: "house5room4.jpg")

    listing6 = Listing.create!(
      owner_id: 1,
      title: '2 Bedroom in San Mateo',
      description: 'This is the sixth example. Just a short drive to Crystal Springs Golf Course!',
      address: '123 San Mateo St',
      city: 'San Mateo',
      state: 'CA',
      zip_code: '94605',
      price: 150,
      num_beds: 2,
      num_baths: 1,
      num_guests: 4,
      latitude: 37.56958,
      longitude: -122.34722
    )

    listing6.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house6.jpg"), filename: "house6.jpg")
    listing6.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house6room1.jpg"), filename: "house6room1.jpg")
    listing6.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house6room2.jpg"), filename: "house6room2.jpg")
    listing6.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house6room3.jpg"), filename: "house6room3.jpg")
    listing6.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house6room4.jpg"), filename: "house6room4.jpg")

    listing7 = Listing.create!(
      owner_id: 1,
      title: '3 Bedroom in San Francisco',
      description: 'This is the seventh example.',
      address: '123 San Francisco St',
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94605',
      price: 630,
      num_beds: 3,
      num_baths: 2,
      num_guests: 6,
      latitude: 37.75931,
      longitude: -122.43428
    )

    listing7.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house7.jpg"), filename: "house7.jpg")
    listing7.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house7room1.jpg"), filename: "house7room1.jpg")
    listing7.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house7room2.jpg"), filename: "house7room2.jpg")
    listing7.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house7room3.jpg"), filename: "house7room3.jpg")
    listing7.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house7room4.jpg"), filename: "house7room4.jpg")

    listing8 = Listing.create!(
      owner_id: 1,
      title: '4 Bedroom in Oakland',
      description: 'This is the eighth example. You are right next to Lake Merritt!',
      address: '123 Marin St',
      city: 'Oakland',
      state: 'CA',
      zip_code: '94605',
      price: 545,
      num_beds: 4,
      num_baths: 2,
      num_guests: 8,
      latitude: 37.80933,
      longitude: -122.26287

    )

    listing8.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house8.jpg"), filename: "house8.jpg")
    listing8.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house8room1.jpg"), filename: "house8room1.jpg")
    listing8.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house8room2.jpg"), filename: "house8room2.jpg")
    listing8.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house8room3.jpg"), filename: "house8room3.jpg")
    listing8.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house8room4.jpg"), filename: "house8room4.jpg")

    listing9 = Listing.create!(
      owner_id: 1,
      title: '6 Bedroom in South Lake Tahoe',
      description: 'This is the ninth example. Perfect for those who want a relaxing getaway by Lake Tahoe',
      address: '123 Tahoe St',
      city: 'South Lake Tahoe',
      state: 'CA',
      zip_code: '94605',
      price: 430,
      num_beds: 6,
      num_baths: 3,
      num_guests: 12,
      latitude: 38.92616,
      longitude: -119.99954
    )

    listing9.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house9.jpg"), filename: "house9.jpg")
    listing9.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house9room1.jpg"), filename: "house9room1.jpg")
    listing9.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house9room2.jpg"), filename: "house9room2.jpg")
    listing9.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house9room3.jpg"), filename: "house9room3.jpg")
    listing9.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house9room4.jpg"), filename: "house9room4.jpg")

    listing10 = Listing.create!(
      owner_id: 1,
      title: '2 Bedroom in SF',
      description: 'This is the tenth example. Right next to Golden Gate Park!',
      address: '123 San Francisco St',
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94605',
      price: 160,
      num_beds: 2,
      num_baths: 1,
      num_guests: 4,
      latitude: 37.77758,
      longitude: -122.45891
    )

    listing10.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house10.jpg"), filename: "house10.jpg")
    listing10.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house10room1.jpg"), filename: "house10room1.jpg")
    listing10.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house10room2.jpg"), filename: "house10room2.jpg")
    listing10.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house10room3.jpg"), filename: "house10room3.jpg")
    listing10.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house10room4.jpg"), filename: "house10room4.jpg")

    listing11 = Listing.create!(
      owner_id: 1,
      title: '2 Bedroom in Santa Cruz',
      description: 'This is the eleventh example. Picturesque location in Santa Cruz',
      address: '123 Santa Cruz St',
      city: 'Santa Cruz',
      state: 'CA',
      zip_code: '94605',
      price: 140,
      num_beds: 2,
      num_baths: 1,
      num_guests: 4,
      latitude: 36.96380,
      longitude: -122.01830
    )

    listing11.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house11.jpg"), filename: "house11.jpg")
    listing11.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house11room1.jpg"), filename: "house11room1.jpg")
    listing11.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house11room2.jpg"), filename: "house11room2.jpg")
    listing11.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house11room3.jpg"), filename: "house11room3.jpg")
    listing11.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house11room4.jpg"), filename: "house11room4.jpg")

    listing12 = Listing.create!(
      owner_id: 2,
      title: '3 Bedroom in Pacifica',
      description: 'This is the twelvth example. Just a 2 minute walk to the beach! Pristine views!',
      address: '123 Pacifica St',
      city: 'Pacifica',
      state: 'CA',
      zip_code: '94605',
      price: 95,
      num_beds: 3,
      num_baths: 2,
      num_guests: 6,
      latitude: 37.61614,
      longitude: -122.49047
    )

    listing12.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house12.jpg"), filename: "house12.jpg")
    listing12.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house12room1.jpg"), filename: "house12room1.jpg")
    listing12.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house12room2.jpg"), filename: "house12room2.jpg")
    listing12.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house12room3.jpg"), filename: "house12room3.jpg")
    listing12.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house12room4.jpg"), filename: "house12room4.jpg")

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
      reviewer_id: 2,
      listing_id: 1,
      body: 'This was a great stay. I thought it could have been slightly better though which is why I am giving it four stars.',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 4,
      location: 4,
      value: 5
    )

    review2 = Review.create!(
      reviewer_id: 2,
      listing_id: 7,
      body: 'This was truly 5-star accomodation!',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 4,
      location: 4,
      value: 5
    )


    puts "Done!"
  # end
