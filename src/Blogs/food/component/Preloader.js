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
			<span>Embrace the power of Reading</span>
		</div>
		</div>
	)
}
export default Preloader;