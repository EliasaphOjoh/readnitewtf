import './style.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import logo from './images/logo.png';

function Nav( { isNavVisible, closeMenu, onClick }){
    return(
        <div className="nav" style={{ display: isNavVisible ? 'block' : 'none' }} >
            <div className="nav-brand">
                <img src={logo} alt="readnite Logo" />
            </div>
            <ul className='menu'>
                <li onClick={closeMenu}><NavLink to="/Trending" className='menu-btn'><FontAwesomeIcon icon={faFire} margin-right="5px"/>&nbsp;&nbsp;&nbsp;Trending</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/Relationships" className='menu-btn'><FontAwesomeIcon icon={faHeart} margin-right="5px"/>&nbsp;&nbsp;&nbsp;Relationships</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/Finance" className='menu-btn'><FontAwesomeIcon icon={faCoins} margin-right="5px"/>&nbsp;&nbsp;&nbsp;Buisness & Finance</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/Personal" className='menu-btn'><FontAwesomeIcon icon={faPerson} margin-right="5px"/>&nbsp;&nbsp;&nbsp;Self Development</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/Health" className='menu-btn'><FontAwesomeIcon icon={faPersonRunning} margin-right="5px"/>&nbsp;&nbsp;&nbsp;Health and Fitness</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/Food" className='menu-btn'><FontAwesomeIcon icon={faUtensils} />&nbsp;&nbsp;&nbsp;Food and Diet</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/Gaming" className='menu-btn'><FontAwesomeIcon icon={faGamepad} margin-right="5px"/>&nbsp;&nbsp;&nbsp;Gaming</NavLink></li>
            </ul>
        </div>
    )
 }
 export default Nav;
