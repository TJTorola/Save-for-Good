class CreateContributions < ActiveRecord::Migration
  def change
    create_table :contributions do |t|
    	t.integer :loan_id, null: false
    	t.integer :user_id, null: false
    	t.integer :amount, null: false

      t.timestamps null: false
    end

    add_index :contributions, :loan_id
    add_index :contributions, :user_id
  end
end
