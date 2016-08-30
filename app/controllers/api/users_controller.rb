class Api::UsersController < ApplicationController
	def create
		@user = User.new(user_params)

		if @user.save
			login!(@user)
			render "api/sessions/show"
		else
			render_errors(400, @user)
		end
	end
end
