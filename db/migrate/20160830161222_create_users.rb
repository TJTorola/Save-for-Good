class CreateUsers < ActiveRecord::Migration
	def change
		create_table :users do |t|
			t.string :email, null: false
			t.string :name, null: false
			t.string :password_digest, null: false
			t.string :session_token, null: false
			t.string :location
			t.text :about

			t.timestamps null: false
		end
	end
end
