import '../style.css'
import img14 from '../images/14.jpg';
import Preloader from '../component/Preloader';

function Avoidgoingbroke(){
	return(
		<>
		<Preloader />
		<div className='content'>
			<h1>How to avoid becoming broke before your next salary</h1>
			<p>For alot of people, every month you get paid, you feel like a boss and somehow end up broke way before your next salary</p>
			<img src={img14} alt="avoid going broke" />
			<p>Luckily for you, FinanceAdvisor is here to ensure this doesn’t happen again. Here’s what you need to do;</p>
			
			<h2>1. Figure Out What You Spend Your Money On</h2>
			<p>Make a list of your monthly expenses, start with your basic needs like transport, food, bills (electricity,Water etc). Figure out exactly how much you need for your expenses and what’s left of your salary.</p>
			
			<h2>2. Make A Budget</h2>
			<p>Once you Know what you need money for, the next thing is to make a budget for the month. This budget should cover all your basic needs.</p>

			<h2>3. Divide Your Money</h2>
			<p>After sorting your budget, the next thing you should do is to separate your cash. Put the money that you need for your budget with a little Jara for fun stuff in one account and the remaining should go into your savings or emergency fund account.</p>

			<h2>4. Stop Carrying Your ATM Card Around</h2>
			<p>In order to stick to your budget, avoid carrying your ATM card around. Leave it at home and only take the exact amount of money you need when you go out. You can have a little extra for emergencies but don’t take your card with you.</p>

			<h2>5. Be Self disciplined</h2>
			<p>None of this can be achieved without discipline. It’s exactly what you need if you don’t want to go broke before your next salary.</p>
		</div>
		</>
	);
}
export default Avoidgoingbroke;