import React, { useContext } from 'react';
import CartContext from '../Store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
//import CartCntxt from '../Store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartcntx = useContext(CartContext);
    const orderItem = () => {
        console.log(cartcntx.items);
        props.onClose()
      };

      const cartItemRemoveHandler = (id) => {
        cartcntx.removeitem(id);
      };

      const cartItemAddHandler = (item) => {
        const newItem = { ...item, quantity: 1 };
        cartcntx.addItem(newItem);
        };
    
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartcntx.items.map((item) => (
                <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                quantity={item.quantity}
                onRemove={() => cartItemRemoveHandler(item.id)}
                onAdd={() => cartItemAddHandler(item)}
        />
      ))}
        </ul>
    );

    return (
    <Modal onClose={props.onClose}>
        {cartItems}
    <div className={classes.total}>
    <span>Total Amount</span>
    <span>{cartcntx.totalAmount}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
        <button classname={classes.button} onClick={orderItem}>Order</button>
    </div>
    </Modal>
 );
};

export default Cart;