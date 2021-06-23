class RemoveCurrentLocationFromRacers < ActiveRecord::Migration[6.1]
  def change
    remove_column :racers, :current_location, :string
  end
end
