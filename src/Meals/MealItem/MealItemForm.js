import React, {useContext} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartCntx from '../../Store/cart-context';

const MealItemForm = (props) => {
     const cartcntx = useContext(CartCntx)
     const addItemToCart = (event) => {
        event.preventDefault();
      // cartcntx.items.push(props.item)
         //console.log(cartcntx.items)
         cartcntx.addItem(props.item)
    const quantity = document.getElementById('amount' +props.id.value);
    cartcntx.addItem({ ...props.item, quantity: quantity})
    };

    return (
    <form className={classes.form}>
        {console.log('inside render', cartcntx.items)}
        <Input 
         label='Amount'
         input={{
            id: 'amount' +props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue: '1',
        }}
        />
        <button onClick={addItemToCart}>+ Add</button>
    </form>
    );
};

export default MealItemForm;