class Api::LoansController < ApplicationController
	def index
		@loans = Loan.includes(:user).all
	end

	def show
		@loan = Loan.find(params[:id])
	end
end
