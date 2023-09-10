import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

 const showOrders =  (props) => {
	return (<div>
		{props.orders.map(el => (
			<Order item={el} key={el.id}/>
		))}
	</div>)
}
const noOrders = () => {
	return (<div className='empty'>
		Empty )=
	</div>)
}

export default function Header(props) {
	let [cartOpen, setCartOpen] = useState(false)
	return (
		<header>
			<div>
				<span className='logo'>Hause Staff</span> 
				<ul className='nav'>
					<li>About</li>
					<li>Contact</li>
					<li>Cabinet</li>
				</ul>
					<FaShoppingCart onClick={()=>setCartOpen(cartOpen = !cartOpen)} 
						className={`shop-cart-button ${cartOpen && 'active'}`}/>
					{cartOpen && (
						<div className='shop-cart'>
							{(props.orders.length > 0) ?
							showOrders(props) : noOrders()}
						</div>
					)}
			</div>
			<div className='presentation'></div>
		</header>
	)
}
