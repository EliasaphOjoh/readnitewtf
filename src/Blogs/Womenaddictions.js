import '../style.css'
import addictions from '../images/addictions.jpg';
import Banner from '../Affiliate/Banner'
import Preloader from '../component/Preloader';

function Womenaddictions(){
	return(
		<div className='content'>
		<Preloader />
			<p>The feminization of addictions is increasingly evident; This is a public health problem that we must not lose sight of.
			Although it is a little accepted practice and therefore not common, in women the desire to stop drinking or smoking is always 
			present and the efforts made according to surveys have been inefficient to achieve it.
			At YVK we present the addictions that occur most frequently in women:</p>
		
			<h1>The Most Common Addictions In Women</h1>
			<h2>1. Alcohol</h2>
			<img src={addictions} alt="Women addictions" />
			<p>According to data from the National Council Against Addictions (CONACID) , one woman for every 11 men develops alcohol dependence 
			syndrome. The National Survey on Addictions (ENA, 2011)  also yielded worrying information: dependence on drinking among men doubled, 
			while in women it tripled.</p>

			<h2>2. Drugs</h2>
			<p>According to the national statistics , the prevalence of drugs, mainly marijuana and cocaine, in women increased 
			from 2.1% to 3.0%</p>

			<h2>3. Psychopharmaceuticals</h2>
			<p>The abuse of psychotropic substances constitutes a public health problem typical of our time and is present at the national and 
			international level.</p>

			<h2>4. Tobacco</h2>
			<p>Kenya is ranked top on the charts in number of smokers and second in smokers. The starting age for tobacco use is now 14.1 years.</p>

			<h2>5. Codependency</h2>
			<p>The so-called “addictive love” is also more frequent as time passes. Researchers  indicate that the highest risk factor for 
			developing codependency is a “feminine script of submission”, a family history of emotional or sexual abuse and women who have 
			suffered early losses (separation, abandonment or death) commonly called “grow fast”.
			Research also indicates that the female population goes less to seek medical help for these problems and that men do so in a more 
			timely manner. Remember that family support is vitally important, recognizing the problem and accepting it. Take care of yourself!</p>		
			<section className="affiliate">
				<h3 className="theme">PROMOTED CONTENT</h3>
				<div className='banners'>
					<a href="https://www.digistore24.com/redir/411170/Eriasaph/">
						<Banner image={'https://www.digistore24-app.com/pb/img/merchant_481993/image/product/DKRGCHYP'} text="The Ultimate Healthy Habits" />
					</a>
					<a href="https://www.digistore24.com/redir/480507/Eriasaph/">
						<Banner image={'https://www.digistore24-app.com/pb/img/merchant_1257130/image/product/AK0XS89I'} text="Smoke free in 4 weeks!" />
					</a>
					<a href="https://www.digistore24.com/redir/481171/Eriasaph/">
						<Banner image={'https://www.digistore24-app.com/pb/img/merchant_2301657/image/product/TFF5INGR'} text="Women's Health + Fitness Challenge" />
					</a>
					<a href="https://www.digistore24.com/redir/493041/Eriasaph/">
						<Banner image={'https://www.digistore24-app.com/pb/img/merchant_2488117/image/product/QA435NFN'} text="The Happiness Hypothesis + Ebook" />
					</a>		
				</div>	
			</section>		
		</div>
	);
}
export default Womenaddictions;