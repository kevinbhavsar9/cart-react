import React from 'react';
import CartItem from './CartItem';


   


 const Cart=(props)=>{
     
        // console.log(this.state.products)
        const {products}=props;
        return (

            <div className='cart'>

                {/* can pass data from parent comp to chid comp using props */}
                {/* we will get data passed as attribute in this.props in cartItem */}

                {products.map((product)=>{
                   return <CartItem 
                     product={product}
                     key={product.id}
                     onIncreaseQuantity={props.onIncreaseQuantity}
                     onDecreasedQuantity={props.onDecreasedQuantity}
                     onDelete={props.onDelete}
                     />
                })}
                




            </div>

        );

 }
    

    





export default Cart;