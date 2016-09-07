class User < ActiveRecord::Base
	attr_reader :password
	after_initialize :ensure_session_token
	before_save :downcase_email

	validates :password, length: { minimum: 8, allow_nil: true }
	validates :password_digest, :name, presence: true
	validates :session_token, :email, presence: true, uniqueness: true

	has_many :payments
	has_many :contributions

	def self.find_by_credentials(params)
		email = params[:email].downcase
		user = User.find_by(email: email)
		return unless user

		user.is_password?(params[:password]) ? user : nil
	end

	def reset_session_token!
		self.session_token = SecureRandom.urlsafe_base64(16)
		self.save!
		self.session_token
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def contributions_by_month
		months = {}
		11.times do |i|
			month = (11 - i).months.ago.strftime("%B")
			months[month] = 0
		end
		months[:now] = 0

		contributions.each do |contribution|
			next if contribution.created_at < 12.months.ago

			month = contribution.created_at.strftime("%B")
			months[month] += (contribution.amount.to_f / 100)
		end

		months
	end

	def repayments_by_month
		months = { now: 0 }
		11.times do |i|
			month = (i + 1).months.from_now.strftime("%B")
			months[month] = 0
		end

		contributions.each do |contribution|
			next if contribution.loan.repayment_date > 12.months.from_now

			month = contribution.loan.repayment_date.strftime("%B")
			amount = contribution.amount - contribution.donation_amount
			months[month] += (amount.to_f / 100)
		end

		months
	end

	private

	def downcase_email
		self.email.downcase!
	end

	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64(16)
	end
end
