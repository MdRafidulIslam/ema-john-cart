import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let item = 0;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        item = item + product.quantity;
        total = total + product.price * item;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    let grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item : {item}</p>
            <p>Price : ${total}</p>
            <p>Shippping : ${shipping}</p>
            <p>Tax : {tax}</p>
            <h5>Grand Total : {grandTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;