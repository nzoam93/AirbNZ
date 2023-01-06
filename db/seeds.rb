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
    User.destroy_all
    Listing.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')


    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition',
      email: 'demo@user.io',
      password: 'password'
    )

    # More users
    10.times do
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      })
    end

    puts "Creating listings..."
    listing1 = Listing.create!(
      owner_id: 1,
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
      owner_id: 1,
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

    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2.jpg"), filename: "house2.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room1.jpg"), filename: "house2room1.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room2.jpg"), filename: "house2room2.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room3.jpg"), filename: "house2room3.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room4.jpg"), filename: "house2room4.jpg")

    listing3 = Listing.create!(
      owner_id: 1,
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

    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3.jpg"), filename: "house3.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room1.jpg"), filename: "house3room1.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room2.jpg"), filename: "house3room2.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room3.jpg"), filename: "house3room3.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room4.jpg"), filename: "house3room4.jpg")

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

    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4.jpg"), filename: "house4.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room1.jpg"), filename: "house4room1.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room2.jpg"), filename: "house4room2.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room3.jpg"), filename: "house4room3.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room4.jpg"), filename: "house4room4.jpg")


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

    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5.jpg"), filename: "house5.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room1.jpg"), filename: "house5room1.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room2.jpg"), filename: "house5room2.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room3.jpg"), filename: "house5room3.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room4.jpg"), filename: "house5room4.jpg")


    puts "Done!"
  # end
