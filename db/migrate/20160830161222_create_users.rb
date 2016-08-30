class CreateUsers < ActiveRecord::Migration
	def change
		create_table :users do |t|
			t.string :name, null: false
			t.string :email, null: false
			t.string :password_digest, null: false
			t.string :session_token, null: false
			t.string :full_name
			t.string :location
			t.text :about

			t.timestamps null: false
		end
	end
end