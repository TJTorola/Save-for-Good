class User < ActiveRecord::Base
	attr_reader :password
	after_initialize :ensure_session_token
	before_save :downcase_email

	validates :password_digest, presence: true
	validates :password, length: { minimum: 8, allow_nil: true }
	validates(
		:session_token,
		:first_name, 
		:last_name, 
		:email, 
		presence: true, uniqueness: true
	)

	def self.find_by_credentials(params)
		user = User.find_by(email: params[:email])
		return unless user

		user.is_password?(params[:password]) ? user : nil
	end

	def downcase_email
		self.email.downcase!
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def reset_session_token!
		self.session_token = SecureRandom.urlsafe_base64(16)
		self.save!
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64(16)
	end
end
