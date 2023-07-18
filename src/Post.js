import React from 'react'
import LazyLoad from 'react-lazyload'
import './style.css'

function Post(props) {
	return (
		<div className='post'>
			<LazyLoad height={200} offset={50}>
			<img src={props.image} alt='kinda' />
			</LazyLoad>
			<p>{props.text}</p>
		</div>	
	)
}
export default Post;