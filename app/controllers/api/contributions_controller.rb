class Api::ContributionsController < ApplicationController
	def index
		@contributions = current_user.contributions.includes(loan: [:user])
	end
end
