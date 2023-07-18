import React, { useState } from 'react'
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Trending from './Trending';
import Buttons from './Buttons';
import Finance from './Finance';
import Relationships from './Relationships';
import Health from './Health';
import Personal from './Personal';
import Food from './Food';
import Gaming from './Gaming';

import Avoidgoingbroke from './Blogs/Avoidgoingbroke.js';
import Behonest from './Blogs/Behonest.js';
import Beromantichusband from './Blogs/Beromantichusband.js';
import Breakupwithmen from './Blogs/Breakupwithmen.js';
import Brushingteeth from './Blogs/Brushingteeth.js';
import Buisnessideastotry from './Blogs/Buisnessideastotry.js';
import Canyouswitchgears from './Blogs/Canyouswitchgears.js';
import Couplemistakes from './Blogs/Couplemistakes.js';
import Dealwithtoxicgirlfriend from './Blogs/Dealwithtoxicgirlfriend.js';
import Developingfeelings from './Blogs/Developingfeelings.js';
import Dontrush from './Blogs/Dontrush.js';
import Downloadandroidgames from './Blogs/Downloadandroidgames.js';
import Drugsforsex from './Blogs/Drugsforsex.js';
import Everygirlneedstohear from './Blogs/Everygirlneedstohear.js';
import Eyecontacts from './Blogs/Eyecontacts.js';
import Fallslowly from './Blogs/Fallslowly.js';
import First4moves from './Blogs/First4moves.js';
import Foodsnotat60 from './Blogs/Foodsnotat60.js';
import Hasnotmarriedyou from './Blogs/Hasnotmarriedyou.js';
import Hatehusbands from './Blogs/Hatehusbands.js';
import Keepfalling from './Blogs/Keepfalling.js';
import Moneyrulesjeff from './Blogs/Moneyrulesjeff.js';
import Neverhappen from './Blogs/Neverhappen.js';
import Notmarry from './Blogs/Notmarry.js';
import Painfulsex from './Blogs/Painfulsex.js';
import Patientlies from './Blogs/Patientlies.js';
import Personalfinancerules from './Blogs/Personalfinancerules.js';
import Secretsnottotell from './Blogs/Secretsnottotell.js';
import Sexistthings from './Blogs/Sexistthings.js';
import Shescheating from './Blogs/Shescheating.js';
import Simplesmartways from './Blogs/Simplesmartways.js';
import Skillsthatwillpay from './Blogs/Skillsthatwillpay.js';
import Sleepingwithonion from './Blogs/Sleepingwithonion.js';
import Stillbroke from './Blogs/Stillbroke.js';
import Touchwell from './Blogs/Touchwell.js';
import Toxicgirlfriend from './Blogs/Toxicgirlfriend.js';
import Unsexyhabbits from './Blogs/Unsexyhabbits.js';
import Womansnipples from './Blogs/Womansnipples.js';
import Womenaddictions from './Blogs/Womenaddictions.js';
import Womenfear from './Blogs/Womenfear.js';
import Womennotice from './Blogs/Womennotice.js';

