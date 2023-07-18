import '../style.css'
import onions from '../images/onions.jpg'
import onyons from '../images/onyons.jpg'
import Preloader from '../component/Preloader';

function Sleepingwithonion(){
	return(
		<div className='content'>
		<Preloader />
			<h1>Benefits of Sleeping with an Onion on your Feet</h1>
			<img src={onions} alt="Health benefits of sleeping with onions" />
			<p>According to the Agroalimentary Technological Institute of Spain, onion is a wonderful anti-flu and a great ally to improve the 
			immune system.</p>

			<h2>Why on the feet?</h2>
			<p>These have nerve endings that connect with different organs of our body and, by stimulating them through absorption, bring 
			benefits in our state of health.</p>

			<h2>How is it used?</h2>
			<p>The only thing you should do is to split a white or purple onion into slices and put them on the arch of your feet, using socks 
			or a shoelace, not so fair to avoid circulation problems.</p>
			<img src={onyons} alt="Health benefits of sleeping with onions" />

			<h2>So these are the benefits</h2>
			<p>– Help fight infections</p>
			<p>– Promotes the elimination of toxins</p>
			<p>– Rejuvenates</p>
			<p>– Eliminates the bad smell of the feet</p>
			<p>– Hydrate your skin</p>
			<p>– Clean the blood</p>
			<p>– Improves blood circulation</p>
			<p>Simply apply this home remedy for 5 days to feel great.</p>
		</div>
	)
}
export default Sleepingwithonion;