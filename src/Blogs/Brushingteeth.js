import '../style.css'
import gdbrush from '../images/gdbrush.jpg'
import img45degs from '../images/45degs.jpg'
import Preloader from '../component/Preloader';

function Brushingteeth(){
	return(
		<>
		<Preloader />
		<div className='content'>
			<p>Here are the 6 most important tips to brushing teeth the right way and getting good results shortly after:</p>

			<h2>1. Use a Good Toothbrush</h2>
			<p>Although it will be hard to see with your naked eye, it is best to use toothbrushes with rounded bristles.</p>
			<img src={gdbrush} alt="Brushing teeth the right way" />
			<p>"This means that these brushes are safer to use and will not scrape away important parts of your teeth such as 
			enamel and dentine. Since you cannot see those bristles just by looking at them while shopping, it is highly recommended 
			that you throw it away before it wears out and becomes unsafe."</p>
			<p>"We advise that if you brush your teeth twice a day, it is best to change your toothbrush every four weeks. In general,
			 changing your toothbrush every 2 months will do."</p>

			<p>It is also best to buy a toothbrush with soft bristles. Harder bristles are like sand paper ready to puncture and scrape your
			 teeth – causing more damage than actually cleaning your teeth."</p>

			<h2>2. Do Not Over Brush</h2>
			<p>Over-brushing is not about how many times you brush each day. There are people who would be concerned about too much brushing 
			if they brushed their teeth after every meal.
			So, if they eat more than three times a day, that would mean brushing their teeth more than three times a day. But that does not 
		constitute over-brushing.
			Studies show that approximately 80% of people are over-brushing. It is directly related to the way you brush your teeth. Generally,
			 people brush their teeth until it feels smooth and squeaky clean. It is like scrubbing dirt from your bathroom tiles. 
			 Stop this mistake!</p>
	
			<h2>3. Massage your teeth not Scrubbing them</h2>
			<p>Brushing your teeth should be like a massage to protect your teeth’s dentine and enamel. Going back and forth is like 
			scrubbing and this can be harmful to your teeth.
			Like a massage, you should brush your teeth in a circular motion with up and down strokes towards the gum line.</p>
	
			<h2>4. Get the angle</h2>
			<p>It is best to position your toothbrush at a 45-degree angle to be able to reach the gum line. Normally, most people are 
			focused on brushing their teeth and they forget their gums.</p>
			<img src={img45degs} alt="Brushing teeth the right way" />
			<p>Bacteria builds up more on gums, particularly the area between your teeth and your gums. This area is often ignored.</p>
	
			<h2>5. Timing</h2>
			<p>Yes, brushing your teeth properly means proper timing. This means that you need to wait for at least 15 minutes after a 
			meal to brush your teeth.
			The goal is to let your saliva work its way to remove the acid from your mouth. If you’re in a hurry, wash away the acid in 
			your mouth with water before brushing your teeth.</p>
	
			<h2>6. Numbers matter</h2>
			<p>We recommend brushing your teeth twice a day for two minutes – no more, no less – once in the morning and once before going to bed.
			Staying too long in the bathroom brushing your teeth means you are adding minutes to damaging your teeth. Stop the habit of 
			listening to your favorite music every time you brush your teeth.
			Brushing your teeth is the most basic and fundamental means of caring for your oral health. Do not wait until you experience 
			bleeding gums or tooth decay before you start caring for your teeth.
			Remember, your oral health is just as important as keeping your physical body in good condition. Your oral health reflects your 
			total well-being.</p>
			<p>I hope you enjoyed reading this blog post.</p>		
		</div>
		</>
	);
}
export default Brushingteeth;