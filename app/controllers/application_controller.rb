class ApplicationController < ActionController::Base
	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	protect_from_forgery with: :exception

	helper_method :current_user, :logged_in?

	private

	def current_user
		return unless session[:token]
		@current_user ||= User.find(session_token: session[:token])
	end

	def logged_in?
		!current_user.nil?
	end

	def login_user!(user)
		session[:token] = user.reset_session_token!
	end

	def logout_user!
		current_user.reset_session_token!
		session[:token] = nil
	end
end