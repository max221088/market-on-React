import React, { Component } from 'react'

export class Item extends Component {
	render() {
		return (
			<div className='item'>
				<img src={'img/'+this.props.item.img} alt="Foto" onClick={() => this.props.onShowItem(this.props.item)}/>
				<h2 className='title'>{this.props.item.title}</h2>
				<p className='desc'>{this.props.item.desc}</p>
				<p className='price'>{this.props.item.price} $</p>
				<div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)}>+</div>
			</div>
		)
	}
}

export default Item