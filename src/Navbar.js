import React from 'react';
import CartItem from './CartItem';
//class has state but navbar does not have so we will convert it to functional cpomponent
//in functional component react passes props in argument

const Navbar=(props)=> {
    return (
        <div style={styles.nav}>
            <div style={styles.cartContainer}>
                <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/128/3144/3144456.png" alt="cart-icons"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding: '4px 8px',
        position:'absolute',
        right:0,
        top:2
    }

};


export default Navbar;