import Abracadabra from './Blogs/Abracadabra.js';
import Abstenanceresults from './Blogs/Abstenanceresults.js';
import Backpaincauses from './Blogs/Backpaincauses.js';
import Bloodpressure from './Blogs/Bloodpressure.js';
import Brainexercises from './Blogs/Brainexercises.js';
import Buildmuscle from './Blogs/Buildmuscle.js';
import Aboutlove from './Blogs/Aboutlove.js';
import Aboutmoney from './Blogs/Aboutmoney.js';
import Attractivesingle from './Blogs/Attractivesingle.js';
import Attractgoodmen from './Blogs/Attractgoodmen.js';
import Beautifulcomplements from './Blogs/Beautifulcomplements.js';
import Beautifulwomen from './Blogs/Beautifulwomen.js';
import Believeinyourself from './Blogs/Believeinyourself.js';
import Bestpayinghustles from './Blogs/Bestpayinghustles.js';
import Bitesherlip from './Blogs/Bitesherlip.js';
import Bugattisecrets from './Blogs/Bugattisecrets.js';
import Buisnessqns from './Blogs/Buisnessqns.js';
import Camerashy from './Blogs/Camerashy.js';
import Cancersigns from './Blogs/Cancersigns.js';
import Causesofuti from './Blogs/Causesofuti.js';
import Cervicalcancersigns from './Blogs/Cervicalcancersigns.js';
import Commandments from './Blogs/Commandments.js';
import Completelyinlove from './Blogs/Completelyinlove.js';
import Confidentpeople from './Blogs/Confidentpeople.js';
import Damageeyesight from './Blogs/Damageeyesight.js';
import Drinkwater from './Blogs/Drinkwater.js';
import Entrepreneurquotes from './Blogs/Entrepreneurquotes.js';
import Erectilefruits from './Blogs/Erectilefruits.js';
import Erectileremedies from './Blogs/Erectileremedies.js';
import Exercises from './Blogs/Exercises.js';
import Fallasleep from './Blogs/Fallasleep.js';
import Flashandroid from './Blogs/Flashandroid.js';
import Flightattendantrules from './Blogs/Flightattendantrules.js';
import Fungames from './Blogs/Fungames.js';
import Funsidehustles from './Blogs/Funsidehustles.js';
import Gamers from './Blogs/Gamers.js';
import Gamessofun from './Blogs/Gamessofun.js';
import Harmingbrain from './Blogs/Harmingbrain.js';
import Harshwomentruths from './Blogs/Harshwomentruths.js';
import Heartdisease from './Blogs/Heartdisease.js';
import Highprofitlowcost from './Blogs/Highprofitlowcost.js';
import Howtheyearn from './Blogs/Howtheyearn.js';
import Increaselibido from './Blogs/Increaselibido.js';
import Itchingvagina from './Blogs/Itchingvagina.js';
import Killstress from './Blogs/Killstress.js';
import Kisswell from './Blogs/Kisswell.js';
import Landroverprices from './Blogs/Landroverprices.js';
import Lastinglonger from './Blogs/Lastinglonger.js';
import Lastlongerfoods from './Blogs/Lastlongerfoods.js';
import Lcingta5 from './Blogs/Lcingta5.js';
import Legitmoney from './Blogs/Legitmoney.js';
import Libertycitybased from './Blogs/Libertycitybased.js';
import Loseconsciousness from './Blogs/Loseconsciousness.js';
import Lovequotes from './Blogs/Lovequotes.js';
import Makemoneyfast from './Blogs/Makemoneyfast.js';
import Mandoesntlikeyou from './Blogs/Mandoesntlikeyou.js';
import Maturitytests from './Blogs/Maturitytests.js';
import Meltherheart from './Blogs/Meltherheart.js';
import Menshdneverdo from './Blogs/Menshdneverdo.js';
import Mentalrelaxation from './Blogs/Mentalrelaxation.js';
import Millionairesteps from './Blogs/Millionairesteps.js';
import Missingstrategies from './Blogs/Missingstrategies.js';
import Moderncv from './Blogs/Moderncv.js';
import Moneymakingskills from './Blogs/Moneymakingskills.js';
import Moneymoves from './Blogs/Moneymoves.js';
import Mosquitoplants from './Blogs/Mosquitoplants.js';
import Mythicalmarijuana from './Blogs/Mythicalmarijuana.js';
import Naturalpainkillers from './Blogs/Naturalpainkillers.js';
import Neverloseon from './Blogs/Neverloseon.js';
import Notinjobinterview from './Blogs/Notinjobinterview.js';
import Offlineandroid from './Blogs/Offlineandroid.js';
import Offlinepc from './Blogs/Offlinepc.js';
import Onlineandroid from './Blogs/Onlineandroid.js';
import Onlinepc from './Blogs/Onlinepc.js';
import Oversleep from './Blogs/Oversleep.js';
import Peeingontime from './Blogs/Peeingontime.js';
import Playergirl from './Blogs/Playergirl.js';
import Profitablebuisness from './Blogs/Profitablebuisness.js';
import Questionsbeforeproposing from './Blogs/Questionsbeforeproposing.js';
import Racinggames from './Blogs/Racinggames.js';
import Retirecomfortably from './Blogs/Retirecomfortably.js';
import Ruinrelationships from './Blogs/Ruinrelationships.js';
import Sacheats from './Blogs/Sacheats.js';
import Sexmistakeswomen from './Blogs/Sexmistakeswomen.js';
import Signsofcancer from './Blogs/Signsofcancer.js';
import Singleincome from './Blogs/Singleincome.js';
import Sleepingwithpillow from './Blogs/Sleepingwithpillow.js';
import Softencervix from './Blogs/Softencervix.js';
import Stdscondomscant from './Blogs/Stdscondomscant.js';
import Stopbeinglazy from './Blogs/Stopbeinglazy.js';
import Strengthexercises from './Blogs/Strengthexercises.js';
import Successrules from './Blogs/Successrules.js';
import Supplements from './Blogs/Supplements.js';
import Sweetnames from './Blogs/Sweetnames.js';
import Talktoanyone from './Blogs/Talktoanyone.js';
import Textingmistakes from './Blogs/Textingmistakes.js';
import Thingsaboutmoney from './Blogs/Thingsaboutmoney.js';
import Thingstohave from './Blogs/Thingstohave.js';
import Thousanddollarskill from './Blogs/Thousanddollarskill.js';
import Timewasters from './Blogs/Timewasters.js';
import Toearn from './Blogs/Toearn.js';
import Transformanger from './Blogs/Transformanger.js';
import Ultimatewealth from './Blogs/Ultimatewealth.js';
import Utiduringpregnancy from './Blogs/Utiduringpregnancy.js';
import Womanisinterested from './Blogs/Womanisinterested.js';
import Yellowish from './Blogs/Yellowish.js';
import Yourself from './Blogs/Yourself.js';

