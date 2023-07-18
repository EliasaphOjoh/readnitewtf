import '../style.css'
import block from '../images/block.jpg'
import pissed from '../images/pissed.jpg'
import Preloader from '../component/Preloader';

function Dontrush(){
	return(
		<div className='content'>
		<Preloader />
			<h1>5 Reasons You Shouldn’t Rush To Block Your Ex After Breaking Up</h1>
			<p>When a relationship ends, you often don’t need to be told to block the ex-partner. In the heat of the moment, as you struggle get used to such a terrible situation, you might panic and just blocking them.</p>
			<img src={block} alt="Dont rush to block an ex" />
			<p>But here’s why you should not rush to block them and how to use that to your best advantage.</p>

			<h2>1. You retain your dignity</h2>
			<p>When you’re hurt, your first reaction is to put distance between yourself and the source of the pain. However, when it comes to human social structures, especially if your ex is not mature or the relationship has been bad, it becomes a show of who hurts more.It’s all about the ego coming out on top. When you block them, in most cases it will fuel their ego.
			Most importantly, it victimises you. While you are rightfully hurting, you are not a victim. If your ex is mature and you have a great degree of trust between you, you can talk to them about how the break-up is affecting you.</p>
	
			<h2>2. You might get closure</h2>
			<p>There’s no shame in keeping up with what they are doing going by their social media. Seeing how they are dealing with the break-up might give you some modicum of closure.
			Be careful to not read into cryptic statuses or pictures, take everything at face value.
			Remember that it is their way of either dealing with the breakup or moving on.
			This way, you are not working in the dark to get over them while wondering and fantasising about what he/she might be up to.</p>

			<h2>3. Regulate obsession</h2>
			<p>Secret stalking, asking friends what your ex is up to, incognito checks and fantasising about what your first encounter as exes will be like. These are some of the obsessions that can destroy the urge to try to immediately cut ties.
			Allow yourself to obsess a bit in secret.</p>

			<h2>4. Gives you time to process and heal</h2>
			<p>You can use their social media activity to track your healing and check your emotional well-being. It can also help you understand why the relationship ended, and what you liked and disliked about them as you see them from a new perspective.
			It can also slow you down from getting into a new relationship too fast.
			Plus, if they contact you, you might be in a better state to engage with them or not respond.</p>

			<h2>5. Reduces the mental and emotional stressing</h2>
			<img src={pissed} alt="Dont rush to block an ex" />
			<p>We all know the breakup and get back together cycle. It also happens over social media in the form of blocking someone and unblocking them intermittently.
			If it is hard to cut ties immediately, once you fall into the unblocking cycle, it can make you feel worse. You might feel like you are unable to move on or they still have a hold over you.
			Skip that phase by simply leaving them where they are.
			If there’s a chance of patching things up, the unblocking and blocking cycle might make you come off as unstable and too affected for any mending.</p>		
		</div>
	);
}
export default Dontrush;