import React, { Component } from 'react'

export default class Categories extends Component {
	constructor (props) {
		super (props)
		this.state = {
			categories: [
				{
					key: 'all',
					name: 'All',
				},
				{
					key: 'chairs',
					name: 'chairs',
				},
				{
					key: 'tables',
					name: 'tables',
				},
				{
					key: 'sofa',
					name: 'sofa',
				},
				{
					key: 'light',
					name: 'light',
				},
			]
		}
	}
	render() {
		return (
			<div className='categories'>{this.state.categories.map(el =>
				<div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
			)}</div>
		)
	}
}
