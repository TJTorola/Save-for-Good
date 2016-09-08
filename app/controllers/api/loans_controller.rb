class Api::LoansController < ApplicationController
	def index
		@loans = Loan
			.includes(:user)
			.includes(:contributions)
			.limit(5)
			.offset(5 * current_page)
	end

	def show
		@loan = Loan.includes(:contributions).find(params[:id])
	end

	private

	def current_page
		@current_page = params[:page] || 0
	end
end
