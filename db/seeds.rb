# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

User.create!({
	email: 'tyler@tjt.codes',
	password: 'password',
	name: 'Tyler',
});

9.times do
	first_name = Faker::Name.first_name
	last_name  = Faker::Name.last_name
	email      = Faker::Internet.free_email("#{first_name} #{last_name}")

	User.create!({
		email: email,
		password: Faker::Internet.password,
		name: first_name,
	});
end

entrepreneurs = [
	{
		name: "Jane",
		email: Faker::Internet.free_email("Jane"),
		password: Faker::Internet.password,
		location: "Kenya, Kerugoya",
		about: <<-ABOUT
Jane is 46 years old. She makes a living practicing mixed farming. She is a fighter and a dreamer who aspires to, and works for, a better life.

The living conditions in her village are tough. There is neither clean water from the local authority, nor electrical connections, but Jane has managed to pull through.

For ten years, Jane’s primary sources of income have been planting rice, vegetables, milk, eggs, and horticultural produce. She also has a side business.

Jane’s biggest challenges are disease and a shortage of farm inputs. Farmers in the area lack capital to purchase farm inputs such as chemicals, to prevent these diseases.

Jane made the decision to join Juhudi Kilimo, in order to access loans that would help her improve her farming activities.

The additional income from the expansion will go to the education of Jane's two children. With your support, Jane’s children will acquire a quality education that will act as a strong foundation for a bright future.

This 2016, be inspired and support a Kenyan woman, a smallholder farmer!
		ABOUT
	},
	{
		name: "Haydie",
		email: Faker::Internet.free_email("Haydie"),
		password: Faker::Internet.password,
		location: "Philippines, Carles",
		about: <<-ABOUT
Haydie is a 43-year-old woman whose husband is a fisherman. With her great effort to help her husband improve their financial stability, she helps her husband in making their livelihood. They have been doing this for the past 18 years to provide for the needs of their family. Haydie also has a business selling food for additional income. They have two children; one who is already grown up and one dependent child to support.

Haydie's dream is to uplift her family to have better a means of living. She also wants to have enough money to send her children to school and see them finish their studies. To make it happen, she is asking for a loan to buy fishing net. Another part of her loan will be used to buy food ingredients such as flour, sugar, and cooking oil.
		ABOUT
	},
	{
		name: "Tagrid",
		email: Faker::Internet.free_email("Tagrid"),
		password: Faker::Internet.password,
		location: "Israel, Nazereth",
		about: <<-ABOUT
Tagrid dropped out of school after 8th grade and was married young but she has never ‎stopped learning.

She and her husband opened a bakery with partners over 15 years ‎ago. She learned every aspect of the business and after five years, when the partnership ‎ended, she developed her idea to open her own bakery. She took time and opened her ‎bakery at the Souk Open Market in her city.

Tagrid has reached a good number of ‎customers but cannot continue to grow in the Souk Open Market. She has opened another store ‎centrally located on a busy commercial street in her city and will manage them both to ‎continue the growth of her business.‎

Tagrid needs this loan for a new dairy fridge, a refrigerator for drinks, an air conditioner, ‎and materials and supplies.‎

Tagrid wants to continue growing her business as a strong, responsible business ‎woman. She and her husband are saving to buy a new house and she wants to help her ‎children.‎
		ABOUT
	},
	{
		name: "Isaac",
		email: Faker::Internet.free_email("Isaac"),
		password: Faker::Internet.password,
		location: "Ghana, Accra",
		about: <<-ABOUT
Isaac is a hardworking 38-year-old man with two children. They live in an apartment.

Isaac sells electrical goods in the Teshei area. Due to an increase in the demand for some electrical items, as will as increasing school fees, Isaac is requesting a loan from Kiva to purchase electrical goods such as wires, control cables, etc. to sell.

Isaac will use his profit to pay school fees, reinvest in his business and repay the loan.
		ABOUT
	},
	{
		name: "Emiliana",
		email: Faker::Internet.free_email("Emiliana"),
		password: Faker::Internet.password,
		location: "Bolivia, Santa Cruz",
		about: <<-ABOUT
Emiliana is a 45-year-old woman, she lives with her partner and has 3 sons, ages 6, 12, and 15, and a daughter, age 5, and her business is growing beans.

Her work is located in the locality of El Torno, a rural area which supplies the city with food.

Emiliana works with the help of her partner and they live with their children in their own house built of wood. Her business is growing beans and other vegetables. To plant them, she has sandy land, fertile, with good soil drainage, which she prepares making a row of plants in the soil with a plow, using oxen, making a thin line on the soil. "The seeds and fertilizers are spread manually and they are covered to avoid burning by the sun and damage by insects..." she says. Her harvest will be successful because she has experience in the field. The advantage of her business is that she has demand, the disadvantage is doing the plowing of the soil. Her dream is that her children can continue studying. She wants to pay for the plowing of her land. This is her first loan cycle with the institution in the 20 years she has been doing this work. 

It is for these reasons that Emiliana asks for a loan to pay for plowing her land to plant beans.
		ABOUT
	},
	{
		name: "Ely",
		email: Faker::Internet.free_email("Ely"),
		password: Faker::Internet.password,
		location: "Colombia, Momil",
		about: <<-ABOUT
Ely is 35 years old and lives in the municipality of Momil. She’s a happy married woman who has a son who is her biggest motivation. She took sewing classes years ago and then she started her own business to support her family. She dreams of paying for her son’s professional education and wants to improve her business so it can be sustainable and can reach more clients. She’s asking for a loan to buy a specialized sewing machine to work special features in the clothes.

Support this talented mother and loan now.

If you want to know more about the entrepreneurs and the loans from Interactuar, you can join the Lending Team called: “Friends of Interactuar Colombia”: http://www.kiva.org/team/interactuar_colombia
		ABOUT
	},
	{
		name: "Dariko",
		email: Faker::Internet.free_email("Dariko"),
		password: Faker::Internet.password,
		location: "Armenia, Sevan",
		about: <<-ABOUT
This will be this woman’s fifth Kiva loan and she is so happy for such a nice and long partnership. Dariko is 49 years old and she lives with her husband and daughter in the city of Sevan, located in Gegharkunik Province in Armenia. Dariko has a higher education; she graduated from Yerevan State Pedagogical Institute. For many years, she has worked at her school as a teacher of mathematics, and now she is the deputy director of the same school.

This time Dariko asks for a Kiva loan in an amount of 700,000 Armenian drams (AMD) since she must take part in very important pedagogical training course for which there is a fee. These courses are very informative and useful for the development of her pedagogical skills.
		ABOUT
	},
	{
		name: "Nisrine",
		email: Faker::Internet.free_email("Nisrine"),
		password: Faker::Internet.password,
		location: "Lebanon, Qana",
		about: <<-ABOUT
Nisrine is a Jordanian refugee who fled from Syria to Lebanon because of the war three years ago. She lives and works with her husband and three children in a refugee camp.

Nisrine opened her sweets shop, where she prepares and sells sweets, to support her husband in covering their family's increasing living needs and expenses. Her husband had a sweets shop in Syria, but due to the war, he lost everything. He is managing with his wife to develop the business again with what they started in Lebanon.

Nisrine decided to benefit from Al Majmoua loans. Through her acquired loan, she will purchase necessary raw materials, such as flour, butter, sugar and oils, from a wholesale market with encouraging prices to make sweets.

She hopes to succeed in developing her business and diversifying her products to make sure that she can improve her family's standard of living.
		ABOUT
	},
	{
		name: "Madelyn",
		email: Faker::Internet.free_email("Madelyn"),
		password: Faker::Internet.password,
		location: "Philippines, Sagay",
		about: <<-ABOUT
Madelyn works hard to support three children. She is married and has a general store business in the Philippines.

Madelyn requested a PHP 10,000 loan through NWTF in order to build a sanitary toilet for her family.

Madelyn is aware that by using the sanitary toilet, she is reducing health and hazard risks to her family and neighbors as well as promoting environment protection.
		ABOUT
	},
	{
		name: "Lusia",
		email: Faker::Internet.free_email("Lusia"),
		password: Faker::Internet.password,
		location: "Samoa, Samalaeulu Leauvaa",
		about: <<-ABOUT
Lusia is a 26-year-old mother of one child. She is strong and healthy enough to run her business. She is a Samoan citizen.

She runs a business providing transportation (taxi) services to people, and also sells taro and banana at the market to earn a living. She has been running her business for more than two years now, and this is her first SME loan. She has an excellent repayment record. 

Lusia requested a loan to buy chemicals, banana tubes (seedlings), taro roots (seedlings), licence and registration, and a new car seat to expand her business. 

She became a member of SPBD in 2012.
		ABOUT
	},
]

