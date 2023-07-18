import flirt from '../images/flirt.jpg'
import nosex from '../images/nosex.jpg'
import hate from '../images/hate.jpg'
import belittle from '../images/belittle.jpg' 
import Preloader from '../component/Preloader';
import Banner from '../Affiliate/Banner'

function Hatehusbands(){
	return(
		<div className='content'>
		<Preloader />
			<p>"I hate my husband!" your best friend cries — and you let out a 	long, heavy sigh because you know all too well how she feels.
			Sometimes, marriages can take a turn for the worse, and you find yourself hating your husband.</p>

			<h3>Why do I hate my husband?</h3>
			<img src={hate} alt="Why women start hating their husbands" />
			
			<p>Understanding why you feel resentment in your marriage is the first step to understanding the full spectrum of emotions you
			harbor and deciding where your relationship needs to go from here.</p>
			
			<p>After all, you didn't just wake up one day and suddenly decide you hated your partner. Relationships tend to fail apart over time,
			chipping away bit by bit. In the beginning, you may have ignored behaviors that have become more annoying as time has gone by.
			Maybe he's developed new ones that now leave you seething with contempt and rage. Or there could be several other factors at play
			that are causing you to feel hatred for the man you are supposed to love forever.</p>

			<h1>The Seven Common reasons why wives hate their husbands</h1>
			<h2>1. He nags.</h2>
			
			<p>"Honey, you need to pick up the dry cleaning."
			"Baby, you paid the bill already, right?"
			"Sugar, when are you going to finish cleaning the house?"</p>
			
			<p>When your husband nags you, it feels like all he notices are the things that he doesn't like instead of everything else that's 
			wonderful about you.</p>

			<h2>2. He belittles you.</h2>
			<img src={belittle} alt="belittle" />
			
			<p>Few things are worse than a man who puts you down.<br />
			This is one area where you need to proceed with caution, because a man who belittles you may be moving from merely putting you 
			down to being emotionally and physically abusive. Never stay with a man who becomes abusive. You deserve better than that.</p>

			<h2>3. He doesn't pay attention to you.</h2>
			<p>Why did he marry you in the first place?<br />
			Whether you've asked him to take out the garbage or he ignores you when you bring up serious problems that need to be discussed, 
			this guy is living in la-la land, hoping that if he ignores the problem, it will go away.</p>

			<h2>4. He cheated on you.</h2>
			<p>Let's face it, this one really stings.
			"I hate my husband," my sister sobbed, "He was supposed to be at a conference, and he was sleeping with another woman!"
			This can be one of the most complicated relationship issues to heal because your trust has not only been broken, but he's also
			 made it clear that he'd rather be with someone else instead of you.</p>

			<h2>5. You want to feel better about cheating on him.</h2>
			
			<p>Sometimes when a married woman is incredibly drawn to someone else, they subconsciously start to hate or resent their current 
			partner so that they can allow themselves to be attracted to this new person without guilt.</p>

			<p>Perhaps you are infatuated with a guy at work (and maybe this guy feels the same about you), and, as a result, you use feelings 
			of hatred toward your husband as justification for cheating on him.</p>

			<h2>6. He flirts with other women.</h2>
			<img src={flirt} alt="flirting with other women" />
			<p>Do you feel like you constantly need to flash his ring finger in other women's faces? <br />
				Though men may do this just to be playful or to build up their ego, some either don't realize how hurtful it is or do it 
				intentionally as a way to get back at you.
			</p>

			<h2>7. He refuses to have sex with you.</h2>
			<img src={nosex} alt="no sex" />
			
			<p>If you combine this with refusing to talk to you, you've got a relationship killer here. The most important thing to find 
				out here is why. Men will often stop having sex with their wives when they're trying to withdraw from a relationship, 
				but sometimes it's because of a physical or emotional problem.
			</p>
			<p>Has something changed recently? If so, try to be sensitive to that.</p>
			<section className="affiliate">
				<h3 className="theme">PROMOTED CONTENT</h3>
				<div className='banners'>
					<a href="https://www.digistore24.com/redir/491311/Eriasaph/">
						<Banner image={'https://www.digistore24-app.com/pb/img/merchant_2488117/image/product/KJLYTVI6'} text="What Women Really Like In A Man" />
					</a>
					<a href="https://www.digistore24.com/redir/493041/Eriasaph/">
						<Banner image={'https://www.digistore24-app.com/pb/img/merchant_2488117/image/product/QA435NFN'} text="The Happiness Hypothesis + Ebook" />
					</a>
					<a href="https://www.digistore24.com/redir/493050/Eriasaph/">
						<Banner image={'https://www.digistore24-app.com/pb/img/merchant_2488117/image/product/YY8BOO1W'} text="8 Rules of Love + Ebook" />
					</a>
					<a href="https://www.digistore24.com/redir/421832/Eriasaph/">
						<Banner image={'https://www.digistore24-app.com/pb/img/merchant_1380290/image/product/T9H9G4D5'} text="5 Rules For Stronger Erections" />
					</a>		
				</div>	
			</section>		
		</div>
	);
}
export default Hatehusbands;