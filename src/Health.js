import Post from './Post';
import './style.css'
import { Link } from 'react-router-dom'

import brush from './images/brush.jpg'
import onyons from './images/onyons.jpg' 
import drive from './images/34.jpg'
import doctor from './images/doctor.jpg'
import smoking from './images/smoking.jpg'
import pain from './images/pain.jpg'
import capsule from './images/35.jpg'

function Health() {
	return(
		<div className='stomach'>
		<h1 className='theme'>Health</h1>
        <div className='posts'>
        	<div className="posts-container">
				<Link to='/Abracadabra' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/flat-lay-arrangement-ginger-table_23-2148799554.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text='Abracadabra. The magic of ginger to our health' />
				</Link>
				<Link to='/Abstenanceresults' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/beautiful-dreamy-african-woman-sleepwear-with-closed-eyes-dreaming-thiking-sitting-bed_176420-12787.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='What happens if you avoid sex for a long time' />
				</Link>
				<Link to='/Backpaincauses' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/close-up-man-rubbing-his-painful-back-isolated-white-background_1150-2935.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='3 Things you did not know were causing you back pain and joint problems' />
				</Link>
				<Link to='/Bloodpressure' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117859.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='15 effective tricks to lower blood pressure instantly' />
				</Link>
				<Link to='/Brainexercises' className='post-link'>
					<Post image={'https://img.freepik.com/free-vector/brain-with-strong-arms-vector_1308-129348.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='10 Easy Brain Exercises to Improve Your Memory' />
				</Link>
				<Link to='/Buildmuscle' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/portrait-tall-stylish-shirtless-bodybuilder-dressed-jeans-prepares-protein-mixture-before-morning-exercise-standing-kitchen-with-loft-interior-looking-out-window_613910-20560.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='How to Build Muscle Without Lifting Heavy: Science-Based Hacks' />
				</Link>
			</div>
			<div className='posts-container'>
				<Link to='/Brushingteeth' className='post-link'>
				<Post image={brush} text='5 Tips to brush your teeth the right way' />
			</Link>
			<Link to='/Sleepingwithonion' className='post-link'>
				<Post image={onyons} text='Benefits of sleeping with an onion under your feet' />
			</Link>
			<Link to='/Canyouswitchgears' className='post-link'>
				<Post image={drive} text='Can you switch gears whilst driving automatic car' />
			</Link>
			<Link to='/Patientlies' className='post-link'>
				<Post image={doctor} text='Lies patients commonly tell doctors' />
			</Link>
			<Link to='/Womenaddictions' className='post-link'>
				<Post image={smoking} text='Most common addictions in women' />
			</Link>
			<Link to='/Painfulsex' className='post-link'>
				<Post image={pain} text='Reasons why sex might be painful' />
			</Link>
			</div>
			<div className="posts-container">
				<Link to='/Drugsforsex' className='post-link'>
					<Post image={capsule} text='Which are the best drugs for sex' />
				</Link>
				<Link to='/Cancersigns' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/female-patients-talking-hospital_23-2148981277.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Here are 12 early signs of cancer you could be ignoring' />
				</Link>
				<Link to='/Cervicalcancersigns' className='post-link'>
					<Post image={'https://img.freepik.com/free-vector/cervical-cancer-infographic-with-explanation_1308-128673.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='5 early signs of cervical cancer you should pay attention to' />
				</Link>
				<Link to='/Damageeyesight' className='post-link'>
					<Post image={'https://img.freepik.com/free-vector/man-woman-eyes-eyebrows-set_1284-52244.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text='6 Things that damage your eyesight that you should stop doing now' />
				</Link>
				<Link to='/Drinkwater' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/drinking-water-black-woman-glass-health-brown-background-skincare-diet-aesthetic-model-person-smile-clean-sustainable-liquid-healthy-lifestyle-wellness-studio_590464-159255.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Drink water on an empty stomach for thiese health and medical benefits' />
				</Link>
				<Link to='/Erectilefruits' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/portrait-man-posing-with-broccoli_23-2149384043.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Fruits every man should eat regularly to keep his penis and genitals healthy' />
				</Link>
			</div>
			<div className="posts-container">
				<Link to='/Erectileremedies' className='post-link'>
					<Post image={'https://media.istockphoto.com/id/1097708016/photo/a-young-attractive-man-feels-pain-in-his-groin-arms-folded-between-his-legs-experiencing-pain.jpg?s=612x612&w=0&k=20&c=IAEssRwV7RQsXHYyagBtDSHY0WY06uy94Q9a2Z1-_L0='} text="Natural Herbal Remedies for Erectile Dysfunction: Enhancing Men's Health Naturally" />
				</Link>
				<Link to='/Exercises' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/young-woman-training-gym_23-2147915516.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text="5 Exercises for a Solid, Thick, and Full Round Chest" />
				</Link>
				<Link to='/Fallasleep' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/young-brunette-woman-lying-bed_273609-22002.jpg?w=740&t=st=1687824133~exp=1687824733~hmac=2b645a534bf0fd975bb0bae1a3de801bcbe4d6ede730df466d238cdd5733394d'} text='3 of the best working ways to fall asleep in 10 mins or less. One is a military method' />
				</Link>
				<Link to='/Harmingbrain' className='post-link'>
					<Post image={'https://img.freepik.com/premium-vector/cartoon-brain-with-head-explosion-strong-stress-information-overload-isolated-cartoon-character-vector-brainy-emoticon-with-detonating-head-nuclear-burst-charged-by-creative-ideas-brainstorm_8071-8805.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='4 common habits to stay away from to avoid harming your brain' />
				</Link>
				<Link to='/Increaselibido' className='post-link'>
					<Post image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmtKLilXTb2Ad07kzQHiFK70scEtUtZr0hg&usqp=CAU'} text='6 ways to increase your libido' />
				</Link>
				<Link to='/Itchingvagina' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/dissatisfied-girl-keeps-hands-crotch-presses-lower-abdomen-needs-toilet-badly-has-syndrome-cystitis_273609-25635.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='6 possible reasons why your vagina itches. Medical advice' />
				</Link>
			</div>

			<div className="posts-container">
				<Link to='/Killstress' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/worried-man-sitting-bench_1150-339.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Kill Stress Immediately with These 5 Simple Habits' />
				</Link>
				<Link to='/Lastinglonger' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/shirtless-sexy-muscular-male-model-lying-alone-his-bed-his-bedroom-looking-away_613910-11194.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Unveiling the Secrets of Love: How to Last Longer During Intimacy' />
				</Link>
				<Link to='/Lastlongerfoods' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text='Foods to eat in order to  last much longer in bed. Your Ultimate remedey' />
				</Link>
				<Link to='/Loseconsciousness' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/side-view-depressed-black-woman_23-2149699126.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Reasons why some women lose consciousness during sex!' />
				</Link>
				<Link to='/Mosquitoplants' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/beautiful-african-woman-smiling-holding-flower-pot-hands-white-wall_176420-12380.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Plants that repel mosquitoes and keep them away' />
				</Link>
				<Link to='/Mythicalmarijuana' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/organic-cannabis-product-composition_23-2148977715.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text='Marijuanas medical benefits that might be mythical' />
				</Link>
			</div>
			<div className="posts-container">
				<Link to='/Naturalpainkillers' className='post-link'>
					<Post image={'https://img.freepik.com/premium-photo/delicious-breakfast-served-two-hotel-white-background_75916-154.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Foods that are natural pain killers' />
				</Link>
				<Link to='/Sexmistakeswomen' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/side-view-depressed-black-woman_23-2149699126.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Common mistakes women make during sex that turn men off' />
				</Link>
				<Link to='/Signsofcancer' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/patient-getting-chemotherapy-treatment_23-2149261071.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text='4 Signs of Cancer You Should Be Cautious About' />
				</Link>
				<Link to='/Softencervix' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/medium-shot-pregnant-woman-posing-outdoors_23-2150412246.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Ways to soften your cervix for birth naturally' />
				</Link>
				<Link to='/Stdscondomscant' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/red-ribbon-latex-condom-white-table_58702-2349.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="STDs That Condoms Can't Always Prevent" />
				</Link>
				<Link to='/Stopbeinglazy' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/woman-waking-up-bed-yawning-grimacing-early-morning-after-sleep-sitting-bedroom_1258-129691.jpg?size=626&ext=jpg&ga=GA1.2.847719650.1681202299&semt=sph'} text='How to stop being lazy' />
				</Link>
			</div>
			<div className="posts-container">
				<Link to='/Strengthexercises' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/strong-muscular-guy-with-dumbbell-isolated-white_155003-11171.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Best exercises for men to gain strength without equipment' />
				</Link>
				<Link to='/Supplements' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/view-table-with-articles-food-family_1398-5025.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='5 Best Supplements to Support Healthy Weight Gain' />
				</Link>
				<Link to='/Womansnipples' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/mother-holding-her-daughter-her-arms_1153-1955.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text="Things you should know about a woman's nipples" />
				</Link>
				<Link to='/Womenaddictions' className='post-link'>
					<Post image={smoking} text='Common addictions many women have' />
				</Link>
				<Link to='/Yellowish' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/happy-girl-with-adorable-hair-smiling_23-2149352392.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=ais'} text='Yellowish teeth? Make them white with these quick easy DIYs. - Dental hacks' />
				</Link>
				<Link to='/Utiduringpregnancy' className='post-link'>
					<Post image={'https://img.freepik.com/free-photo/portrait-future-mother-with-baby-bump-waiting-medic-start-health-care-consultation-cabinet-woman-expecting-child-sitting-bed-before-examination-appointment-with-obstetrician_482257-43586.jpg?size=626&ext=jpg&ga=GA1.1.847719650.1681202299&semt=sph'} text='UTI During Pregnancy: Signs, Causes, and Treatment' />
				</Link>
			</div>
		</div>
      </div>

		)
}
export default Health;