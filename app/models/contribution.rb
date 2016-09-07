class Contribution < ActiveRecord::Base
	belongs_to :user
	belongs_to :loan
	belongs_to :payment

	def donation_amount
		amount * (donation.to_f / 100)
	end
end