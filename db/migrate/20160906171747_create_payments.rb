class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
    	t.integer :user_id, null: false
    	t.string :stripe_id, null: false
    	t.integer :amount, null: false
    	t.string :card_brand, null: false
    	t.string :last_four, null: false

      t.timestamps null: false
    end
  end
end