import Avocado from './Blogs/food/Avocado.js';
import Baking from './Blogs/food/Baking.js';
import Balancediet from './Blogs/food/Balancediet.js';
import Busymeal from './Blogs/food/Busymeal.js';
import Cheapcooking from './Blogs/food/Cheapcooking.js';
import Cookingvalue from './Blogs/food/Cookingvalue.js';
import Cookingskills from './Blogs/food/Cookingskills.js';
import Dessertveges from './Blogs/food/Dessertveges.js';
import Dinnerhosting from './Blogs/food/Dinnerhosting.js';
import Exerciceloss from './Blogs/food/Exerciceloss.js';
import Fermented from './Blogs/food/Fermented.js';
import Foodallergies from './Blogs/food/Foodallergies.js';
import Foodlabels from './Blogs/food/Foodlabels.js';
import Foodmoodconnection from './Blogs/food/Foodmoodconnection.js';
import Foodwaste from './Blogs/food/Foodwaste.js';
import Globalcuisines from './Blogs/food/Globalcuisines.js';
import Glutenfree from './Blogs/food/Glutenfree.js';
import Goodbadfats from './Blogs/food/Goodbadfats.js';
import Healthierfoods from './Blogs/food/Healthierfoods.js';
import Healthychildren from './Blogs/food/Healthychildren.js';
import Homemadesauce from './Blogs/food/Homemadesauce.js';
import Kale from './Blogs/food/Kale.js';
import Kidsnacks from './Blogs/food/Kidsnacks.js';
import Kombucha from './Blogs/food/Kombucha.js';
import Localproduce from './Blogs/food/Localproduce.js';
import Mealplan from './Blogs/food/Mealplan.js';
import Naturalflavors from './Blogs/food/Naturalflavors.js';
import Notime from './Blogs/food/Notime.js';
import Nutricious from './Blogs/food/Nutricious.js';
import Nutringredients from './Blogs/food/Nutringredients.js';
import Organicfood from './Blogs/food/Organicfood.js';
import Plantbased from './Blogs/food/Plantbased.js';
import Plantprotein from './Blogs/food/Plantprotein.js';
import Quickmeals from './Blogs/food/Quickmeals.js';
import Sauerkraut from './Blogs/food/Sauerkraut.js';
import Shopping from './Blogs/food/Shopping.js';
import Sustainable from './Blogs/food/Sustainable.js';
import Taste from './Blogs/food/Taste.js';
import Thanksgiving from './Blogs/food/Thanksgiving.js';
import Tradcooking from './Blogs/food/Tradcooking.js';
import Tradcooking2 from './Blogs/food/Tradcooking2.js';
import Turmeric from './Blogs/food/Turmeric.js';
import Uniquecuisines from './Blogs/food/Uniquecuisines.js';
import Vegesindiet from './Blogs/food/Vegesindiet.js';
import Worldflavors from './Blogs/food/Worldflavors.js';
import Yorghurt from './Blogs/food/Yorghurt.js';

