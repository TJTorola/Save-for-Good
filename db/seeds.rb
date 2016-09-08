# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

User.create!({
	email: 'Philanthr0p1st@yahoo.com',
	password: 'password',
	name: 'Phil',
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
		id: 1,
		name: "Jane",
		location: "Kenya, Kerugoya",
		loan_description: "A loan of $2,975 helps to buy seeds and expand her horticulture farm.",
		amount: 297500,
		tags: [],
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
		id: 2,
		name: "Haydie",
		location: "Philippines, Carles",
		loan_description: "A loan of $650 helps to buy fishing net and food ingredients such as flour, sugar, and cooking oil.",
		amount: 65000,
		tags: [],
		about: <<-ABOUT
Haydie is a 43-year-old woman whose husband is a fisherman. With her great effort to help her husband improve their financial stability, she helps her husband in making their livelihood. They have been doing this for the past 18 years to provide for the needs of their family. Haydie also has a business selling food for additional income. They have two children; one who is already grown up and one dependent child to support.

Haydie's dream is to uplift her family to have better a means of living. She also wants to have enough money to send her children to school and see them finish their studies. To make it happen, she is asking for a loan to buy fishing net. Another part of her loan will be used to buy food ingredients such as flour, sugar, and cooking oil.
		ABOUT
	},
	{
		id: 3,
		name: "Tagrid",
		location: "Israel, Nazereth",
		loan_description: "A loan of $4,800 helps to buy a new dairy fridge, a refrigerator for drinks, an air conditioner, materials and supplies for the new branch.",
		amount: 480000,
		tags: [],
		about: <<-ABOUT
Tagrid dropped out of school after 8th grade and was married young but she has never ‎stopped learning.

She and her husband opened a bakery with partners over 15 years ‎ago. She learned every aspect of the business and after five years, when the partnership ‎ended, she developed her idea to open her own bakery. She took time and opened her ‎bakery at the Souk Open Market in her city.

Tagrid has reached a good number of ‎customers but cannot continue to grow in the Souk Open Market. She has opened another store ‎centrally located on a busy commercial street in her city and will manage them both to ‎continue the growth of her business.‎

Tagrid needs this loan for a new dairy fridge, a refrigerator for drinks, an air conditioner, ‎and materials and supplies.‎

Tagrid wants to continue growing her business as a strong, responsible business ‎woman. She and her husband are saving to buy a new house and she wants to help her ‎children.‎
		ABOUT
	},
	{
		id: 4,
		name: "Isaac",
		location: "Ghana, Accra",
		loan_description: "A loan of $475 helps to purchase electrical goods such as wires, control cables, etc. to sell.",
		amount: 47500,
		tags: [],
		about: <<-ABOUT
Isaac is a hardworking 38-year-old man with two children. They live in an apartment.

Isaac sells electrical goods in the Teshei area. Due to an increase in the demand for some electrical items, as will as increasing school fees, Isaac is requesting a loan from Kiva to purchase electrical goods such as wires, control cables, etc. to sell.

Isaac will use his profit to pay school fees, reinvest in his business and repay the loan.
		ABOUT
	},
	{
		id: 5,
		name: "Emiliana",
		location: "Bolivia, Santa Cruz",
		loan_description: "A loan of $2,500 helps to pay for plowing the ground to plant beans.",
		amount: 250000,
		tags: [],
		about: <<-ABOUT
Emiliana is a 45-year-old woman, she lives with her partner and has 3 sons, ages 6, 12, and 15, and a daughter, age 5, and her business is growing beans.

Her work is located in the locality of El Torno, a rural area which supplies the city with food.

Emiliana works with the help of her partner and they live with their children in their own house built of wood. Her business is growing beans and other vegetables. To plant them, she has sandy land, fertile, with good soil drainage, which she prepares making a row of plants in the soil with a plow, using oxen, making a thin line on the soil. "The seeds and fertilizers are spread manually and they are covered to avoid burning by the sun and damage by insects..." she says. Her harvest will be successful because she has experience in the field. The advantage of her business is that she has demand, the disadvantage is doing the plowing of the soil. Her dream is that her children can continue studying. She wants to pay for the plowing of her land. This is her first loan cycle with the institution in the 20 years she has been doing this work. 

It is for these reasons that Emiliana asks for a loan to pay for plowing her land to plant beans.
		ABOUT
	},
	{
		id: 6,
		name: "Ely",
		location: "Colombia, Momil",
		loan_description: "A loan of $375 helps to buy a specialized sewing machine to work special features in the clothes.",
		amount: 37500,
		tags: [],
		about: <<-ABOUT
Ely is 35 years old and lives in the municipality of Momil. She’s a happy married woman who has a son who is her biggest motivation. She took sewing classes years ago and then she started her own business to support her family. She dreams of paying for her son’s professional education and wants to improve her business so it can be sustainable and can reach more clients. She’s asking for a loan to buy a specialized sewing machine to work special features in the clothes.

Support this talented mother and loan now.

If you want to know more about the entrepreneurs and the loans from Interactuar, you can join the Lending Team called: “Friends of Interactuar Colombia”: http://www.kiva.org/team/interactuar_colombia
		ABOUT
	},
	{
		id: 7,
		name: "Dariko",
		location: "Armenia, Sevan",
		loan_description: "A loan of $1,475 helps to take part in very important pedagogical training course for which there is a fee.",
		amount: 147500,
		tags: [],
		about: <<-ABOUT
This will be this woman’s fifth Kiva loan and she is so happy for such a nice and long partnership. Dariko is 49 years old and she lives with her husband and daughter in the city of Sevan, located in Gegharkunik Province in Armenia. Dariko has a higher education; she graduated from Yerevan State Pedagogical Institute. For many years, she has worked at her school as a teacher of mathematics, and now she is the deputy director of the same school.

This time Dariko asks for a Kiva loan in an amount of 700,000 Armenian drams (AMD) since she must take part in very important pedagogical training course for which there is a fee. These courses are very informative and useful for the development of her pedagogical skills.
		ABOUT
	},
	{
		id: 8,
		name: "Nisrine",
		location: "Lebanon, Qana",
		loan_description: "A loan of $1,000 helps to purchase necessary raw materials, such as flour, butter, sugar and oils, from a wholesale market with encouraging prices so she can prepare sweets.",
		amount: 100000,
		tags: [],
		about: <<-ABOUT
Nisrine is a Jordanian refugee who fled from Syria to Lebanon because of the war three years ago. She lives and works with her husband and three children in a refugee camp.

Nisrine opened her sweets shop, where she prepares and sells sweets, to support her husband in covering their family's increasing living needs and expenses. Her husband had a sweets shop in Syria, but due to the war, he lost everything. He is managing with his wife to develop the business again with what they started in Lebanon.

Nisrine decided to benefit from Al Majmoua loans. Through her acquired loan, she will purchase necessary raw materials, such as flour, butter, sugar and oils, from a wholesale market with encouraging prices to make sweets.

She hopes to succeed in developing her business and diversifying her products to make sure that she can improve her family's standard of living.
		ABOUT
	},
	{
		id: 9,
		name: "Madelyn",
		location: "Philippines, Sagay",
		loan_description: "A loan of $225 helps to build a sanitary toilet for her family.",
		amount: 22500,
		tags: [],
		about: <<-ABOUT
Madelyn works hard to support three children. She is married and has a general store business in the Philippines.

Madelyn requested a PHP 10,000 loan through NWTF in order to build a sanitary toilet for her family.

Madelyn is aware that by using the sanitary toilet, she is reducing health and hazard risks to her family and neighbors as well as promoting environment protection.
		ABOUT
	},
	{
		id: 10,
		name: "Lusia",
		location: "Samoa, Samalaeulu Leauvaa",
		loan_description: "A loan of $3,900 helps to buy chemicals, banana tubes (seedlings), taro roots (seedlings), licence and registration, and a new car seat.",
		amount: 390000,
		tags: [],
		about: <<-ABOUT
Lusia is a 26-year-old mother of one child. She is strong and healthy enough to run her business. She is a Samoan citizen.

She runs a business providing transportation (taxi) services to people, and also sells taro and banana at the market to earn a living. She has been running her business for more than two years now, and this is her first SME loan. She has an excellent repayment record. 

Lusia requested a loan to buy chemicals, banana tubes (seedlings), taro roots (seedlings), licence and registration, and a new car seat to expand her business. 

She became a member of SPBD in 2012.
		ABOUT
	},
	{
		id: 11,
		name: "Edik",
		location: "Gegharkunik region, Armenia",
		loan_description: "A loan of $1,500 helps to buy a lot of fodder for all his farm cattle.",
		amount: 150000,
		tags: [],
		about: <<-ABOUT
Edik paid back his first Kiva loan, which greatly supported him in his farming. He lives in the Gegharkunik region of Armenia. His wife died several years ago, and he lives with his disabled son. Edik cares for his son, house and farm by himself. 

Edik has cows, a pig and several piglets. He earns an income mainly from his swine breeding and farming wheat. He sells his farm’s meat to butchers in the area. He works hard but still earns barely enough to properly care for his son. Edik is asking for this loan of 700,000 Armenian drams as he needs to buy a lot of fodder for all his farm cattle.
		ABOUT
	},
	{
		id: 12,
		name: "Jose",
		location: "Cajamarca, Peru",
		loan_description: "A loan of $1,350 helps invest in the maintenance of 1.5 hectares for coffee production.",
		amount: 135000,
		tags: [],
		about: <<-ABOUT
Jose Niguer, who is 21 years old, lives in a civil partnership. He lives in his own home, made of rustic materials, with his spouse and their child in the Santo Tomas district of the Cutervo province in the Cajamarca department of Peru. He has very good personal and professional references from the other people who live in the area. The majority of people living in the vicinity make a living in agriculture, commerce and livestock raising. Jose makes a living through agriculture, more specifically the farming of catimor coffee. To date he has 1.5 hectares, resistant to illness and plagues, as well as over 10 years of experience in the field. Additionally, he earns an income raising and selling small farm animals like chicks and chickens. Finally, he also works in the growing of products that bring forth bread (yuca, plaintain, vituca). The destination for the loan will be to invest in the maintenance of the 1.5 hectare crop of coffee currently in production, ensuring a good production for the 2017 campaign, which will be reflected in a larger volume of sales and subsequently more income to improve his and his family's quality of life. Jose Niguer is a recurrent partner for Edpyme Alternativa.
		ABOUT
	},
	{
		id: 13,
		name: "Nafeth",
		location: "Jabalia, Palestine",
		loan_description: "A loan of $1,175 helps to buy seedlings and seeds for his small farm.",
		amount: 117500,
		tags: [],
		about: <<-ABOUT
Nafeth is a 28-year-old married man from Jabalia, which is a refugee camp. He lives with his wife and one son in a humble house. Nafeth works in the public sector, but it is very limited and unstable salary. He has small piece of land on which he farms vegetables. He took a USD Murabaha loan from FATEN to buy seedlings and seeds for his small farm. He appears in the photo.
		ABOUT
	},
	{
		id: 14,
		name: "Melchora",
		location: "Antique, Philippines",
		loan_description: "A loan of $200 helps to buy additional piglets as well as a sack of feed and other supplies to raise her pig.",
		amount: 20000,
		tags: [],
		about: <<-ABOUT
Melchora is 57 years old and widowed with five children.

She earns a living by pig fattening business in the Philippines. Melchora is borrowing PHP 9,000 through NWTF to buy additional piglets as well as a sack of feed and other supplies to raise her pigs.

Melchora has been in this business for 10 years and also earns additional income from a general store.

She is working tirelessly toward the attainment of her dream: to save money to expand her business.
		ABOUT
	},
	{
		id: 15,
		name: "Jessa",
		location: "Louisville, KY, United States",
		loan_description: "A loan of $9,950 helps us to provide opening operating costs and ultimately double the size of our business.",
		amount: 995000,
		tags: [],
		about: <<-ABOUT
I am Jessa Mayhew, the Owner + Dreamer + Curator of Soul Candy Skincare, keeper of a gypsy soul and sparkling eyes (according to my husband). I grew up in Pennsylvania about an hour from NYC, daughter of Italian and Russian parents who taught me that anything made by hand is an extension of yourself, that a dinner made with love really does taste better. That is perhaps the most poignant precept of my youth and one that I carry with me today. I think that’s a lot of the reason that Soul Candy is so successful. I put my heart into every bottle. Before I started bottling eco-chic love, I was a health and fitness coach for the US Military for about 10 years. It was during this time that my passion for healthy, sustainable living really began to blossom. I saw first hand the incredibly positive impact that natural diets and treatments free of chemicals and processing can have on the human body. Forever thirsting for knowledge, I spent years studying and researching and experimenting with natural remedies. When my oldest developed severe childhood eczema, brain candy turned into Soul Candy. The other half of our family and Soul Candy team, my husband, Ben, has a B.S. from West Point and an M.A. from UTEP. We are a perfect match in so many ways, like the fact that he does my numbers because I hate math - to me, an unfortunately inextricable part of business. Our final military move landed us in Louisville, KY, but the people of Louisville made us stay. Now, I get to educate those same people on self-care and the importance of conscious consumerism. The people that we meet, the glows that we uncover, the bonds we form… that’s what keeps me going.
		ABOUT
	},
	{
		id: 16,
		name: "Fridah",
		location: "Ibanda, Uganda",
		loan_description: "A loan of $1,500 helps to buy retail stock items such as soda, sugar, soap, and salt.",
		amount: 150000,
		tags: [],
		about: <<-ABOUT
Fridah is a repeat borrower of UGAFODE Microfinance Limited. She deals in cattle fattening and milking as her major source of income. She currently owns about 100 head of cattle, the majority of which are for milk production. Through income earned from milk sales, Fridah has managed to look after her family together with her husband by providing them with the basic necessities of life and educating their four children. 

In addition to dairy farming, Fridah owns a retail shop in a trading center near her residence. She started this business because she wanted to provide quick service to people of her community. 

Fridah is applying for another loan of 5,000,000 UGX to buy more stock of items that have quick sales such as sugar, soap, salt, soda and corn flour to boost her sales. She is appreciative of your continued support and looks toward a bigger business.
		ABOUT
	},
	{
		id: 17,
		name: "Cristina",
		location: "Floresti, Moldova",
		loan_description: "A loan of $2,050 helps to equip her house with water and sewerage.",
		amount: 205000,
		tags: [],
		about: <<-ABOUT
Cristina is a young woman of 27 years. She is married, and she works as an accountant at the mayoralty, and her husband works abroad. With the money they received at their wedding party, they have bought an old house, and they started to renovate it. She has saved money from her salary, and from the money her husband sends, they succeeded in repairing the roof of the house, bedroom, and living room. Cristina wants a lot to equip her house with water and sewerage to be able to further construct a bathroom, a WC, and a kitchen. This thing will simplify a lot the domesticities and will improve the living conditions. If Cristina could finish the reparation of the house, her husband could stay with his family to work home without being forced to go abroad. All these plans of Cristina’s are realizable only with the credit from Kiva.
		ABOUT
	},
	{
		id: 18,
		name: "Demur",
		location: "Zugdidi, Georgia",
		loan_description: "A loan of $675 helps to purchase a car for starting a taxi business.",
		amount: 67500,
		tags: [],
		about: <<-ABOUT
Demur is 59 years old. He is married and lives with his family in the Zugdidi district. Demur is involved in agricultural activities. In particular, he owns 2 cows and a calf. His wife milks the cows every day and produces dairy products to sell locally. In addition, they have a plot of agricultural land where they grow nut trees and sell the harvest locally.

Demur decided to start taxi business to have a more stable income. The Start Up program, which is a joint initiative with Kiva and Credo enables him to get a loan of 1,500 GEL. With the received credit he will purchase a car and will serve people as a taxi driver.

Demur awaits your support.
		ABOUT
	},
	{
		id: 19,
		name: "Fuamata",
		location: "Saasaai, Samoa",
		loan_description: "A loan of $1,025 helps to buy materials, design board, paint brush, color paints etc.",
		amount: 102500,
		tags: [],
		about: <<-ABOUT
Fuamata is 64 years old and a widow with five grown children. 

She makes and sells Elei Lavalava to earn a living and has been doing this for two years. 

Fuamata has requested a loan to buy materials, design board, paint brush, color paints etc. 

She plans to use her profits to support her family financially and to improve her family living. 

She joined SPBD in 2014 to gain access to financial services.
		ABOUT
	},
	{
		id: 20,
		name: "Ryan",
		location: "Cumberland Gap, TN, United States",
		loan_description: "A loan of $10,000 helps develop my brand, marketing tools, and tooling for classes and expanding my product portfolio.",
		amount: 1000000
		tags: [],,
		about: <<-ABOUT
I live and manage my shop in the breathtaking Appalachian region surrounded by the Daniel Boone National Park in Cumberland Gap, Tennessee. This is a big change from busy Kansas City, Missouri where I lived until my move to Tennessee. While in Kansas City I owned and managed a motorcycle repair shop. Shortly after I moved from Kansas City, to Cumberland Gap, Tennessee in 2015, I met my neighbor William Brock, a traditional blacksmith and the owner of Rusted Bird Studio. Under his instruction, I learned the art of blacksmithing. Now I am blessed to manage my own shop surrounded by the breathtaking Appalachian mountains. I am a proud member of the Appalachian Area Chapter of Blacksmiths (AACB) and Artist-Blacksmith's Association of North America (ABANA). When I’m not blacksmithing, I’m exploring the area on my Harley or mountain biking. My goal in life is to work hard, stay humble, smile often, never stop learning, and always be thankful.
		ABOUT
	},
	{
		id: 21,
		name: "Aurelia",
		location: "Cundinamarca, Colombia",
		loan_description: "A loan of $775 helps to stock new models of bicycles for children and adults, and parts such as tires, rims, handlebar clamps, handlebars, frames and brakes.",
		amount: 77500,
		tags: [:green, :woman, :international, :small_buisness],
		about: <<-ABOUT
Aurelia is a 46 year old enterprising woman, who began a business selling bicycles and accessories with her spouse 16 years ago. Her good results have made her stand out. A friend of her husband helped them set up the business. He provided them information about suppliers and give them advice as to what products would sell well. Their bicycle store is located in the town of Mosquera, and they are very well known among the residents there.

Aurelia is currently applying for her first Kiva loan through the Mario Santo Domingo Foundation to stock new models of bicycles for children and adults, and to buy parts such as tires, rims, handlebar clamps, handlebars, frames and brakes. With this investment in her business she promises to increase her sales and attract new customers. Support this tireless, hardworking woman with her loan. Do it now.
		ABOUT
	},
	{
		id: 22,
		name: "Hoeurm",
		location: "Pursat, Cambodia",
		loan_description: "A loan of $975 helps to build a latrine.",
		amount: 97500,
		tags: [:woman, :international, :sanitation, :single_parent],
		about: <<-ABOUT
Hoeurm is a 54-year-old widowed woman from the Andoung Krasang Village, Snam Preah Commune, Bakan District, Pursat Province. She lives in a simple house with five unmarried children. In fact, she is a mother of eight children but three of eight are married and living in the other house. Hoeurm’s main income comes from agriculture. With her children she can make an average income of about USD 8.00 per day, after their daily expenses.

She has taken on much adversity in her life because she wants to provide a better lifestyle for and educate her children. She has requested a loan from Kiva through HKL, which she will use to build a latrine because currently there is no latrine in the house. This loan will help her family members become healthier and also benefit the surrounding environment by keeping it clean and freer of disease. This is a first loan cycle for her with Kiva. She is thankful to Kiva lenders for supporting her loan.
		ABOUT
	},
	{
		id: 23,
		name: "Faten",
		location: "Gaza, Palestine",
		loan_description: "A loan of $2,000 helps to buy a solar water heating system so she can get warm water in the winter.",
		amount: 200000,
		tags: [:woman, :international, :green],
		about: <<-ABOUT
Faten is a 27-year-old woman from Jabalia’s refugee camp. She is married and has two children. Her husband works in the public sector where his income is very limited. She took a USD loan from FATEN to buy a solar water heating system so she could get warm water in the winter. She appears in the photo and she thanks you for your support. 

Palestinians use water boilers that use either gas or gasoline to heat the water before a shower, which can be dangerous, expensive, and inefficient. This will help her acquire hot water without using electricity, which is much more expensive and not always available, and without hurting the environment.
		ABOUT
	},
	{
		id: 24,
		name: "Eusebio",
		location: "Santa Cruz, Bolivia",
		loan_description: "A loan of $2,500 helps to pay for the installation of an irrigation system for his cereal crops.",
		amount: 250000,
		tags: [:farming, :international],
		about: <<-ABOUT
Eusebio, 28, is single, has no children and works in agriculture in the town of "El Torno" which is an area vulnerable to constant flooding

Eusebio lives with his parents in his own wood house and farms the land that he inherited from relatives. He grows cereals such as wheat, barley, corn and hay. Part of the crop is for home consumption and the other is for retail sail at the local market and to poultry farms. "We are looking for a way to improve irrigation on the plantations..." he says.

He is applying for a loan to install a new irrigation system to increase crop production. The profits will be reinvested in the business. This loan will help produce better quality cereal and earn more income. This is Eusebio's first loan through the institution in the nine years he has been in business.

Therefore Eusebio is applying for a loan to install a new irrigation system for his cereal crops.
		ABOUT
	},
	{
		id: 25,
		name: "Jorve",
		location: "Las Higueras-Colasay, Peru",
		loan_description: "A loan of $900 helps to buy compost and to pay workers to remove weeds on his organic coffee farm.",
		amount: 90000,
		tags: [:farming, :organic, :international],
		about: <<-ABOUT
Jorve, age 23, is a hardworking and responsible young entrepreneur who lives with his parents and siblings in the village of La Higuera – Colasay, Peru. He needs money in order to buy compost for his coffee farm so that he can sell to the Cedroscafe Cooperative, which has organic and fair trade certification. 

Jorve is a new member of Norandino and has high expectations of success. He has one hectare of coffee, which is on an annual schedule for applying compost so that the land will generate a higher yield of product. This will result in more income for him so that he can continue buying small plots of land for planting more coffee. Jorve also works a laborer on the days when he is not tending to his farm. He has demonstrated that he is a hardworking individual who has the drive to keep excelling.
		ABOUT
	},
	{
		id: 26,
		name: "Francisco",
		location: "San Jose De Ure, Colombia",
		loan_description: "A loan of $875 helps buy more fishes (“cachamas”) to raise and food for them.",
		amount: 87500,
		tags: [:international, :refugee],
		about: <<-ABOUT
Francisco is 54 years old and lives in the municipality of San Jose de Ure. He’s a hardworking man who loves fishing; that's the reason why he started a fish raising business in 2009, and he specializes in a specific fish called “cachama,” which has become in a typical dish in Colombia. 

He would like to fix his house because it has some damage, and he wants to give a better life to his family. He expects he can make his business sustainable so he can increase the profits. He’s asking for a loan to buy more fishes, “cachamas,” to raise and food for them.

Support this fisherman and lend now. 
		ABOUT
	},
	{
		id: 27,
		name: "Carmelo",
		location: "Tuchin, Colombia",
		loan_description: "A loan of $525 helps buy more stock like grains, oil, and other products.",
		amount: 52500,
		tags: [:international, :small_buisness, :refugee],
		about: <<-ABOUT
Carmelo is 39 years old and lives in the municipality of Tuchin. He has a son and a daughter who are the most important people in his life. Last year, he opened a store and now he wants to improve it so he can give his family a better life and pay for his children’s education. He wants to increase the sales so he’s asking for a loan to buy more stock like grains, oil, and other products. Support this great father and loan now.
		ABOUT
	},
	{
		id: 28,
		name: "Yasmin",
		location: "Pueblo Nuevo, Colombia",
		loan_description: "A loan of $275 helps to purchase an assortment of keratin, dyes, nail polish, gel, and more.",
		amount: 27500,
		tags: [:woman, :international, :refugee, :small_buisness],
		about: <<-ABOUT
Yasmin is from the municipality of Pueblo Nuevo. She has worked in sales for 1 year, is single, and has made her way and today is already well-known in the sector where her business is located.

She works selling beauty supplies.

She is a very hard-working and determined person who wants to get ahead and have a life full of successes and triumphs.

She asks for this loan to purchase an assortment of keratin, dyes, nail polish, gel, and more.
		ABOUT
	},
	{
		id: 29,
		name: "Bibiana",
		location: "Sincelejo, Colombia",
		loan_description: "A loan of $375 helps to buy sweets, snacks and other things to stock up.",
		amount: 37500,
		tags: [:woman, :international, :small_buisness],
		about: <<-ABOUT
Bibiana is 44 years old and lives in the municipality of Sincelejo. She has a little daughter that she loves more than anything and she dreams of giving her the best life she can. 

She has a business where she sells different products. 

She wants to improve the sales, so she’s asking for a loan to buy products like sweets, snacks and others to stock up.

Support this amazing mother and loan now.
		ABOUT
	},
	{
		id: 30,
		name: "Damaris",
		location: "Denver, CO, United States",
		loan_description: "A loan of $10,000 helps increase our production by allowing us to purchase larger equipment as well as increase the efficiency of our packaging process by ordering larger quantities at a reduced rate.",
		amount: 1000000,
		tags: [:small_buisness, :woman],
		about: <<-ABOUT
After graduating college from Tufts University, I decided to go into the food industry. I started working at an upscale Italian restaurant as a line cook in Boston. After about two years, I moved back to Denver where I grew up, to work as a line cook at a local farm-to-table, high-end restaurant. Eventually, I became a pasty chef at a local dessert bar which helped ignite and promote my own creativity with ingredients. It was then I became curious about starting my own business and using small-scale equipment and sustainable ingredients. Simultaneously, I was working part time at a local immigration law firm and saw the struggles of the Hispanic community re-starting their lives here in Denver. I decided to start a chocolate company focused on my Mexican heritage that would also help promote and support small farmers in Central America. I'm a self-starter, determined, adaptable, and hard-working.
		ABOUT
	},
	{
		id: 31,
		name: "Stephen",
		location: "Louisville, KY, United States",
		loan_description: "A loan of $9,875 helps us purchase more equipment, more inventory, hire people and update and optimize our website.",
		amount: 987500,
		tags: [:small_buisness],
		about: <<-ABOUT
I am a 28 year old that has a college degree and was delivering pizza. My mom started making her own homemade cleaning products and then started making soaps for our family. I know how bad commercial, chemical-laden products are for us, our environment and our health and decided to start researching chemical-free options to offer to my community. I knew that I could make a business out of what my mom was doing for our family. I started researching ingredients and the effects of toxic chemicals on our health and also researching healthy alternatives. Basically going back to what our forefathers used. Through a lot of trial and error I have perfected recipes for soaps, sea salt scrubs, lotions, dog shampoo, body wash, liquid hand soap, shampoo bars, beard wax, laundry soap and dishwasher soap that are good for our bodies, our health and our environment. Most of my products are vegan but they are all natural.
		ABOUT
	},
	{
		id: 32,
		name: "Khin",
		location: "Yangon, Myanmar (Burma)",
		loan_description: "A loan of $10,000 helps to stock her pharmacy with essential healthcare products.",
		amount: 1000000,
		tags: [:small_buisness, :woman, :health, :international],
		about: <<-ABOUT
Located in southeast Asia, Myanmar is one of the poorest countries in the world. Due to strict regulations, it can be very difficult to import medication, making small pharmacies a critical resource for communities to access medicine. Khin Khin, an intrepid female entrepreneur, started her small pharmacy business in 1999 at a busy market in Yangon to help fill this gap. For years, her shop sold medications in small amounts, sometimes even single doses. For the past several years, Khin Khin has been working with Building Markets, a nonprofit that helps small businesses grow and reach larger markets. With this support, she learned to identify new opportunities for her pharmacy, from serving walk-in customers to fulfilling orders for large organizations. Khin Khin is particularly impressive because she has not only been committed to increasing access to medicine, she has invested in her employees, training them about pharmaceuticals so they can continue on to a career in healthcare. Due to her dedication, Khin Khin’s businesses is expanding. However, accessing the capital to support this growth is not easy in Myanmar. And, fulfilling larger orders can deplete her stock, making it necessary for her to buy more products to continue serving her customers. With this loan, she will be able to stock more medication, allowing her to expand her pharmaceutical sales, boosting her business and providing essential healthcare products to those in need.
		ABOUT
	},
	{
		id: 33,
		name: "Siranush",
		location: "Sevan, Armenia",
		loan_description: "A loan of $1,700 helps to pay for her mother’s medical exam at the hospital as her mother has some health problems.",
		amount: AMT,
		tags: [:woman, :heath, :international],
		about: <<-ABOUT
Siranush is 24 years old and lives in Sevan city of Gegharkunik region. Siranush has a higher education with a specialty in economics. 

Siranush has already worked at an insurance company as an administrator for 3 years. She lives with her parents. Her father works at the post-office and her mother is a pedagogue. Siranush is asking for this loan as her mother has some health problems and she wants to help her get rid of the discomfort as soon as possible. She will use this loan of 800,000 AMD to pay for her mother’s medical exam at the hospital.
		ABOUT
	},
	{
		id: 34,
		name: "Nona",
		location: "Lorut, Armenia",
		loan_description: "A loan of $1,275 helps to pay for tuition at Armenian State Pedagogical University.",
		amount: 127500,
		tags: [:woman, :international, :education],
		about: <<-ABOUT
Get to know Nona! Nona is a 21-year-old hardworking student from Lori village. She studies at Armenian State Pedagogical University, and she wants to become a chemist. Her specialization is pretty challenging; that's why Nona studies very hard to stand out among her mates. 

She lives in a family of five with her parents, her sister, and two brothers. Her sister is a student as well, and her brothers are schoolboys. Nona's parents work hard to provide their children's proper living conditions. Her parents are engaged in farming. 

Nona has applied for this loan to soothe her family's living. She needs your help to pay for tuition at Armenian State Pedagogical University. Thanks to this loan, she'll be able to continue studying process and fulfill her desire to become an expert in chemistry. Nona thanks you wholeheartedly in advance.
		ABOUT
	},
	{
		id: 35,
		name: "Saber",
		location: "Ramallah City, Palestine",
		loan_description: "A loan of $1,500 helps to pay his educational fees.",
		amount: 150000,
		tags: [:international, :education],
		about: <<-ABOUT
Saber is 20 years old from Der Al-Sudan near Ramallah City in the West Bank. He studies social services at a local university. He works hard after the university to provide for his basic needs.He is taking a USD loan from Palestine for Credit and Development (FATEN) to pay his educational fees. He hopes you will help him and fund his loan to enable him finish his studies and improve his living standards.Saber appears on photo.
		ABOUT
	},
	{
		id: 36,
		name: "Muhamd",
		location: "Khanyounis, Gaza Strip, Palestine",
		loan_description: "A loan of $2,900 helps to pay his educational costs.",
		amount: 290000,
		tags: [:education, :international, :single_parent],
		about: <<-ABOUT
Muhamad is 34 years old from Khanyounis city in the Gaza Strip. He is a father of three children. He works in the public sector and has a medical analysis laboratory.

He wants to continue his study and take a master's degree to develop himself and his work, but his salary is not enough for the needs for his family and the rent of his laboratory and his study, so he is taking a USD loan from Palestine for Credit and Development (FATEN) to pay his educational costs.He hope you will fund his loan and make him achieve his dream. Muhammad appears on photo.
		ABOUT
	},
	{
		id: 37,
		name: "Charity",
		location: "Embu, Kenya",
		loan_description: "A loan of $500 helps to buy manure, fertilizer and pesticides.",
		amount: 50000,
		tags: [:woman, :farming, :international, :single_parent],
		about: <<-ABOUT
Charity is a 38-year-old, single lady who is blessed with four children. She lives in Embu where she carries out her farming activities. Charity is a cabbage farmer who is hardworking and loves her job. Her challenge has been to increase her farming activities. 

With this loan, Charity will buy pesticides, manure and fertilizer to increase her farming. This will boost her business and increase her profits after sales. Charity had taken a previous loan and was able to pay it in time. This is her second loan. Her dreams are for her children to school to university and to open a hotel on a piece of land that she owns.
		ABOUT
	},
	{
		id: 38,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 39,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 40,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 41,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 42,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 43,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 44,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 45,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 46,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 47,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 48,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 49,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	},
	{
		id: 50,
		name: "NAME",
		location: "LOCATION",
		loan_description: "DESC",
		amount: AMT,
		tags: [],
		about: <<-ABOUT
ABT
		ABOUT
	}
]