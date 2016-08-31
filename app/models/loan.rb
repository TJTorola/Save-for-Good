class Loan < ActiveRecord::Base
	belongs_to :user
	enum status: [ 
		:unfilled,
		:awaiting_disbursment,
		:in_repayment,
		:fully_repayed,
		:delinquent,
		:defaulted 
	]
end
