class CreateRacers < ActiveRecord::Migration[6.1]
  def change
    create_table :racers do |t|
      t.string :f_name
      t.string :l_name
      t.string :city
      t.string :state
      t.string :current_location

      t.timestamps
    end
  end
end
