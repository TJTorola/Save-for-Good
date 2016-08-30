Rails.application.routes.draw do
	namespace :api do
		resource :session, only: [:create, :destroy]
	end

	root "static_pages#index"
	match "*path", to: "static_pages#index", via: :all
end
