class User < ActiveRecord::Base
	attr_reader :password
	after_initialize :ensure_session_token
	before_save :downcase_email

	validates :password, length: { minimum: 8, allow_nil: true }
	validates :password_digest, :name, presence: true
	validates :session_token, :email, presence: true, uniqueness: true

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

	private

	def downcase_email
		self.email.downcase!
	end

	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64(16)
	end
end
