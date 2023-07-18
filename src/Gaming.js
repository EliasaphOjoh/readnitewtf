import Post from './Post';
import './style.css'
import { Link } from 'react-router-dom'

import fon from './images/39.jpg'
import gameMoney2 from './images/gameMoney2.png'
import gamers from './images/gamers.png'
import gameMoney3 from './images/gameMoney3.png'
import salogo from './images/salogo.png'
import chits from './images/chits.jfif'
import manny3 from './images/manny3.jpg'

function Gaming() {
	return(
		<div className='stomach'>
		<h1 className='theme'>Gaming</h1>
        <div className='posts'>
			<div className='posts-container'>
				<Link to='/Downloadandroidgames' className='post-link'>
					<Post image={fon} text='How to download games on android' />
				</Link>
				<Link to='/Gamers' className='post-link'>
					<Post image={gamers} text="Who are gamers: A full understanding" />
				</Link>
				<Link to='/Howtheyearn' className='post-link'>
					<Post image={gameMoney2} text="The ways gamers earn money - Woking and proven " />
				</Link>
				<Link to='/Lcingta3' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1641215728345-385941727e25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd0YSUyMHNhbiUyMGFuZHJlYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60'} text="Is Liberty City in GTA 5" />
				</Link>
				<Link to='/Legitmoney' className='post-link'>
					<Post image={manny3} text="10 Legitimate Ways to Make Money Online" />
				</Link>
			</div>
			<div className="posts-container">
				<Link to='/Libertycitybased' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1504912490605-888b88cd7b94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3RhJTIwc2FuJTIwYW5kcmVhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text="Which city is liberty city game based on" />
				</Link>
				<Link to='/Offlineandroid' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1626240130051-68871c71de47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlpbmclMjBnYW1lcyUyMHdpdGglMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text="Best offline android games 2023" />
				</Link>
				<Link to='/Offlinepc' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1640955014216-75201056c829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheWluZyUyMGdhbWVzJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text="Best offline PC games 2023" />
				</Link>
				<Link to='/Onlineandroid' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1626240130051-68871c71de47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlpbmclMjBnYW1lcyUyMHdpdGglMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'} text="Best online android games 2023" />
				</Link>
				<Link to='/Racinggames' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1535949134169-aa64c1a54f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFjaW5nJTIwZ2FtZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60'} text="Are racing games really fun?" />
				</Link>
				<Link to='/Sacheats' className='post-link'>
					<Post image={chits} text="What are Gta San Andreas cheats" />
				</Link>
			</div>
			<div className="posts-container">
				<Link to='/Racinggames' className='post-link'>
					<Post image={'https://images.unsplash.com/photo-1535949134169-aa64c1a54f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFjaW5nJTIwZ2FtZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60'} text="Are racing games really fun?" />
				</Link>
				<Link to='/Sacheats' className='post-link'>
					<Post image={salogo} text="What are Gta San Andreas cheats" />
				</Link>
				<Link to='/Toearn' className='post-link'>
					<Post image={gameMoney3} text="How Gamers Can Earn Money in Real Life" />
				</Link>
			</div>
		</div>
      </div>

		)
}
export default Gaming;