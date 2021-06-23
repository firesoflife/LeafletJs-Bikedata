class AddLatToRacers < ActiveRecord::Migration[6.1]
  def change
    add_column :racers, :lat, :decimal, precision: 10, scale: 6
    add_column :racers, :lng, :decimal, precision: 10, scale: 6
  end
end
