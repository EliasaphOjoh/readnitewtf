import '../style.css';
import fear from '../images/fear.jpg';
import fear2 from '../images/fear2.jpg';
import Preloader from '../component/Preloader';

function Womenfear(){
	return(
		<div className='content'>
		<Preloader />
			<h1>15 Things Women Fear About Most Men</h1>
			<p>Gentlemen, assure the woman you claim to love. Don’t let her biggest fear come to reality.</p>

			<img src={fear} alt="Things women fear" />
			<p>Shield her from the pain other men have caused her, the pain she hears other men have caused other women and the pain her dad caused her mother. Show her real love because you mean it and you are the one who pursued her,
 			arose love in her and requested her to come and start a journey of love with you.</p>

			<h3>Things Women Fear About Men</h3>
			<p>"1. Is he only after me for sex and once he gets it will he use me and leave?"</p>

			<p>"2. Does he mean the sweet and special things he tells me?"</p>

			<p>"3. Does he tell other women the sweet and special things he tells me?"</p>

			<p>"4. What if I marry him and then he changes?"</p>

			<p>"5. What if I can’t have children, will he leave me?"</p>

			<p>"6. What if he gets to find out my darkest secrets, will he judge me and reject me?"</p>

			<p>"7. He is struggling financially now and I am helping him. What if I help him to grow and he becomes wealthy, will he abandon me? Is he only with me when it is financially convenient?"</p>

			<p>"8. Does he really enjoy having sex with me? Why doesn’t he make sexual moves on me as much these days, is he cheating? Is he bored? Am I too fat? Do I smell down there?"</p>
			<img src={fear2} alt="Things women fear" />

			<p>"9. What if I give him kids, will he bail on me and the children and I parent them alone?"</p>

			<p>"10. Will he believe me if I tell him his mother is doing wrong to me?"</p>

			<p>"11. Can I trust him when he goes to work with other women? Can I trust him when he is alone in the house with the house help? Can I trust him with my and his female friends?"</p>

			<p>"12. Is he making a fool out of me with his smart phone?"</p>

			<p>"13. As I grow older, will he chase after younger ladies who I can’t physically keep up with and become a sponsor to opportunistic women?"</p>

			<p>"14. Will he lie to me that I am the only woman in his world then in marriage he changes and insists and justifies polygamy saying he wants a second and third wife?"</p>

			<p>"15. Will the warnings my family and friends gave me about him turn out to be true?"</p>

			<p>"16. Is this real love or just another heart break waiting to happen? I am tired of having connections that don’t last and investing in false love that leads to pain"</p>
		</div>
	);
}
export default Womenfear;