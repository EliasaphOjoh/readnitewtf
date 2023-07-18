import Post from './Post';
import './style.css'
import { Link } from 'react-router-dom'

import stress from './images/17.jpg'
import words from './images/1.jfif'
import ageof30 from './images/ageof30.jpg'
import hug from './images/28.jpg'
import ff from './images/ff.jpg'
import swings from './images/6.jfif'
import wed from './images/12.jpg'
import nope from './images/26.jpg'
import tell from './images/tell.jpg'
import rude from './images/rude.jpg'
import queen from './images/queen.jpg'
import listen from './images/4.jfif'
import women from './images/women.jpg'
import carry from './images/15.jpg'
import fear from './images/fear.jpg'
import stars from './images/43.jpg'
import nipples from './images/44.jpg'
import eye from './images/18.jpg'
import similar from './images/similar.jpg'
import hindhug from './images/31.jpg'
import capsule from './images/35.jpg'
import ex from './images/ex.jpg'

function Relationships(){
	return(
		<div className='stomach'>
		<h1 className='theme'>Relationships</h1>
        <div className='posts'>
			<div className='posts-container'>	
					<Link to='/Keepfalling' className='post-link'>
						<Post image={stress} text='5 Reasons why you keep falling in love with the wrong people' />
					</Link>

					<Link to='/Hatehusbands' className='post-link'>
						<Post image={words} text='Reasons why most women start hating their Husbands after some time in marriage ' />
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
					<Link to='/Hasnotmarriedyou' className='post-link'>
						<Post image={wed} text='Ladies if that man has not married you, don’t ever do these 5 things for him' />
					</Link>
			
					<Link to='/Notmarry' className='post-link'>
						<Post image={nope} text='Strong Reasons why you should not marry these women' />
					</Link>
			
					<Link to='/Sexistthings' className='post-link'>
						<Post image={tell} text='Sexist things you should never say to a woman' />
					</Link>
				
					<Link to='/Toxicgirlfriend' className='post-link'>
						<Post image={rude} text='Signs of a toxic girlfriend' />
					</Link>
				
					<Link to='/Simplesmartways' className='post-link'>
						<Post image={queen} text='Smart ways to make your boyfriend realize how special you are to him' />
					</Link>
			
					<Link to='/Womansnipples' className='post-link'>
						<Post image={nipples} text="Things you should know about a woman's nipples" />
					</Link>
			</div>
			
			<div className='posts-container'>
					<Link to='/' className='post-link'>
						<Post image={women} text='Things men should know about women' />
					</Link>
			
					<Link to='/Womenfear' className='post-link'>
						<Post image={fear} text='Things women fear about men' />
					</Link>

					<Link to='/Everygirlneedstohear' className='post-link'>
						<Post image={tell} text='The one thing every girl needs to hear' />
					</Link>
			
					<Link to='/Neverhappen' className='post-link'>
						<Post image={carry} text='Things that will never happen if you truly love the person you are with' />
					</Link>
			
					<Link to='/Womennotice' className='post-link'>
						<Post image={stars} text='Things women notice when choosing the guy they are going to marry' />
					</Link>
			</div>

			<div className='posts-container'>
					<Link to='/Fallslowly' className='post-link'>
						<Post image={similar} text='Ways to fall in love slowly' />
					</Link>
			
					<Link to='/Drugsforsex' className='post-link'>
						<Post image={capsule} text='Which are the best drugs for sex' />
					</Link>
			
					<Link to='/Dealwithtoxicgirlfriend' className='post-link'>
						<Post image={rude} text='Ways to deal with your toxic girlfriend' />
					</Link>
			
					<Link to='/Eyecontact' className='post-link'>
						<Post image={eye} text='Types of eye contact women use every man should understand' />
					</Link>
				
					<Link to='/Touchwell' className='post-link'>
						<Post image={hindhug} text='Ways to touch a woman well' />
					</Link>
			
					<Link to='/Dontrush' className='post-link'>
						<Post image={ex} text="Why you shouldn't rush to block your ex" />
					</Link>
			</div>

				<div className='posts-container'>
					<Link to='/Breakupwithmen' className='post-link'>
						<Post image={listen} text='The 11 real reasons women break up with their men' />
					</Link>
					<Link to='/Aboutlove' className='post-link'>
						<Post image={'https://img.freepik.com/free-photo/charming-joyful-caring-young-african-american-family-man-woman-siblings-smiling-broadly-show-heart-gestures-grinning-express-love-empathy-positivity-two-loyal-friends-cherish-friendship_1258-81676.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="5 things you should know about love" />
					</Link>
					<Link to='/Attractgoodmen' className='post-link'>
						<Post image={'https://img.freepik.com/free-photo/close-up-couple-blanket_23-2148866990.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="How to attract good men naturally. No forcing" />
					</Link>
					<Link to='/Abstenanceresults' className='post-link'>
						<Post image={'https://img.freepik.com/free-photo/young-brunette-woman-lying-bed_273609-21474.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="This is what happens to your body when you stay long withouth having sex " />
					</Link>
					<Link to='/Attractivesingle' className='post-link'>
						<Post image={'https://img.freepik.com/free-photo/pensive-man-sitting-bench-reading-newspaper-outdoors_171337-14806.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="Reasons why attractive people tend to be single" />
					</Link>
					<Link to='/Attractwomen' className='post-link'>
						<Post image={'https://img.freepik.com/free-photo/content-people-communicating-with-phones-hands_23-2147664307.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="These are the things that attract women to men" />
					</Link>
				</div>

				<div className="posts-container">
					<Link to='/Beautifulcomplements' className='post-link'>
						<Post image={'https://img.freepik.com/free-photo/beautiful-valentine-s-day-concept-with-copy-space_23-2148804145.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="30 beautiful compliments he wants to hear from you" />
					</Link>
					<Link to='/Beautifulwomen' className='post-link'>
						<Post image={'https://img.freepik.com/premium-photo/happy-couple-laughing-together-bed_13339-215819.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="How to attract beautiful women naturally I to your life" />
					</Link>
					<Link to='/Bitesherlip' className='post-link'>
						<Post image={'https://img.freepik.com/free-photo/bright-fashion-golden-red-make-up-human-lips_186202-680.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="What it means when a woman bites her lips" />
					</Link>
					<Link to='/Completelyinlove' className='post-link'>
						<Post image={'https://img.freepik.com/free-photo/portrait-interracial-couple-bed_23-2148139263.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="10 things people do when they are completely in love with you" />
					</Link>
					<Link to='/Harshwomentruths' className='post-link'>
						<Post image={'https://img.freepik.com/free-photo/black-girl-whispering-secret-smiling-girlfriend_1262-3456.jpg?size=626&ext=jpg&ga=GA1.2.847719650.1681202299&semt=ais'} text="Unveiling Harsh Truths About Women That Men Often Discover Late" />
					</Link>
					<Link to='/Itchingvagina' className='post-link'>
						<Post image={'https://img.freepik.com/free-photo/dissatisfied-girl-keeps-hands-crotch-presses-lower-abdomen-needs-toilet-badly-has-syndrome-cystitis_273609-25635.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="6 possible reasons why your vagina itches. Medical advice" />
					</Link>
				</div>

					<div className="posts-container">
						<Link to='/Kisswell' className='post-link'>
							<Post image={'https://img.freepik.com/premium-vector/kiss-sketch-illustration-hand-drawn-black-red-white-doodle_73950-118.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="How to kiss so well that they will never forget you" />
						</Link>
						<Link to='/Loseconsciousness' className='post-link'>
							<Post image={'https://img.freepik.com/free-photo/side-view-depressed-black-woman_23-2149699126.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="Reasons why some women lose consciousness during sex!" />
						</Link>
						<Link to='/Lovequotes' className='post-link'>
							<Post image={'https://img.freepik.com/premium-vector/birds-branch-icon_602006-3159.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="20 Love Quotes to Express Your Deepest Emotions" />
						</Link>
						<Link to='/Mandoesntlikeyou' className='post-link'>
							<Post image={'https://img.freepik.com/premium-photo/i-dont-even-care-anymore-shot-young-couple-ignoring-each-other-after-having-argument-sofa-home_590464-12528.jpg?w=740'} text="How to know if a man doesn't really love you" />
						</Link>
						<Link to='/Maturitytests' className='post-link'>
							<Post image={'data:image/jpeg;base64,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'} text="4 tests women use to determine if you are a mature man." />
						</Link>
						<Link to='/Meltherheart' className='post-link'>
							<Post image={'https://img.freepik.com/free-vector/love-like-movie_23-2147518014.jpg?size=626&ext=jpg&ga=GA1.2.847719650.1681202299&semt=ais'} text="Melt your girlfriends heart and make her cry with these sweet things" />
						</Link>
					</div>

						<div className="posts-container">
				<Link to='/Menshdneverdo' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/romantic-black-couple-sitting-restaurant-wearing-elegant-clothes_1157-52033.jpg?size=626&ext=jpg&ga=GA1.2.847719650.1681202299&semt=ais'} text="5 Things a man should never do for a woman no matter how much he loves her" />
				</Link>
				<Link to='/Missingstrategies' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/wife-husband-having-some-quality-time_23-2148960234.jpg?w=740&t=st=1687854392~exp=1687854992~hmac=c238ce87f15861719992fab16c0c2391e2ec7c63e79f9d56bf2d429b4c742416'} text="8 proven Psychological strategies to make someone miss you." />
				</Link>
				<Link to='/Questionsbeforeproposing' className='post-link'>
					<Post image={'https://img.freepik.com/free-vector/wedding-love-concept_23-2147924925.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="15 questions you must ask your girlfriend before proposing" />
				</Link>
				<Link to='/Playergirl' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/young-african-couple-standing-back-back-holding-mobile-phones_273609-13131.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="How to know if a girl is a player" />
				</Link>
				<Link to='/Ruinrelationships' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/young-man-woman-having-conversation_273609-15760.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="Behaviors that ruin relationships according to phycologists" />
				</Link>
				<Link to='/Sexmistakeswomen' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/side-view-depressed-black-woman_23-2149699126.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'}text="Avoiding Common Mistakes That Can Turn Men Off in the Bedroom" />
				</Link>
			</div>

						<div className="posts-container">
				<Link to='/Shescheating' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/couple-having-argument_53876-146090.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="Signs she's cheating on you" />
				</Link>
				<Link to='/Sweetnames' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/teenager-carrying-young-girl-outdoors_23-2148505494.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="Sweet names to call your girlfriend" />
				</Link>
				<Link to='/Textingmistakes' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/young-asian-woman-reading-offensive-comments-mobile-phone-pointing-looking-frustrated-came_1258-167762.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="7 common mistakes men make when texting women and how you can avoid them" />
				</Link>
				<Link to='/Thingsaboutmoney' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/500px-photo-id-1025453573-lot-stacking-gold-coins-treasure-stack-gold-bar-1kg-white-background_185126-572.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="10 Key Financial Insights to Master by Age 25" />
				</Link>
			</div>
		</div>
		</div>
	)
}
export default Relationships;