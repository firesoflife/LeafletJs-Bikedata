# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Racer.destroy_all

Racer.create (
  [
    {
      "f_name": "Dustin",
      "l_name": "Green",
      "city": "Hickory Hills",
      "state": "IL",
      "current_location": {"lat": 40.00, "lng": -105.35},
    },
    {
      "f_name": "Jason",
      "l_name": "Finn",
      "city": "Huntington Beach",
      "state": "CA",
      "current_location": {"lat": 39.95, "lng": -105.24},
    },
    {
      "f_name": "Howard",
      "l_name": "Thompson",
      "city": "Hale",
      "state": "MO",
      "current_location": {"lat": 40.06, "lng": -105.26},
    },
    {
      "f_name": "Maggie",
      "l_name": "Lantz",
      "city": "Dublin",
      "state": "OH",
      "current_location": {"lat": 40.03, "lng": -105.23},
    },
    {
      "f_name": "Lawrence",
      "l_name": "Duran",
      "city": "Fort Myers",
      "state": "FL",
      "current_location": {"lat": 40.04, "lng": -105.23},
    },
    {
      "f_name": "Irene",
      "l_name": "Molina",
      "city": "Tucson",
      "state": "AZ",
      "current_location": {"lat": 39.96, "lng": -105.22},
    },
    {
      "f_name": "Nancy",
      "l_name": "Garner",
      "city": "Baltimore",
      "state": "MD",
      "current_location": {"lat": 39.98, "lng": -105.21},
    },
    {
      "f_name": "Tara",
      "l_name": "Taylor",
      "city": "Minneapolis",
      "state": "MN",
      "current_location": {"lat": 40.00, "lng": -105.25},
    },
    {
      "f_name": "Alejandro",
      "l_name": "Smith",
      "city": "Scarborough",
      "state": "ME",
      "current_location": {"lat": 40.02, "lng": -105.26},

    },
    {
      "f_name": "Tricia",
      "l_name": "Renshaw",
      "city": "Mystic",
      "state": "CT",
      "current_location": {"lat": 40.02, "lng": -105.30},
    },
    {
      "f_name": "Travis",
      "l_name": "Cook",
      "city": "Twin Lakes",
      "state": "WI",
      "current_location": {"lat": 40.01, "lng": -105.20},
    },
    {
      "f_name": "Joan",
      "l_name": "Brooks",
      "city": "Norfolk",
      "state": "VA",
      "current_location": {"lat": 39.98, "lng": -105.24},
    },
    {
      "f_name": "Joseph",
      "l_name": "Rodgers",
      "city": "Wayne",
      "state": "NJ",
      "current_location": {"lat": 39.99, "lng": -105.25},
    },
    {
      "f_name": "Matthew",
      "l_name": "Gregson",
      "city": "Brashear",
      "state": "MO",
      "current_location": {"lat": 40.01, "lng": -105.29},
    },
    {
      "f_name": "Katie",
      "l_name": "Dunlap",
      "city": "Marion",
      "state": "VA",
      "current_location": {"lat": 39.97, "lng": -105.27},
    },
    {
      "f_name": "Leo",
      "l_name": "Howard",
      "city": "Dallas",
      "state": "TX",
      "current_location": {"lat": 39.97, "lng": -105.33},
    },
    {
      "f_name": "Maria",
      "l_name": "Baisden",
      "city": "Raleigh",
      "state": "NC",
      "current_location": {"lat": 40.00, "lng": -105.29},
    },
    {
      "f_name": "Sandy",
      "l_name": "Townsend",
      "city": "Newport",
      "state": "PA",
      "current_location": {"lat": 40.05, "lng": -105.30},
    },
    {
      "f_name": "Melinda",
      "l_name": "Stephenson",
      "city": "Kahului",
      "state": "HI",
      "current_location": {"lat": 39.99, "lng": -105.31},
    },
    {
      "f_name": "Jason",
      "l_name": "Nichols",
      "city": "Alexandria",
      "state": "VA",
      "current_location": {"lat": 40.01, "lng": -105.32},
    }
  ]
)

  p "Created #{Racer.count} Racers"