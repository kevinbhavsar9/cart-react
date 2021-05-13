import React from 'react';

class CartItem extends React.Component {

    constructor(){
        super();
        this.state={
            title:'Mobile phone',
            price:9999,
            qty:1,
            img:''
        }
    }


    
    //arrow function automatically binds the value of this to the instance of the class
    increaseQuantity=()=>{
        // this.state.qty+=1;
        
        // console.log(this.state);
        //this function is coming from component class and we are inheriting from it

        //setState form 1(passing object)
        // (shallow mwrges with state and rerenders)
        //  this.setState({
        //      qty:this.state.qty + 1
        //  });

        //setState form 2(passing callback)(if previous state required use this)
        //react callback a function internally in which it has prevstate as argument and shallow mwrges with state and rerenders

         this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
         });
    } 

    decreaseQuantity=()=>{
        this.setState({
            qty:this.state.qty - 1
        })
    }



    render() {
        const{title,price,qty,img}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={img} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {buttons} */}
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/128/1828/1828919.png"
                        onClick={this.increaseQuantity}/>
                        <img alt="decrease" 
                        onClick={this.decreaseQuantity}
                        className="action-icons" src="https://image.flaticon.com/icons/png/128/1828/1828899.png"/>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/128/3964/3964085.png"/>
                    </div>

                </div>


            </div>
        );
    }
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
