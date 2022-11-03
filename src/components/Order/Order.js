import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';
import './Order.css'

const Order = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const removeCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    const removeCartItem = id => {
        const remainingCart = cart.filter(product => product.id !==id);
        setCart(remainingCart);
        removeFromDb(id);
        console.log(id);
    }
    console.log(cart);
    return (
        <div>
            <div className='shop-container'>
            <div className="order-container">
                {
                    cart.map(product => <OrderItem product={product} key={product.id} removeCartItem={removeCartItem}></OrderItem>)
                }
                {
                    cart.length === 0 && <h2>You haven't add any porduct. Please add <Link to='/'>Product</Link></h2>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeCart={removeCart}>
                    <Link to='/shipping'>
                        <button>Proced Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Order;