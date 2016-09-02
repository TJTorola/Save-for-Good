class Loan < ActiveRecord::Base
	belongs_to :user
	has_many :contributions
	enum status: [ 
		:unfilled,
		:awaiting_disbursment,
		:in_repayment,
		:fully_repayed,
		:delinquent,
		:defaulted 
	]
end
