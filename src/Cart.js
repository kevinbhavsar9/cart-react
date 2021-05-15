import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: 'Watch',
                    price: 500,
                    qty: 1,
                    img: '',id:1
                },
                {
                    title: 'Mobile phone',
                    price: 9999,
                    qty: 13,
                    img: '',
                    id:2
                },
                {
                    title: 'Laptop',
                    price: 100000,
                    qty: 1,
                    img: '',
                    id:3
                }
            ]

        }

    }

    handleIncreaseQuantity=(product)=>{
        // console.log('working')
        const { products }=this.state;
        const index =products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products:products
        })
    }
    handleDecreasedQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty ===0){
            return;
        }
        products[index].qty -= 1
        this.setState({
            products:products
        })

    }
    handleDeleteProduct=(id)=>{
        const {products}=this.state;

        const items =products.filter((item)=>item.id != id);
     
       this.setState({
           products:items
       })



    }


    render() {

        // console.log(this.state.products)
        const {products}=this.state;
        return (

            <div className='cart'>

                {/* can pass data from parent comp to chid comp using props */}
                {/* we will get data passed as attribute in this.props in cartItem */}

                {products.map((product)=>{
                   return <CartItem 
                     product={product}
                     key={product.id}
                     onIncreaseQuantity={this.handleIncreaseQuantity}
                     onDecreasedQuantity={this.handleDecreasedQuantity}
                     onDelete={this.handleDeleteProduct}
                     />
                })}
                




            </div>

        );
    }



}

export default Cart;