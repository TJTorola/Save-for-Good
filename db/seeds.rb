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
	{
		name: "Edik",
		email: Faker::Internet.free_email("Edik"),
		password: Faker::Internet.password,
		location: "Gegharkunik region, Armenia",
		about: <<-ABOUT
Edik paid back his first Kiva loan, which greatly supported him in his farming. He lives in the Gegharkunik region of Armenia. His wife died several years ago, and he lives with his disabled son. Edik cares for his son, house and farm by himself. 

Edik has cows, a pig and several piglets. He earns an income mainly from his swine breeding and farming wheat. He sells his farm’s meat to butchers in the area. He works hard but still earns barely enough to properly care for his son. Edik is asking for this loan of 700,000 Armenian drams as he needs to buy a lot of fodder for all his farm cattle.
		ABOUT
	},
	{
		name: "Jose",
		email: Faker::Internet.free_email("Jose"),
		password: Faker::Internet.password,
		location: "Cajamarca, Peru",
		about: <<-ABOUT
Jose Niguer, who is 21 years old, lives in a civil partnership. He lives in his own home, made of rustic materials, with his spouse and their child in the Santo Tomas district of the Cutervo province in the Cajamarca department of Peru. He has very good personal and professional references from the other people who live in the area. The majority of people living in the vicinity make a living in agriculture, commerce and livestock raising. Jose makes a living through agriculture, more specifically the farming of catimor coffee. To date he has 1.5 hectares, resistant to illness and plagues, as well as over 10 years of experience in the field. Additionally, he earns an income raising and selling small farm animals like chicks and chickens. Finally, he also works in the growing of products that bring forth bread (yuca, plaintain, vituca). The destination for the loan will be to invest in the maintenance of the 1.5 hectare crop of coffee currently in production, ensuring a good production for the 2017 campaign, which will be reflected in a larger volume of sales and subsequently more income to improve his and his family's quality of life. Jose Niguer is a recurrent partner for Edpyme Alternativa.
		ABOUT
	},
	{
		name: "Nafeth",
		email: Faker::Internet.free_email("Nafeth"),
		password: Faker::Internet.password,
		location: "Jabalia, Palestine",
		about: <<-ABOUT
Nafeth is a 28-year-old married man from Jabalia, which is a refugee camp. He lives with his wife and one son in a humble house. Nafeth works in the public sector, but it is very limited and unstable salary. He has small piece of land on which he farms vegetables. He took a USD Murabaha loan from FATEN to buy seedlings and seeds for his small farm. He appears in the photo.
		ABOUT
	},
	{
		name: "Melchora",
		email: Faker::Internet.free_email("Melchora"),
		password: Faker::Internet.password,
		location: "Antique, Philippines",
		about: <<-ABOUT
Melchora is 57 years old and widowed with five children.

She earns a living by pig fattening business in the Philippines. Melchora is borrowing PHP 9,000 through NWTF to buy additional piglets as well as a sack of feed and other supplies to raise her pigs.

Melchora has been in this business for 10 years and also earns additional income from a general store.

She is working tirelessly toward the attainment of her dream: to save money to expand her business.
		ABOUT
	},
	{
		name: "Jessa",
		email: Faker::Internet.free_email("Jessa"),
		password: Faker::Internet.password,
		location: "Louisville, KY, United States",
		about: <<-ABOUT
I am Jessa Mayhew, the Owner + Dreamer + Curator of Soul Candy Skincare, keeper of a gypsy soul and sparkling eyes (according to my husband). I grew up in Pennsylvania about an hour from NYC, daughter of Italian and Russian parents who taught me that anything made by hand is an extension of yourself, that a dinner made with love really does taste better. That is perhaps the most poignant precept of my youth and one that I carry with me today. I think that’s a lot of the reason that Soul Candy is so successful. I put my heart into every bottle. Before I started bottling eco-chic love, I was a health and fitness coach for the US Military for about 10 years. It was during this time that my passion for healthy, sustainable living really began to blossom. I saw first hand the incredibly positive impact that natural diets and treatments free of chemicals and processing can have on the human body. Forever thirsting for knowledge, I spent years studying and researching and experimenting with natural remedies. When my oldest developed severe childhood eczema, brain candy turned into Soul Candy. The other half of our family and Soul Candy team, my husband, Ben, has a B.S. from West Point and an M.A. from UTEP. We are a perfect match in so many ways, like the fact that he does my numbers because I hate math - to me, an unfortunately inextricable part of business. Our final military move landed us in Louisville, KY, but the people of Louisville made us stay. Now, I get to educate those same people on self-care and the importance of conscious consumerism. The people that we meet, the glows that we uncover, the bonds we form… that’s what keeps me going.
		ABOUT
	},
	{
		name: "Fridah",
		email: Faker::Internet.free_email("Fridah"),
		password: Faker::Internet.password,
		location: "Ibanda, Uganda",
		about: <<-ABOUT
Fridah is a repeat borrower of UGAFODE Microfinance Limited. She deals in cattle fattening and milking as her major source of income. She currently owns about 100 head of cattle, the majority of which are for milk production. Through income earned from milk sales, Fridah has managed to look after her family together with her husband by providing them with the basic necessities of life and educating their four children. 

In addition to dairy farming, Fridah owns a retail shop in a trading center near her residence. She started this business because she wanted to provide quick service to people of her community. 

Fridah is applying for another loan of 5,000,000 UGX to buy more stock of items that have quick sales such as sugar, soap, salt, soda and corn flour to boost her sales. She is appreciative of your continued support and looks toward a bigger business.
		ABOUT
	},
	{
		name: "Cristina",
		email: Faker::Internet.free_email("Cristina"),
		password: Faker::Internet.password,
		location: "Floresti, Moldova",
		about: <<-ABOUT
Cristina is a young woman of 27 years. She is married, and she works as an accountant at the mayoralty, and her husband works abroad. With the money they received at their wedding party, they have bought an old house, and they started to renovate it. She has saved money from her salary, and from the money her husband sends, they succeeded in repairing the roof of the house, bedroom, and living room. Cristina wants a lot to equip her house with water and sewerage to be able to further construct a bathroom, a WC, and a kitchen. This thing will simplify a lot the domesticities and will improve the living conditions. If Cristina could finish the reparation of the house, her husband could stay with his family to work home without being forced to go abroad. All these plans of Cristina’s are realizable only with the credit from Kiva.
		ABOUT
	},
	{
		name: "Demur",
		email: Faker::Internet.free_email("Demur"),
		password: Faker::Internet.password,
		location: "Zugdidi, Georgia",
		about: <<-ABOUT
Demur is 59 years old. He is married and lives with his family in the Zugdidi district. Demur is involved in agricultural activities. In particular, he owns 2 cows and a calf. His wife milks the cows every day and produces dairy products to sell locally. In addition, they have a plot of agricultural land where they grow nut trees and sell the harvest locally.

Demur decided to start taxi business to have a more stable income. The Start Up program, which is a joint initiative with Kiva and Credo enables him to get a loan of 1,500 GEL. With the received credit he will purchase a car and will serve people as a taxi driver.

Demur awaits your support.
		ABOUT
	},
	{
		name: "Fuamata",
		email: Faker::Internet.free_email("Fuamata"),
		password: Faker::Internet.password,
		location: "Saasaai, Samoa",
		about: <<-ABOUT
Fuamata is 64 years old and a widow with five grown children. 

She makes and sells Elei Lavalava to earn a living and has been doing this for two years. 

Fuamata has requested a loan to buy materials, design board, paint brush, color paints etc. 

She plans to use her profits to support her family financially and to improve her family living. 

She joined SPBD in 2014 to gain access to financial services.
		ABOUT
	},
	{
		name: "Ryan",
		email: Faker::Internet.free_email("Ryan"),
		password: Faker::Internet.password,
		location: "Cumberland Gap, TN, United States",
		about: <<-ABOUT
I live and manage my shop in the breathtaking Appalachian region surrounded by the Daniel Boone National Park in Cumberland Gap, Tennessee. This is a big change from busy Kansas City, Missouri where I lived until my move to Tennessee. While in Kansas City I owned and managed a motorcycle repair shop. Shortly after I moved from Kansas City, to Cumberland Gap, Tennessee in 2015, I met my neighbor William Brock, a traditional blacksmith and the owner of Rusted Bird Studio. Under his instruction, I learned the art of blacksmithing. Now I am blessed to manage my own shop surrounded by the breathtaking Appalachian mountains. I am a proud member of the Appalachian Area Chapter of Blacksmiths (AACB) and Artist-Blacksmith's Association of North America (ABANA). When I’m not blacksmithing, I’m exploring the area on my Harley or mountain biking. My goal in life is to work hard, stay humble, smile often, never stop learning, and always be thankful.
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
	},
	{
		user_id: 21,
		description: "A loan of $1,500 helps to buy a lot of fodder for all his farm cattle.",
		amount: 150000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 22,
		description: "A loan of $1,350 helps invest in the maintenance of 1.5 hectares for coffee production.",
		amount: 135000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 23,
		description: "A loan of $1,175 helps to buy seedlings and seeds for his small farm.",
		amount: 117500,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 24,
		description: "A loan of $200 helps to buy additional piglets as well as a sack of feed and other supplies to raise her pig.",
		amount: 20000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 25,
		description: "A loan of $9,950 helps us to provide opening operating costs and ultimately double the size of our business.",
		amount: 995000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 26,
		description: "A loan of $1,500 helps to buy retail stock items such as soda, sugar, soap, and salt.",
		amount: 150000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 27,
		description: "A loan of $2,050 helps to equip her house with water and sewerage.",
		amount: 205000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 28,
		description: "A loan of $675 helps to purchase a car for starting a taxi business.",
		amount: 67500,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 29,
		description: "A loan of $1,025 helps to buy materials, design board, paint brush, color paints etc.",
		amount: 102500,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	},
	{
		user_id: 30,
		description: "A loan of $10,000 helps develop my brand, marketing tools, and tooling for classes and expanding my product portfolio.",
		amount: 1000000,
		end_date: Faker::Time.forward(30, :morning),
		payment_period_length: [15, 30].sample,
		loan_length: [30, 60, 90, 100, 180, 365, 365].sample
	}
]

loans.each do |loan|
	Loan.create!(loan)
end