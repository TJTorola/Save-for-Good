class Api::ContributionsController < ApplicationController
	def index
		@contributions = Contribution.where(user_id: current_user.id).includes(loan: [:user])
	end
end
