class CreateGreetings < ActiveRecord::Migration[7.1]
  def change
    create_table :greetings do |t|
      t.string :message

      t.timestamps
    end
    add_index :greetings, :message
  end
end
