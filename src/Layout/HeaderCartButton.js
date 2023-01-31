import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../Store/cart-context";

const HeaderCartButton = (props) => {
    const cartCntxt = useContext(CartContext);
    let quantity=0;
    cartCntxt.items.forEach(item => {
        quantity= quantity + Number(item.quantity)
    })

    return (
    <button className={classes.button} onClick={props.onClick}>
        <div className={classes.icon}>
        <CartIcon />
        </div>
        <div>Your Cart</div>
        <div className={classes.badge}>{quantity}</div>
    </button>
    );
};

export default HeaderCartButton;