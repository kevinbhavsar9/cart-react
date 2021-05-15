import React from 'react';

const CartItem=(props)=>{
    
          //destructuring

          const{title,price,qty,img}=props.product;
          // console.log(this.props)
         
          return (
              <div className="cart-item">
                  <div className="left-block">
                      <img style={styles.image} src={img}  />
                  </div>
                  <div className="right-block">
                      <div style={{fontSize:25}}>{title}</div>
                      <div style={{color:'#777'}}>Rs {price}</div>
                      <div style={{color:'#777'}}>Qty: {qty}</div>
                      <div className="cart-item-actions">
                          {/* {buttons} */}
                          <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/128/1828/1828919.png"
                          onClick={()=>props.onIncreaseQuantity(props.product)}/>
                          <img alt="decrease" 
                          onClick={()=>props.onDecreasedQuantity(props.product)}
                          className="action-icons" src="https://image.flaticon.com/icons/png/128/1828/1828899.png"/>
                          <img alt="delete" onClick={()=>props.onDelete(props.product.id)} className="action-icons" src="https://image.flaticon.com/icons/png/128/3964/3964085.png"/>
                      </div>
  
                  </div>
  
  
              </div>
          );
}



    


const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}


export default CartItem;
