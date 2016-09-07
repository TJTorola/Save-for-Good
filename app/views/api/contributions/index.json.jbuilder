json.contributions do
	json.array! @contributions do |contribution|
		json.amount contribution.amount
		json.donation contribution.donation
		json.loan do
			json.id contribution.loan.id
			json.description contribution.loan.description
			json.amount contribution.loan.amount
			json.status contribution.loan.status
			json.endDate contribution.loan.end_date
			json.loanLength contribution.loan.loan_length
			json.paymentPeriodLength contribution.loan.payment_period_length
			json.contributed contribution.loan.contributed
			json.entrepreneur do
				json.id contribution.loan.user.id
				json.name contribution.loan.user.name
				json.location contribution.loan.user.location
				json.about contribution.loan.user.about
			end
		end
	end
end