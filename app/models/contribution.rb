class Contribution < ActiveRecord::Base
	belongs_to :user
	belongs_to :loan
	belongs_to :payment
end