entrepreneurs.each do |entrepreneur|
	User.create!(entrepreneur);
end

loans = [
	{
		user_id: 11,
		description: "A loan of $2,975 helps to buy seeds and expand her horticulture farm.",
		amount: 297500,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 12,
		description: "A loan of $650 helps to buy fishing net and food ingredients such as flour, sugar, and cooking oil.",
		amount: 65000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 13,
		description: "A loan of $4,800 helps to buy a new dairy fridge, a refrigerator for drinks, an air conditioner, materials and supplies for the new branch.",
		amount: 480000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 14,
		description: "A loan of $475 helps to purchase electrical goods such as wires, control cables, etc. to sell.",
		amount: 47500,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 15,
		description: "A loan of $2,500 helps to pay for plowing the ground to plant beans.",
		amount: 250000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 16,
		description: "A loan of $375 helps to buy a specialized sewing machine to work special features in the clothes.",
		amount: 37500,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 17,
		description: "A loan of $1,475 helps to take part in very important pedagogical training course for which there is a fee.",
		amount: 147500,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 18,
		description: "A loan of $1,000 helps to purchase necessary raw materials, such as flour, butter, sugar and oils, from a wholesale market with encouraging prices so she can prepare sweets.",
		amount: 100000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 19,
		description: "A loan of $225 helps to build a sanitary toilet for her family.",
		amount: 22500,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 20,
		description: "A loan of $3,900 helps to buy chemicals, banana tubes (seedlings), taro roots (seedlings), licence and registration, and a new car seat.",
		amount: 390000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	}
]

loans.each do |loan|
	Loan.create!(loan)
end