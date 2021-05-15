import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'Watch',
          price: 500,
          qty: 1,
          img: '', id: 1
        },
        {
          title: 'Mobile phone',
          price: 9999,
          qty: 13,
          img: '',
          id: 2
        },
        {
          title: 'Laptop',
          price: 100000,
          qty: 1,
          img: '',
          id: 3
        }
      ]

    }

  }

  handleIncreaseQuantity = (product) => {
    // console.log('working')
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products
    })
  }
  handleDecreasedQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1
    this.setState({
      products: products
    })

  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id != id);

    this.setState({
      products: items
    })



  }

  getCartCount =()=>{
    const {products}=this.state;

    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }


  render() {
    const {products}= this.state
    return (
      <div className="App">
        <Navbar 
        count={this.getCartCount()}
        />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreasedQuantity={this.handleDecreasedQuantity}
          onDelete={this.handleDeleteProduct}
        />

      </div>
    );
  }

}

export default App;
