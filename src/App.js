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
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60', id: 1
        },
        {
          title: 'IPhone',
          price: 9999,
          qty: 13,
          img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          id: 2
        },
        {
          title: 'Laptop',
          price: 100000,
          qty: 1,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
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
  getCartTotal=()=>{
    const {products}=this.state;

    let total=0;
    products.forEach((product)=>{
      total+=(product.price * product.qty);
    })
    return total;
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
        <div style={{padding:10,fontSize:20}}>Total:{this.getCartTotal()}</div>

      </div>
    );
  }

}

export default App;
