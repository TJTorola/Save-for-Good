Rails.application.routes.draw do

	namespace :api do
	end

	root "static_pages#index"
	match "*path", to: "static_pages#index", via: :all

end
