import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories'
import ShowFullItem from './components/ShowFullItem'

class App extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			orders: [],
			currentItems: [],
			isShowFullItem: false,
			fullItem: {},
			items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'wall-light.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'light',
          price: '25.00'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        }
      ]
		}
		this.state.currentItems = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.onShowItem = this.onShowItem.bind(this)
	}
	render () {
		return (
			<div className='wrapper'>
				<Header orders={this.state.orders} onDelete={this.deleteOrder} />
				<Categories chooseCategory={this.chooseCategory}/>
				<Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
				{this.state.isShowFullItem && <ShowFullItem item={this.state.fullItem} 
					onShowItem={this.onShowItem} onAdd={this.addToOrder}/>}
				<Footer/>
			</div>
		);
	}
	onShowItem (item) {
		this.setState({fullItem: item})
		this.setState({isShowFullItem: !this.state.isShowFullItem})
	}
	chooseCategory (category) {
		(category !== 'all') ?
			this.setState({currentItems: this.state.items.filter(el =>(el.category === category))})
			: this.setState({currentItems: this.state.items})
	}
	deleteOrder(id) {
		this.setState({orders: this.state.orders.filter(el =>(el.id !== id))})
	}
  addToOrder(item) {
		let isInArray = false
		this.state.orders.forEach(element => {
			if (element.id === item.id) {
				isInArray = true
			}
		});
		if (!isInArray) {
			this.setState({orders: [...this.state.orders, item]})
		}
	}
}

export default App;
