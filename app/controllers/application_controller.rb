class ApplicationController < ActionController::Base
	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	protect_from_forgery with: :exception

	helper_method :current_user, :logged_in?

	private

	def current_user
		return unless session[:token]
		@current_user ||= User.find_by(session_token: session[:token])
	end

	def logged_in?
		!current_user.nil?
	end

	def login!(user)
		session[:token] = user.reset_session_token!
	end

	def logout!
		current_user.reset_session_token!
		session[:token] = nil
	end

	def errors
		flash[:errors] || []
	end

	def add_errors(errors)
		flash.now[:errors] ||= []
		if errors.is_a?(Array)
			flash.now[:errors] += errors
		elsif errors.is_a?(String)
			flash.now[:errors] << errors
		else
			flash.now[:errors] += errors.errors.full_messages
		end
	end

	def render_errors(status = 500, new_errors = [])
		add_errors(new_errors)
		render json: { errors: errors }, status: status
	end

	private

	def user_params
		params.require(:user).permit(:password, :email, :name)
	end
end