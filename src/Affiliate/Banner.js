import React from 'react'
import LazyLoad from 'react-lazyload'
import '../style.css'

function Banner(props){
	return(
		<div className="banner">
			<LazyLoad height={200} offset={50}>
				<img src={props.image} alt='ReadNite' />
			</LazyLoad>
			<p>{props.text}</p>
		</div>
	)
}
export default Banner;