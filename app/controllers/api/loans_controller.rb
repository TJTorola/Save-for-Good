class Api::LoansController < ApplicationController
	def index
		@loans = Loan.includes(:user).includes(:contributions).all
	end

	def show
		@loan = Loan.find(params[:id]).includes(:contributions)
	end
end
