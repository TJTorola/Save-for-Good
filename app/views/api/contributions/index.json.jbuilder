json.contributions do
	json.array! @contributions do |contribution|
		json.id contribution.id
		json.amount contribution.amount
		json.donation contribution.donation
		json.loan do
			json.id contribution.loan.id
			json.description contribution.loan.description
			json.amount contribution.loan.amount
			json.status contribution.loan.status.titleize
			json.endDate contribution.loan.end_date
			json.loanLength contribution.loan.loan_length
			json.repaymentDate contribution.loan.repayment_date
			json.paymentPeriodLength contribution.loan.payment_period_length
			json.entrepreneur do
				json.id contribution.loan.user.id
				json.name contribution.loan.user.name
				json.location contribution.loan.user.location
				json.about contribution.loan.user.about
			end
		end
	end
end
json.contributionsByMonth current_user.contributions_by_month