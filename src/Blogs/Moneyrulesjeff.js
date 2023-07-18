import '../style.css'
import jeff from '../images/jeff.jpg'
import Preloader from '../component/Preloader';

function Moneyrulesjeff(){
	return(
		<div className='content'>
		<Preloader />
			<h1>The 17 Money Rules according to Jeff Bezos</h1>
			<p>One of the richest billionaires in the world, Jeff Bezos has pointed out the best rules of money everyone one needs to 
			understand this year</p>
			<img src={jeff} alt="Money rules" />

			<p>These rules applies to those who have money and even those who are looking to make more money than what they currently have.<br />
			Here are the 17 rules of money according to the successfull billionaire CEO of Amazon</p>

			<h3>1. Pay yourself first</h3>
			<h3>2. Learn how to invest</h3>
			<h3>3. Don’t be a hater of it</h3>
			<h3>4. Give every dollar a job</h3>
			<h3>5. Have plans and set goals</h3>
			<h3>6. Spend less than you earn</h3>
			<h3>7. Don’t be a slave to money</h3>
			<h3>8. If you have it , don’t flaunt it</h3>
			<h3>9. Keep your finances organized</h3>
			<h3>10. It is a game, learn how it works</h3>
			<h3>11. Always have an emergency fund</h3>
			<h3>12. Always make money work for you</h3>
			<h3>13. Know how to risk it and leverage it</h3>
			<h3>14. Know how to make money passively</h3>
			<h3>15. Use it to solve problems in the world</h3>
			<h3>16. Don’t use credit if you don’t have cash</h3>
			<h3>17. It is not what you make, it is what you keep</h3>		
		</div>
	);
}
export default Moneyrulesjeff;