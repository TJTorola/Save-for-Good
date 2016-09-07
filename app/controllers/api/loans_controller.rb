class Api::LoansController < ApplicationController
	def index
		@loans = Loan.includes(:user).includes(:contributions).all
	end

	def show
		@loan = Loan.includes(:contributions).find(params[:id])
	end
end
