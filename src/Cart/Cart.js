import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartCntxt from '../Store/cart-context';

const Cart = (props) => {
    const cartcntx = useContext(CartCntxt);
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartcntx.items.map((item) => (
            <li>{item.name} Price: {item.price} Quantity: {item.quantity}</li>
            ))}
        </ul>
    );

    return (
    <Modal onClose={props.onClose}>
        {cartItems}
    <div className={classes.total}>
    <span>Total Amount</span>
    <span>35.62</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
        <button classname={classes.button}>Order</button>
    </div>
    </Modal>
 );
};

export default Cart;