import React, { Component } from 'react'

export class Order extends Component {
	render() {
		return (
			<div className='item'>
				<img src={'img/'+this.props.item.img} alt="Foto"/>
				<h2 className='title'>{this.props.item.title}</h2>
				<p className='price'>{this.props.item.price} $</p>
			</div>
		)
	}
}

export default Order