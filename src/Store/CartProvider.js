import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [ items, updateItems] = useState([]);
    const addItemToCartHandler = item => {
        updateItems([...items,item]);
        //console.log('inside additem', CartContext)
    };

    const removeItemFromHandler = id => {};

    const cartContext = {
        items: [],
        addItem: addItemToCartHandler,
        removeItem: removeItemFromHandler,
        message: 'Click here'
    };

    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};

export default CartProvider;