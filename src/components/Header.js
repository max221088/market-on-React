import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

 const showOrders =  (props) => {
	let sum = 0
	props.orders.forEach(el => {sum += Number.parseFloat(el.price)});
	return (<div>
		{props.orders.map(el => (
			<Order item={el} key={el.id} onDelete={props.onDelete}/>
		))}
		<p className='summa'>Total: {new Intl.NumberFormat().format(sum)} $</p>
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
