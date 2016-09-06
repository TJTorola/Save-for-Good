Rails.application.routes.draw do
	namespace :api, defaults: { format: 'json' } do
		resource :user, only: [:create]
		resource :session, only: [:create, :destroy]
		resources :loans, only: [:index, :show]
		resources :payments, only: [:create]
	end

	root "static_pages#index"
	match "*path", to: "static_pages#index", via: :all
end
