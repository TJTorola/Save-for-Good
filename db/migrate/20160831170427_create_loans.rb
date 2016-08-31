class CreateLoans < ActiveRecord::Migration
	def change
		create_table :loans do |t|
			t.integer :user_id, null: false
			t.text :description, null: false
			t.integer :amount, null: false
			t.integer :status, default: 0
			t.datetime :end_date, null: false
			t.integer :loan_length, null: false
			t.integer :payment_period_length, null: false

			t.timestamps null: false
		end

		add_index :loans, :user_id
	end
end
