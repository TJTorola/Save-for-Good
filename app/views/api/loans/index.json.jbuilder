json.loans do
	json.array! @loans do |loan|
		json.id loan.id
		json.description loan.description
		json.amount loan.amount
		json.status loan.status
		json.endDate loan.end_date
		json.loanLength loan.loan_length
		json.repaymentDate loan.repayment_date
		json.paymentPeriodLength loan.payment_period_length
		json.contributed loan.contributed
		json.entrepreneur do
			json.id loan.user.id
			json.name loan.user.name
			json.location loan.user.location
			json.about loan.user.about
		end
	end
end