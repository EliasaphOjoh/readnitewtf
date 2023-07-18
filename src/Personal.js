import Post from './Post';
import './style.css'
import { Link } from 'react-router-dom'

import thots from './images/45.jpg'
import tell from './images/tell.jpg'
import confide from './images/confide.jpg'

function Personal() {
	return(
		<div className='stomach'>
		<h1 className='theme'>Lifestyle & Self Improvement</h1>
        <div className='posts'>
			<div className='posts-container'>
				<Link to='/Behonest' className='post-link'>
					<Post image={thots} text='How to be honest with yourself' />
				</Link>
				<Link to='/Secretsnottotell' className='post-link'>
					<Post image={tell} text='Secrets you should never tell about yourself' />
				</Link>
				<Link to='/' className='post-link'>
					<Post image={confide} text='The only working confidence hack.html' />
				</Link>
				<Link to='/Avoidgoingbroke' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/businessman-saving-money_1150-5973.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="How to avoid becoming broke before your next salary" />
				</Link>
				<Link to='/Believeinyourself' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/outdoor-shot-active-dark-skinned-man-running-morning-has-regular-trainings-dressed-tracksuit-comfortable-sneakers-concentrated-into-distance-sees-finish-far-away_273609-29401.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="9 tips on how to believe in yourself" />
				</Link>
				<Link to='/Buildmuscle' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/young-muscular-guy-posing-grey-background_613910-16958.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="How to Build Muscle Without Lifting Heavy: Science-Based Hacks" />
				</Link>
			</div>
						<div className="posts-container">
				<Link to='/Camerashy' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/cute-shy-girl-peeping-you-through-fingers-attractive-young-european-woman-striped-t-shirt-posing-closed-pose-holding-hand-her-face-looking-shyly-with-charming-smile_343059-3241.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="Camera shy, make money on YouTube without showing your face. Others are doing these 5 things" />
				</Link>
				<Link to='/Commandments' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0JTIwbWFuJTIwaW4lMjBzdWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'} text="Men read these 10 commandments to avoid a life of pain" />
				</Link>
				<Link to='/Completelyinlove' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/portrait-interracial-couple-bed_23-2148139263.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="10 things people do when they are completely in love with you" />
				</Link>
				<Link to='/Confidentpeople' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/african-american-business-man_1303-5143.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="Learn how confident people behave today" />
				</Link>
				<Link to='/Dontrush' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/nervous-man-arguing-during-phone-call_329181-19923.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="5 Reasons You Shouldn’t Rush To Block Your Ex After Breaking Up" />
				</Link>
				<Link to='/Drinkwater' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/drinking-water-black-woman-glass-health-brown-background-skincare-diet-aesthetic-model-person-smile-clean-sustainable-liquid-healthy-lifestyle-wellness-studio_590464-159255.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="Drink water on an empty stomach for thiese health and medical benefits" />
				</Link>
			</div>

						<div className="posts-container">
				<Link to='/Entrepreneurquotes' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW50cmVwcmVudWVyJTIwZ2l2aW5nJTIwYSUyMHNwZWVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text="10 inspiring quotes from the richest entrepreneurs" />
				</Link>
				<Link to='/Millionairesteps' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/millionaire-man-resting-relaxing-while-sitting-sofa-luxury-room-handsome-man-smoking-cigar-iqos_496169-1418.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="The Millionaire Mindset: 7 Proven Steps to Building Wealth" />
				</Link>
				<Link to='/Singleincome' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpdHRsZSUyMG1vbmV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'} text="5 dangers of depending on a single source of income" />
				</Link>
				<Link to='/Yourself' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/two-smiling-businessmen-standing-near-window-having-conversation-office_23-2147899772.jpg?size=626&ext=jpg&ga=GA1.2.847719650.1681202299&semt=sph'} text="4 good answers to give when asked about yourself" />
				</Link>
				<Link to='/Yellowish' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/happy-girl-with-adorable-hair-smiling_23-2149352392.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="Yellowish teeth? Make them white with these quick easy DIYs. - Dental hacks" />
				</Link>
			</div>
		</div>
      </div>
		)
}
export default Personal;