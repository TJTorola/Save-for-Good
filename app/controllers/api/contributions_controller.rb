class Api::ContributionsController < ApplicationController
	def index
		@contributions = current_user.contributions
	end
end
