# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

User.create!({
	email: 'tyler@tjt.codes',
	password: 'password',
	first_name: 'Tyler',
	last_name: 'Torola'
});

9.times do
	first_name = Faker::Name.first_name
	last_name  = Faker::Name.last_name
	email      = Faker::Internet.free_email("#{first_name} #{last_name}")

	User.create!({
		email: email,
		password: Faker::Internet.password,
		first_name: first_name,
		last_name: last_name
	});
end

10.times do
	first_name = Faker::Name.first_name
	last_name  = Faker::Name.last_name
	email      = Faker::Internet.free_email("#{first_name} #{last_name}")
	country    = Faker::Address.country
	city       = Faker::Address.city

	location = "#{country}, #{city}"
	about    = Faker::Lorem.paragraphs(rand(3) + 2).join('\n')

	User.create!({
		email: email,
		password: Faker::Internet.password,
		first_name: first_name,
		last_name: last_name,
		location: location,
		about: about
	});
end

10.times do |i|
	user_id               = 11 + i
	description           = Faker::Lorem.sentence
	amount                = 10000 * (rand(30) + 1)
	end_date              = Faker::Time.forward(30, :morning)
	payment_period_length = [15, 30].sample
	loan_length           = [30, 60, 90, 100, 180, 365, 365].sample

	Loan.create!({
		user_id: user_id,
		description: description,
		amount: amount,
		end_date: end_date,
		payment_period_length: payment_period_length,
		loan_length: loan_length
	})
end