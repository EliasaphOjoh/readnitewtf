import '../style.css'
import doctor3 from '../images/doctor3.jpg'
import doctor2 from '../images/doctor2.jpg'
import doctor from '../images/doctor.jpg'
import Preloader from '../component/Preloader';

function Patientlies(){
	return(
		<div className='content'>
		<Preloader />
			<h1>5 common Lies that Patients always tell Doctors</h1>
			<p>Whether out of fear, guilt or habit, the human being tends to lie in all aspects of his life: family, love, work 
			and even health, but how does it affect emotional and physical well-being, not telling the truth when  visiting the doctor and 
			what are the most frequent deceptions that are said?</p>
			<img src={doctor} alt="Patient lies" />
		
			<p>Most of the information doctors use to diagnose comes from what patients tell them. Therefore, it is important and essential not to 
			lie  to avoid consequences such as physical complications or even death.</p>

			<p>A study conducted by General Electric Co. with the Cleveland Clinic in the United States , indicates that almost 53% of patients do 
			not tell the truth, and only 13% admit to having lied. However, what are the most common lies when visiting the doctor:</p>
			<img src={doctor3} alt="Patient lies" />

			<h3>These are the commonest lies from patients according to study</h3>
			<p>1. Adherence to treatment:   38% say they follow the instructions of their doctors, but this is not the case.</p>
			<p>2. Food and exercise:   32% do not follow their diet or the amount of exercise  recommended.</p>
				<img src={doctor2} alt="Patient lies" />
			<p>3. Cigarettes:  22% smoke when they say otherwise.</p>
			<p>4. Sex: 17% lie about sexual activity (especially if the doctor is attractive).</p>
			<p>5. Drink: 16% on the amount and frequency with which they drink alcohol.</p>
			<p>6. Drugs:   12% cheat about drug use.</p>
			<p>7. Expert advice: 7% hid having obtained a second opinion.</p>		
		</div>
	)
}
export default Patientlies;