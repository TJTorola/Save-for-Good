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

	def contributed
		contributed = 0
		contributions.each do |contribution|
			contributed += contribution.amount
		end
		contributed
	end
end
