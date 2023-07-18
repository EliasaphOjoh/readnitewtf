import React from 'react'
import Post from './Post';
import './style.css'
import { Link } from 'react-router-dom'

import manny3 from './images/manny3.jpg'
import manny2 from './images/manny2.jpg'
import jeff from './images/jeff.jpg'
import manny4 from './images/manny4.jpg'
import empty from './images/14.jpg'
import gameMoney from './images/gameMoney.png'

function Finance(){
	return(
		<div className='stomach'>
		<h1 className='theme'>Personal Finance and Money Management</h1>
        <div className='posts'>
			<div className='posts-container'>
			<Link to='/Skillsthatwillpay' className='post-link'>
				<Post image={manny3} text='15 Skills that will pay you for ever' />
			</Link>
			<Link to='/Moneyrules' className='post-link'>
				<Post image={jeff} text='10 Money rules according to Jeff Bezos' />
			</Link>
			<Link to='/Buisnessideastotry' className='post-link'>
				<Post image={'https://img.freepik.com/premium-photo/businessman-protection-money-table-with-tree_34152-1752.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='The Best buisness ideas to try out as a starter' />
			</Link>
			<Link to='/First4moves' className='post-link'>
				<Post image={'https://img.freepik.com/free-photo/unrecognizable-black-lady-sitting-desk-office-night-writing-journal_1098-17559.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='First 4 moves when starting a buisness' />
			</Link>
			<Link to='/Avoidgoingbroke' className='post-link'>
				<Post image={manny4} text='How to avoid going broke before your next salary' />
			</Link>
			<Link to='/Moneymakingskills' className='post-link'>
				<Post image={'https://img.freepik.com/free-photo/man-wooden-cubes-table-management-concept_155003-10330.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text='Top money making skills you should consider acquiring in 2023' />
			</Link>
			</div>
			<div className='posts-container'>
				<Link to='/Unsexyhabbits' className='post-link'>
				<Post image={manny2} text='Unsexy habits that will eventually make you rich' />
			</Link>
			<Link to='/Stillbroke' className='post-link'>
				<Post image={empty} text='Why you are still broke' />
			</Link>
			<Link to='/Timewasters' className='post-link'>
				<Post image={'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FzdGVkJTIwdGltZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text="The things that a waste of your time" />
			</Link>
			<Link to='/Toearn' className='post-link'>
				<Post image={gameMoney} text="How Gamers Can Earn Money in Real Life" />
			</Link>
			<Link to='/Ultimatewealth' className='post-link'>
				<Post image={'https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147837753.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="YouTube. The ultimate source of wealth" />
			</Link>
			<Link to='/Thousanddollarskill' className='post-link'>
					<Post image={'https://media.istockphoto.com/id/1370794249/photo/new-house.webp?b=1&s=170667a&w=0&k=20&c=6a5BpOEWpD8voHSHCwiK-S0M-JUf-aBmzb88cRx8L8Q='} text="MASTER THIS SKILL AND EARN $1000 PER MONTH: MAKE USE OF YOUR FINANCIAL POTENTIAL!" />
				</Link>
			</div>

			<div className="posts-container">
				<Link to='/Aboutmoney' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/pensive-man-with-small-shopping-cart_1187-2471.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="What you haven't been knowing about money" />
				</Link>
				<Link to='/Bugattisecrets' className='post-link'>
					<Post image={'https://c4.wallpaperflare.com/wallpaper/462/44/945/bugatti-veyron-car-hdr-los-angeles-wallpaper-thumb.jpg'} text='Behind the Wheel: Secrets Bugatti Drivers Keep Quiet About' />
				</Link>
				<Link to='/Buisnessqns' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/thoughtful-manager-working-office-late-night_74855-4081.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='5 questions to ask yourself before starting a buisness' />
				</Link>
				<Link to='/Commandments' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0JTIwbWFuJTIwaW4lMjBzdWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'} text='Men read these 10 commandments to avoid a life of pain' />
				</Link>
				<Link to='/Entrepreneurquotes' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW50cmVwcmVudWVyJTIwZ2l2aW5nJTIwYSUyMHNwZWVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text="10 Inspiring Quotes from the World's Richest Entrepreneurs" />
				</Link>
				<Link to='/Flightattendantrules' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/cabin-crew-dancing-with-joy-airplane_31965-9226.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='10 unspoken rules flight attendants have to follow' />
				</Link>
			</div>
			<div className="posts-container">
				<Link to='/Howtheyearn' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'} text='How Gamers Earn Money Doing What They Love' />
				</Link>
				<Link to='/Landroverprices' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1633951884830-ce961df4287c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZCUyMHJvdmVyJTIwZGVmZW5kZXIlMjAxMTB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60'} text='Why the land rover defender 110 prices have sky rocketed recently' />
				</Link>
				<Link to='/Legitmoney' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/close-up-dollar-bills-laptop-money-making-concept_169016-26609.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='10 legitimate ways to make money online currently.' />
				</Link>
				<Link to='/Makemoneyfast' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/raining-money-noon_1134-39.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='7 lucrative ways to make money fast' />
				</Link>
				<Link to='/Millionairesteps' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/millionaire-man-resting-relaxing-while-sitting-sofa-luxury-room-handsome-man-smoking-cigar-iqos_496169-1418.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text='How to become a millionaire in 7 proven working steps' />
				</Link>
				<Link to='/Personalfinancerules' className='post-link'>
				<Post image={manny4} text='Simple rules of personal finance' />
			</Link>
			</div>

			<div className="posts-container">
				<Link to='/Moneymoves' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/man-relaxing-near-water-side-view_23-2148232271.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="9 money moves to make in your 20s and 30s to secure your future" />
				</Link>
				<Link to='/Neverloseon' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/young-plant-growing-stack-money-coins-saving-investment-concept-with-generative-ai_106651-6665.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="7 investments you will never lose on" />
				</Link>
				<Link to='/Profitablebuisnes' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/mother-spending-time-with-her-beloved-child_23-2149505243.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="7 profitable business ideas for stay home mothers" />
				</Link>
				<Link to='/Retirecomfortably' className='post-link'>
					<Post image={'https://img.freepik.com/free-vector/hand-drawn-happy-retirement-lettering_23-2148925574.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="10 things to do in your 20s so you can retire comfortably at 40" />
				</Link>
				<Link to='/Simplesmartways' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/young-stylish-dark-skinned-couple-sitting-sunny-city-use-phone_1157-14193.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="Smart ways to make your boyfriend realize how special you are to him" />
				</Link>
				<Link to='/Singleincome' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpdHRsZSUyMG1vbmV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'} text="5 dangers of depending on a single source of income" />
				</Link>
			</div>

			<div className="posts-container">
				<Link to='/Stopbeinglazy' className='post-link'>
					<Post image={'https://plus.unsplash.com/premium_photo-1683133971229-d18be2dbc5aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhenklMjBpbiUyMGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text="How to stop being lazy" />
				</Link>
				<Link to='/Successrules' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1481608726045-7407244fb7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0JTIwbWFuJTIwaW4lMjBzdWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'} text="99% of successful persons have followed these 8 rules" />
				</Link>
				<Link to='/Thingsaboutmoney' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'} text="10 things you should understand about money by the age of 25" />
				</Link>
				<Link to='/Thingstohave' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1682267825186-da88784ec9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwc2VhdGluZyUyMG9uJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'} text="16 things every man should have by the age 40" />
				</Link>
			</div>
		</div>
      </div>
	)
}
export default Finance;