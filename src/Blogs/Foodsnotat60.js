import '../style.css'
import Preloader from '../component/Preloader';
import canned from '../images/canned.jpg';
import alcohol from '../images/alcohol.jpg'

function Foodsnotat60(){
	return(
		<div className='content'>
		<Preloader />
		<h1>The Six Foods You Should Stop Eating at 60 or older in order To Keep Your Kidney Healthy</h1>
		
		<p>According to healthline, one of the most important methods to maintain our kidneys healthy and prevent chronic renal disease is to eat the right meals. Similarly, avoiding certain meals, particularly as we approach our 60s and beyond, can keep our kidneys in good functioning order. Kidney function naturally declines with age, even in a healthy elderly individual. However, as previously said, our food choices can have a huge impact on the health of our kidneys.
		Our kidneys play a crucial role in the body, filtering blood, generating hormones, eliminating waste through urine, keeping fluid balance, and balancing minerals, among other things. Because the kidneys’ inability to fulfill these jobs can result in an accumulation of waste in the blood and body, which can lead to a variety of health problems, we must avoid the foods listed below.</p>
		
		<h2>1. Canned foods</h2>
		<img src={canned} alt="ReadNite" />
		<p>Tomatoes, fruits, vegetables, and other canned foods according to webmd, are heavy in sodium and preservatives, which can diminish kidney function and damage over time, especially in people in their 60s and older.</p>

		<h2>2. Alcohol</h2>
		<img src={alcohol} alt="ReadNite" /> 
		<p>Due to their drying impact, alcohols such as beer, wine, and dry gin(or spirit) can dehydrate our body cells and organs, including the kidney, causing a decline in kidney function and making them less able to filter the blood. This is especially important for the elderly, as reducing alcohol use slows the deterioration of their kidneys and other organs.</p>

		<h2>3. Processed foods</h2>
		<p>According to medicalnewstoday, processed foods including smoked fish and pork, salted and dried foods, cured foods, and canned foods have been linked to chronic kidney disease and may potentially cause other chronic health issues, particularly in the elderly.</p>

		<h2>4. Soda</h2>
		<p>Because of the artificial sweeteners and additives present in soda drinks, studies have connected them to disorders like tooth difficulties, kidney diseases, and more. Reduced soda consumption can lessen the risk of renal disease, as well as obesity and other disorders.</p>

		<h2>5. Organ meats</h2>
		<p>Organ meats are frequently utilized in pepper soup sauce and are popular among persons in their 60s and older. Organ meats include purine, which encourages the creation of uric acids, which can settle in the kidney and produce kidney stones, in addition to the high saturated fats and cholesterol contained in them.</p>

        <h2>6. Butter</h2>
        <p>Butter contains a lot of animal fats, saturated and trans fats, and cholesterol, all of which can cause the kidneys to work too hard, increasing the risk of renal and heart disease.</p>
		</div>
	)
}
export default Foodsnotat60;