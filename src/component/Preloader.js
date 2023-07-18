import React, { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../animations/'

const Preloader = () => {
	useEffect(()=>{
		preLoaderAnim()
	},[]);
	return(
		<div className='preloader'>
		<div className='texts_container'>
			<p>Embrace the power of Reading</p>
		</div>
		</div>
		)
}
export default Preloader;