function App(){
const [isNavVisible, setNavVisible] = useState(true);

  const openMenu = () => {
    setNavVisible(!isNavVisible);
  };
  const closeMenu = () => {
    if (window.innerWidth <= 767){
          setNavVisible(false);
        }
  };
  
  return(
    <Router>
    <div className='tin'>
      <Buttons onClick={openMenu} isNavVisible={isNavVisible} />    
    <div className='app'>
      <Nav isNavVisible={isNavVisible} closeMenu={closeMenu} />
        
        <Routes>
          <Route path="/Finance" element={<Finance />} />
          <Route path="/Relationships" element={<Relationships />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Gaming" element={<Gaming />} />
          
          <Route path="/Avoidgoingbroke" element={<Avoidgoingbroke />} />
          <Route path="/Behonest" element={<Behonest />} />
          <Route path="/Beromantichusband" element={<Beromantichusband />} />
          <Route path="/Breakupwithmen" element={<Breakupwithmen />} />
          <Route path="/Brushingteeth" element={<Brushingteeth />} />
          <Route path="/Buisnessideastotry" element={<Buisnessideastotry />} />
          <Route path="/Canyouswitchgears" element={<Canyouswitchgears />} />
          <Route path="/Couplemistakes" element={<Couplemistakes />} />
          <Route path="/Dealwithtoxicgirlfriend" element={<Dealwithtoxicgirlfriend />} />
          <Route path="/Developingfeelings" element={<Developingfeelings />} />
          <Route path="/Dontrush" element={<Dontrush />} />
          <Route path="/Downloadandroidgames" element={<Downloadandroidgames />} />
          <Route path="/Drugsforsex" element={<Drugsforsex />} />
          <Route path="/Everygirlneedstohear" element={<Everygirlneedstohear />} />
          <Route path="/Eyecontacts" element={<Eyecontacts />} />
          <Route path="/Fallslowly" element={<Fallslowly />} />
          <Route path="/First4moves" element={<First4moves />} />
          <Route path="/Foodsnotat60" element={<Foodsnotat60 />} />
          <Route path="/Hasnotmarriedyou" element={<Hasnotmarriedyou />} />
          <Route path="/Hatehusbands" element={<Hatehusbands />} />
          <Route path="/Keepfalling" element={<Keepfalling />} />
          <Route path="/Moneyrulesjeff" element={<Moneyrulesjeff />} />
          <Route path="/Neverhappen" element={<Neverhappen />} />
          <Route path="/Notmarry" element={<Notmarry />} />
          <Route path="/Painfulsex" element={<Painfulsex />} />
          <Route path="/Patientlies" element={<Patientlies />} />
          <Route path="/Personalfinancerules" element={<Personalfinancerules />} />
          <Route path="/Secretsnottotell" element={<Secretsnottotell />} />
          <Route path="/Sexistthings" element={<Sexistthings />} />
          <Route path="/Shescheating" element={<Shescheating />} />
          <Route path="/Simplesmartways" element={<Simplesmartways />} />
          <Route path="/Skillsthatwillpay" element={<Skillsthatwillpay />} />
          <Route path="/Sleepingwithonion" element={<Sleepingwithonion />} />
          <Route path="/Stillbroke" element={<Stillbroke />} />
          <Route path="/Touchwell" element={<Touchwell />} />
          <Route path="/Toxicgirlfriend" element={<Toxicgirlfriend />} />
          <Route path="/Unsexyhabbits" element={<Unsexyhabbits />} />
          <Route path="/Womansnipples" element={<Womansnipples />} />
          <Route path="/Womenaddictions" element={<Womenaddictions />} />
          <Route path="/Womenfear" element={<Womenfear />} />
          <Route path="/Womennotice" element={<Womennotice />} />

          <Route path="/Abstenanceresults" element={<Abstenanceresults />} />
          <Route path="/Abracadabra" element={<Abracadabra />} />
          <Route path="/Backpaincauses" element={<Backpaincauses />} />
          <Route path="/Bloodpressure" element={<Bloodpressure />} />
          <Route path="/Brainexercises" element={<Brainexercises />} />
          <Route path="/Buildmuscle" element={<Buildmuscle />} />
          <Route path="/Aboutlove" element={<Aboutlove />} />
          <Route path="/Aboutmoney" element={<Aboutmoney />} />
          <Route path="/Attractivesingle" element={<Attractivesingle />} />
          <Route path="/Attractgoodmen" element={<Attractgoodmen />} />
          <Route path="/Backpaincauses" element={<Backpaincauses />} />
          <Route path="/Beautifulcomplements" element={<Beautifulcomplements />} />
          <Route path="/Beautifulwomen" element={<Beautifulwomen />} />
          <Route path="/Believeinyourself" element={<Believeinyourself />} />
          <Route path="/Bestpayinghustles" element={<Bestpayinghustles />} />
          <Route path="/Bitesherlip" element={<Bitesherlip />} />
          <Route path="/Bugattisecrets" element={<Bugattisecrets />} />
          <Route path="/Buisnessqns" element={<Buisnessqns />} />
          <Route path="/Camerashy" element={<Camerashy />} />
          <Route path="/Cancersigns" element={<Cancersigns />} />
          <Route path="/Causesofuti" element={<Causesofuti />} />
          <Route path="/Cervicalcancersigns" element={<Cervicalcancersigns />} />
          <Route path="/Commandments" element={<Commandments />} />
          <Route path="/Completelyinlove" element={<Completelyinlove />} />
          <Route path="/Confidentpeople" element={<Confidentpeople />} />
          <Route path="/Damageeyesight" element={<Damageeyesight />} />
          <Route path="/Drinkwater" element={<Drinkwater />} />
          <Route path="/Entrepreneurquotes" element={<Entrepreneurquotes />} />
          <Route path="/Erectilefruits" element={<Erectilefruits />} />
          <Route path="/Erectileremedies" element={<Erectileremedies />} />
          <Route path="/Exercises" element={<Exercises />} />
          <Route path="/Fallasleep" element={<Fallasleep />} />
          <Route path="/Flashandroid" element={<Flashandroid />} />
          <Route path="/Flightattendantrules" element={<Flightattendantrules />} />
          <Route path="/Fungames" element={<Fungames />} />
          <Route path="/Funsidehustles" element={<Funsidehustles />} />
          <Route path="/Gamers" element={<Gamers />} />
          <Route path="/Gamessofun" element={<Gamessofun />} />
          <Route path="/Harmingbrain" element={<Harmingbrain />} />
          <Route path="/Harshwomentruths" element={<Harshwomentruths />} />
          <Route path="/Heartdisease" element={<Heartdisease />} />
          <Route path="/Highprofitlowcost" element={<Highprofitlowcost />} />
          <Route path="/Howtheyearn" element={<Howtheyearn />} />
          <Route path="/Increaselibido" element={<Increaselibido />} />
          <Route path="/Itchingvagina" element={<Itchingvagina />} />
          <Route path="/Killstress" element={<Killstress />} />
          <Route path="/Kisswell" element={<Kisswell />} />
          <Route path="/Landroverprices" element={<Landroverprices />} />
          <Route path="/Lastinglonger" element={<Lastinglonger />} />
          <Route path="/Lastlongerfoods" element={<Lastlongerfoods />} />
          <Route path="/Lcingta5" element={<Lcingta5 />} />
          <Route path="/Legitmoney" element={<Legitmoney />} />
          <Route path="/Libertycitybased" element={<Libertycitybased />} />
          <Route path="/Loseconsciousness" element={<Loseconsciousness />} />
          <Route path="/Lovequotes" element={<Lovequotes />} />
          <Route path="/Makemoneyfast" element={<Makemoneyfast />} />
          <Route path="/Mandoesntlikeyou" element={<Mandoesntlikeyou />} />
          <Route path="/Maturitytests" element={<Maturitytests />} />
          <Route path="/Meltherheart" element={<Meltherheart />} />
          <Route path="/Menshdneverdo" element={<Menshdneverdo />} />
          <Route path="/Mentalrelaxation" element={<Mentalrelaxation />} />
          <Route path="/Millionairesteps" element={<Millionairesteps />} />
          <Route path="/Missingstrategies" element={<Missingstrategies />} />
          <Route path="/Moderncv" element={<Moderncv />} />
          <Route path="/Moneymoves" element={<Moneymoves />} />
          <Route path="/Moneymakingskills" element={<Moneymakingskills />} />
          <Route path="/Mosquitoplants" element={<Mosquitoplants />} />
          <Route path="/Mythicalmarijuana" element={<Mythicalmarijuana />} />
          <Route path="/Naturalpainkillers" element={<Naturalpainkillers />} />
          <Route path="/Neverloseon" element={<Neverloseon />} />
          <Route path="/Notinjobinterview" element={<Notinjobinterview />} />
          <Route path="/Offlineandroid" element={<Offlineandroid />} />
          <Route path="/Offlinepc" element={<Offlinepc />} />
          <Route path="/Onlineandroid" element={<Onlineandroid />} />
          <Route path="/Onlinepc" element={<Onlinepc />} />
          <Route path="/Oversleep" element={<Oversleep />} />
          <Route path="/Peeingontime" element={<Peeingontime />} />
          <Route path="/Playergirl" element={<Playergirl />} />
          <Route path="/Profitablebuisness" element={<Profitablebuisness />} />
          <Route path="/Questionsbeforeproposing" element={<Questionsbeforeproposing />} />
          <Route path="/Racinggames" element={<Racinggames />} />
          <Route path="/Retirecomfortably" element={<Retirecomfortably />} />
          <Route path="/Ruinrelationships" element={<Ruinrelationships />} />
          <Route path="/Sacheats" element={<Sacheats />} />
          <Route path="/Sexmistakeswomen" element={<Sexmistakeswomen />} />
          <Route path="/Signsofcancer" element={<Signsofcancer />} />
          <Route path="/Singleincome" element={<Singleincome />} />
          <Route path="/Sleepingwithpillow" element={<Sleepingwithpillow />} />
          <Route path="/Softencervix" element={<Softencervix />} />
          <Route path="/Stdscondomscant" element={<Stdscondomscant />} />
          <Route path="/Stopbeinglazy" element={<Stopbeinglazy />} />
          <Route path="/Strengthexercises" element={<Strengthexercises />} />
          <Route path="/Successrules" element={<Successrules />} />
          <Route path="/Supplements" element={<Supplements />} />
          <Route path="/Sweetnames" element={<Sweetnames />} />
          <Route path="/Talktoanyone" element={<Talktoanyone />} />
          <Route path="/Textingmistakes" element={<Textingmistakes />} />
          <Route path="/Thingsaboutmoney" element={<Thingsaboutmoney />} />
          <Route path="/Thingstohave" element={<Thingstohave />} />
          <Route path="/Thousanddollarskill" element={<Thousanddollarskill />} />
          <Route path="/Timewasters" element={<Timewasters />} />
          <Route path="/Toearn" element={<Toearn />} />
          <Route path="/Transformanger" element={<Transformanger />} />
          <Route path="/Ultimatewealth" element={<Ultimatewealth />} />
          <Route path="/Utiduringpregnancy" element={<Utiduringpregnancy />} />
          <Route path="/Womanisinterested" element={<Womanisinterested />} />
          <Route path="/Yellowish" element={<Yellowish />} />
          <Route path="/Yourself" element={<Yourself />} />

          <Route path="/Avocado" element={<Avocado />} />
          <Route path="/Baking" element={<Baking />} />
          <Route path="/Balancediet" element={<Balancediet />} />
          <Route path="/Busymeal" element={<Busymeal />} />
          <Route path="/Cheapcooking" element={<Cheapcooking />} />
          <Route path="/Cookingvalue" element={<Cookingvalue />} />
          <Route path="/Cookingskills" element={<Cookingskills />} />
          <Route path="/Dessertveges" element={<Dessertveges />} />
          <Route path="/Dinnerhosting" element={<Dinnerhosting />} />
          <Route path="/Exerciceloss" element={<Exerciceloss />} />
          <Route path="/Fermented" element={<Fermented />} />
          <Route path="/Foodallergies" element={<Foodallergies />} />
          <Route path="/Foodlabels" element={<Foodlabels />} />
          <Route path="/Foodmoodconnection" element={<Foodmoodconnection />} />
          <Route path="/Foodwaste" element={<Foodwaste />} />
          <Route path="/Globalcuisines" element={<Globalcuisines />} />
          <Route path="/Glutenfree" element={<Glutenfree />} />
          <Route path="/Goodbadfats" element={<Goodbadfats />} />
          <Route path="/Healthierfoods" element={<Healthierfoods />} />
          <Route path="/Healthychildren" element={<Healthychildren />} />
          <Route path="/Homemadesauce" element={<Homemadesauce />} />
          <Route path="/Kale" element={<Kale />} />
          <Route path="/Kidsnacks" element={<Kidsnacks />} />
          <Route path="/Kombucha" element={<Kombucha />} />
          <Route path="/Localproduce" element={<Localproduce />} />
          <Route path="/Mealplan" element={<Mealplan />} />
          <Route path="/Naturalflavors" element={<Naturalflavors />} />
          <Route path="/Notime" element={<Notime />} />
          <Route path="/Nutricious" element={<Nutricious />} />
          <Route path="/Nutringredients" element={<Nutringredients />} />
          <Route path="/Organicfood" element={<Organicfood />} />
          <Route path="/Plantbased" element={<Plantbased />} />
          <Route path="/Plantprotein" element={<Plantprotein />} />
          <Route path="/Quickmeals" element={<Quickmeals />} />
          <Route path="/Sauerkraut" element={<Sauerkraut />} />
          <Route path="/Shopping" element={<Shopping />} />
          <Route path="/Sustainable" element={<Sustainable />} />
          <Route path="/Taste" element={<Taste />} />
          <Route path="/Thanksgiving" element={<Thanksgiving />} />
          <Route path="/Tradcooking" element={<Tradcooking />} />
          <Route path="/Tradcooking2" element={<Tradcooking2 />} />
          <Route path="/Turmeric" element={<Turmeric />} />
          <Route path="/Uniquecuisines" element={<Uniquecuisines />} />
          <Route path="/Vegesindiet" element={<Vegesindiet />} />
          <Route path="/Worldflavors" element={<Worldflavors />} />
          <Route path="/Yorghurt" element={<Yorghurt />} />
        </Routes>
      </div>
      </div>
      </Router>
    )
}
export default App;
