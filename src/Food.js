import Post from './Post';
import './style.css'
import { Link } from 'react-router-dom'


import alkahol from './images/alkahol.jpg'

function Food() {
	return(
		<div className='stomach'>
		<h1 className='theme'>Food and Recipe</h1>
        <div className='posts'>
			<div className='posts-container'>
				<Link to='/Foodsnotat60' className='post-link'>
					<Post image={alkahol} text='Foods you should not eat at 60s' />
				</Link>
				<Link to='/Avocado' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/collage-3d-fruits-textures_23-2149757638.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=sph'} text='What are the health benefits of avocado' />
				</Link>
				<Link to='/Baking' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/shot-handsome-baker-putting-trays-fresh-bread-stand-baking-manufacture-african-american_1157-48108.jpg?w=740&t=st=1689375371~exp=1689375971~hmac=6d89ee6c295ee8b9fb99f2304cc833a6d917f4dc4a9adbd09bbdda29c48e7a45'} text='The Art of Baking - How to improve your baking skills' />
				</Link>
				<Link to='/Balancediet' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/bowl-buddha-rice-chicken-breast-broccoli-pumpkin-avocado-chickpeas-carrots-cucumber-beets_156140-4706.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='What is balanced diet, and how you can achieve it' />
				</Link>
				<Link to='/Busymeal' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/thoughtful-beautiful-mulatto-woman-is-looking-laptop-screen-modern-kitchen-table-full-vegetables-fruits-dressed-white-t-shirt_8353-10289.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='Healthy Meal Prep Ideas for Busy Professionals' />
				</Link>
				<Link to='/Cheapcooking' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/woman-chef-cooking-vegetables-pan_1303-22287.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=sph'} text="Budget-Friendly Cooking That Doesn't Compromise on Flavor" />
				</Link>
			</div>

			<div className='posts-container'>
				<Link to='/Cookingvalue' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/head-cook-throwing-fresh-chopped-herbs-pan-improve-taste-meal-while-professional-kitchen-master-chef-seasoning-dish-prepared-food-contest-held-fine-dining-restaurant_482257-40137.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=sph'} text='How Cooking Techniques Impact Nutritional Value of Food' />
				</Link>
				<Link to='/Cookingskills' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/woman-chef-cooking-vegetables-pan_1303-22291.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=sph'} text='Cool Tips to Improve Your Culinary Skills' />
				</Link>
				<Link to='/Dessertveges' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/side-view-fruit-cake-with-vanilla-cream-chocolate-kiwi-orange-pineapple-strawberry_141793-4923.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='Creative Ways to Add Vegetables to Your Desserts' />
				</Link>
				<Link to='/Dinnerhosting' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/young-african-woman-putting-wooden-board-with-appetizing-homemade-sandwiches-festive-table-burning-candles-other-food_274679-25486.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='How to Plan and Host a Successful Dinner Party' />
				</Link>
				<Link to='/Exerciceloss' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/flay-lay-scale-weights_23-2148262188.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='How can I lose weight through diet and exercise? - Answered' />
				</Link>
				<Link to='/Fermented' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/jars-with-preserved-food-assortment_23-2149239013.jpg?size=626&ext=jpg&ga=GA1.2.88809623.1689375086&semt=ais'} text='Health Benefits of Including Fermented Foods in Your Diet' />
				</Link>
			</div>
			
			<div className='posts-container'>
				<Link to='/Foodallergies' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/view-allergens-commonly-found-food_23-2150170308.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='Understand Common Food Allergies and Effective Management Strategies' />
				</Link>
				<Link to='/Foodlabels' className='post-link'>
					<Post image={'https://img.freepik.com/free-vector/cider-label-design-template_23-2150241528.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='How can I read and understand food labels' />
				</Link>
				<Link to='/Foodmoodconnection' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/front-view-friends-having-lunch-outdoors_23-2149603461.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='How Food Affects Our Moods and Mental Well-Being' />
				</Link>
				<Link to='/Foodwaste' className='post-link'>
					<Post image={'https://t4.ftcdn.net/jpg/02/40/25/95/240_F_240259537_w47BrJNCWJxd6lgDUkP69wzkKWijqpud.jpg'} text='Reducing Food Waste: Practical Tips to Prevent Food Waste in Your Kitchen' />
				</Link>
				<Link to='/Globalcuisines' className='post-link'>
					<Post image={'https://media.istockphoto.com/id/1470706615/photo/couple-enjoying-their-food.webp?b=1&s=170667a&w=0&k=20&c=aMkx6bTlsJfisIa7s_z8OFPCl-CLq5s9IqrN65-W5Sg='} text='Exploring Global Cuisines: Revealing Flavors from Around the World' />
				</Link>
				<Link to='/Glutenfree' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1574484152510-903878da786c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2x1dGVuJTIwZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text='How to Cook Gluten-Free Tasty Food' />
				</Link>
			</div>

			<div className='posts-container'>
				<Link to='/Goodbadfats' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1596450514735-111a2fe02935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60'} text="What's the difference between good and bad fats? - Answered" />
				</Link>
				<Link to='/Healthierfoods' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/young-pretty-woman-eating-pizza-pizza-bar_1303-20334.jpg?size=626&ext=jpg&ga=GA1.2.88809623.1689375086&semt=sph'} text='Healthier Comfort Foods: Nourish and Satisfy with Smart Swaps' />
				</Link>
				<Link to='/Healthychildren' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/medium-shot-happy-girls-with-food_23-2148910355.jpg?size=626&ext=jpg&ga=GA1.2.88809623.1689375086&semt=ais'} text='How To Encourage Healthy Eating Habits and Variety in Children' />
				</Link>
				<Link to='/Homemadesauce' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/tasty-fresh-tomato-sauce-small-bowl-with-ingredients-cooking-old-wooden-background-closeup_1220-6301.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='How to Create Homemade Condiments and Sauces with Flavorful Ease' />
				</Link>
				<Link to='/Kale' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/chinese-kale-vegetable_1203-6811.jpg?w=360&t=st=1689376962~exp=1689377562~hmac=7d9b6bbf31931bc9d4a910a70deda3f93041925035fb19080860f66fcc925b14'} text='Exploring the Health Benefits of Kale' />
				</Link>
				<Link to='/Kidsnacks' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/little-school-girls-sitting-bench-school-yard-eating-from-lunch-boxes_169016-13552.jpg?size=626&ext=jpg&ga=GA1.2.88809623.1689375086&semt=ais'} text='Highly Nutritious and Delicious Healthy Snacks for Kids' />
				</Link>
			</div>

			<div className='posts-container'>
				<Link to='/Kombucha' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/front-view-woman-preparing-kombucha_23-2149894678.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='How You Can Brew Your Own Kombucha at Home' />
				</Link>
				<Link to='/Localproduce' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/shallow-focus-woman-with-facemask-holding-pos-machine-market_181624-39373.jpg?size=626&ext=jpg&ga=GA1.2.88809623.1689375086&semt=ais'} text='What are the benefits of buying locally sourced and seasonal produce? - Answered' />
				</Link>
				<Link to='/Mealplan' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/top-view-arrangement-with-meal-planning-notebook_23-2149099890.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='How To Meal Plan for The Next One Week' />
				</Link>
				<Link to='/Naturalflavors' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/chef-prepares-food-hot-pan-with-steam_192985-2807.jpg?size=626&ext=jpg&ga=GA1.2.88809623.1689375086&semt=sph'} text='How to Cook with Seasonal Ingredients: Embrace the Flavors of Nature' />
				</Link>
				<Link to='/Notime' className='post-link'>
					<Post image={''} text='' />
				</Link>
			</div>

			<div className='posts-container'>
				<Link to='/Nutricious' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=740&t=st=1689377716~exp=1689378316~hmac=aac177b30e24f101c9bda1e810e7574df683a64a52330b2e6be3b125bab53e2d'} text='What are some nutritious food options? - Take A Look.' />
				</Link>
				<Link to='/Nutringredients' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/side-view-doner-plate-with-french-fries-tomato-fresh-cucumber-yogurt-bread-table_141793-4969.jpg?size=626&ext=jpg&ga=GA1.2.88809623.1689375086&semt=sph'} text='Unlocking the Power of Nutrient-Rich Ingredients' />
				</Link>
				<Link to='/OrganicfoodPlantbased' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/top-view-cropped-hands-senior-cook-unrecognizable-cutting-carrot-cooking-vegetable-stew_1098-20510.jpg?size=626&ext=jpg&ga=GA1.2.88809623.1689375086&semt=sph'} text='Exploring the Benefits of Organic Food: Nourishing Your Health and Our Environment' />
				</Link>
				<Link to='/Plantbased' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/close-up-vegetables-kitchen_23-2150321036.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=sph'} text='Embrace the Taste And Freshness of Plant-Based Diets' />
				</Link>
				<Link to='/Plantprotein' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/various-legumes_53876-47070.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=sph'} text='The Best Sources for Vegetarian Diets:Plant-Powered Proteins' />
				</Link>
				<Link to='/Quickmeals' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/closeup-view-homemade-patties_126732-1072.jpg?size=626&ext=jpg&ga=GA1.2.88809623.1689375086&semt=sph'} text='Quick and Easy 30-Minute Meals for Busy Work Nights' />
				</Link>
			</div>

			<div className='posts-container'>
				<Link to='/Sauerkraut' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/chinese-food-delicious-pickled-fish_1205-11454.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=sph'} text='Crisp and Tangy: A Guide to Making Your Own Sauerkraut at Home' />
				</Link>
				<Link to='/Shopping' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/medium-shot-woman-market_23-2149160662.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='Smart Shopping: Making Informed Choices at the Grocery Store' />
				</Link>
				<Link to='/Taste' className='post-link'>
					<Post image={''} text='' />
				</Link>
				<Link to='/Sustainable' className='post-link'>
					<Post image={''} text='Nourishing the Planet: Embracing Sustainable Eating for a Better Future' />
				</Link>
				<Link to='/Thanksgiving' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/people-cheers-celebrating-thanksgiving-holiday-concept_53876-87546.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='How can I plan and cook for  successful thanks giving party' />
				</Link>
				<Link to='/Tradcooking' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/seoul-south-korea-march-14-2016-woman-is-cooking-food-selling-stall-with-street-food-myeongdong-open-street-market-seoul-south-korea-selective-focus_250132-28732.jpg?size=626&ext=jpg&ga=GA1.2.88809623.1689375086&semt=ais'} text='Traditions Exposed: Traditional Cooking Methods from Around the World' />
				</Link>
			</div>

			<div className='posts-container'>
				<Link to='/Tradcooking2' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/woman-cooks-pot-water-stove_853645-3843.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='Discovering the Most Fascinating Traditional Cooking Methods from Around the World' />
				</Link>
				<Link to='/Turmeric' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/set-herb-grinder-ginger-dry-cinnamon-ginger-powder-tea-cups-dark-textured-background-side-view-space-text_176474-1727.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=sph'} text='The Golden Spice: Exploring the Health Benefits of Turmeric' />
				</Link>
				<Link to='/Uniquecuisines' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=sph'} text='The Most Unique and Unusual Ingredients in Global Cuisines' />
				</Link>
				<Link to='/Vegesindiet' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1424593463432-4104fa2c015a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnYXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text='How can I incorporate more fruits and vegetables into my diet? - Learn and Enjoy.' />
				</Link>
				<Link to='/Worldflavors' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/experienced-chef-is-adding-decoration-freshly-prepared-pizza_613910-14687.jpg?size=626&ext=jpg&ga=GA1.1.88809623.1689375086&semt=ais'} text='Journey of Flavors: Exploring Traditional Dishes from Around the World' />
				</Link>
				<Link to='/Yorghurt' className='post-link'>
					<Post image={'https://media.istockphoto.com/id/1393258765/photo/a-young-woman-eats-oatmeal.webp?b=1&s=170667a&w=0&k=20&c=znTApKOEt8dLVSsHimbtPebIKqDPkFRgAj48A2eCA3k='} text='Homemade Yogurt: A Delicious and Nutritious DIY Adventure"' />
				</Link>
			</div>
      	</div>
      </div>

	)
}
export default Food;