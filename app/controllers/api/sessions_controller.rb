class Api::SessionsController < ApplicationController
	def create
		@user = User.find_by_credentials(user_params)
		# debugger
		if @user
			login!(@user)
			render :show
		else
			render_errors(400, "Invalid Username/Password")
		end
	end

	def destroy
		logout!
		render json: {}
	end

	def show
	end
end
