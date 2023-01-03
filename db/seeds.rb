# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do
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
    Listing.create!(
      owner_id: 1,
      title: '3 Bedroom in Oakland',
      description: 'This is the first example',
      address: '123 AirBNZ St',
      city: 'Oakland',
      state: 'CA',
      zip_code: '94605',
      price: 500,
      num_beds: 3,
      num_baths: 2
    )

    Listing.create!(
      owner_id: 1,
      title: '4 Bedroom in SF',
      description: 'This is the second example',
      address: '123 Post St',
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94605',
      price: 700,
      num_beds: 4,
      num_baths: 2
    )

    Listing.create!(
      owner_id: 1,
      title: '1 Bedroom in Vallejo',
      description: 'This is the third example',
      address: '123 Vallejo St',
      city: 'Vallejo',
      state: 'CA',
      zip_code: '94605',
      price: 300,
      num_beds: 1,
      num_baths: 1
    )

    Listing.create!(
      owner_id: 1,
      title: '5 Bedroom in San Rafael',
      description: 'This is the fourth example',
      address: '123 San Rafael St',
      city: 'San Rafael',
      state: 'CA',
      zip_code: '94605',
      price: 800,
      num_beds: 5,
      num_baths: 3
    )


    puts "Done!"
  end
