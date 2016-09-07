class Api::ContributionsController < ApplicationController
	def index
		@contributions = current_user.contributions.includes(:loan)
	end
end
