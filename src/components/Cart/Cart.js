import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart, removeCart, children} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat(total * 0.1);
    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className="cart-innar">
            <h2>Order Summary</h2>
            <h6>Selected Items: {quantity}</h6>
            <h6>Total Price: ${total}</h6>
            <h6>Total Shipping Charge: ${shipping}</h6>
            <h6>Tax: ${tax.toFixed(2)}</h6>
            <h5><strong>Grand Total: ${grandTotal}</strong></h5>
            {/* <button onClick={removeCart}>Remove Cart</button> */}
            {children}
        </div>
    );
};

export default Cart;