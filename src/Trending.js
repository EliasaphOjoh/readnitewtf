import Post from './Post'
import Panol from './Panol'
import './style.css'
import { Link } from 'react-router-dom'

import stress from './images/17.jpg'
import words from './images/1.jfif'
import ageof30 from './images/ageof30.jpg'
import hug from './images/28.jpg'
import ff from './images/ff.jpg'
import swings from './images/6.jfif'
import manny3 from './images/manny3.jpg'
import gameMoney3 from './images/gameMoney3.png'

function Trending(){
	return (     
		<div className='stomach'>
		<Panol />
        <div className='posts'>
			<div className='posts-container'>
				<Link to='/Keepfalling' className='post-link'>
				<Post image={stress} text='5 Reasons why you keep falling in love with the wrong people' />
			</Link>
			<Link to='/Hatehusbands' className='post-link'>
				<Post image={words} text=' Reasons why most women start to hate their Husbands after some time in the marriage ' />
			</Link>
			<Link to='/Couplemistakes' className='post-link'>
				<Post image={ageof30} text='10 Big mistakes couples make at their age 30's />
			</Link>
			<Link to='/Developingfeelings' className='post-link'>
				<Post image={ff} text='If a woman starts developing feelings for you, she will ask you these 5 questions' />
			</Link>
			<Link to='/Beromantichusband' className='post-link'>
				<Post image={hug} text='how to be a very romantic husband' />
			</Link>
			<Link to='/Shescheating' className='post-link'>
				<Post image={swings} text='If you see these signs, know that she is cheating on you' />
			</Link>
			</div>
			<div className='posts-container'>
				<Link to='/Fungames' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1668877780029-9f75961fcf39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxheWluZyUyMGdhbWVzJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text="What are the most popular fun games" />
				</Link>
				<Link to='/Legitmoney' className='post-link'>
					<Post image={manny3} text="10 Legitimate Ways to Make Money Online" />
				</Link>
				<Link to='/Toearn' className='post-link'>
					<Post image={gameMoney3} text="How Gamers Can Earn Money in Real Life" />
				</Link>
				<Link to='/Abracadabra' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/flat-lay-arrangement-ginger-table_23-2148799554.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text='Abracadabra. The magic of ginger to our health' />
				</Link>
				<Link to='/Abstenanceresults' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/beautiful-dreamy-african-woman-sleepwear-with-closed-eyes-dreaming-thiking-sitting-bed_176420-12787.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='What happens if you avoid sex for a long time' />
				</Link>
				<Link to='/Thousanddollarskill' className='post-link'>
					<Post image={'https://media.istockphoto.com/id/1370794249/photo/new-house.webp?b=1&s=170667a&w=0&k=20&c=6a5BpOEWpD8voHSHCwiK-S0M-JUf-aBmzb88cRx8L8Q='} text="MASTER THIS SKILL AND EARN $1000 PER MONTH: MAKE USE OF YOUR FINANCIAL POTENTIAL!" />
				</Link>
			</div>
      </div>
      </div>
	)
}
export default Trending;


