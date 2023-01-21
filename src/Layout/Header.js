import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealIsImage from '../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeal</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main_image']}>
            <img src={mealIsImage} alt='A table full of delicious food!' />
        </div>
    </React.Fragment>
};

export default Header;