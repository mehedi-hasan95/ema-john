import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredProduct, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();

    // Click Handaler
    const [cart, setCart] = useState([]);
    // For Remove all Cart 
    const removeCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    const clickHandaler = selectedProduct => {
        let newProduct = [];
        const exist = cart.find(product =>product.id === selectedProduct.id);
        if(!exist) {
            selectedProduct.quantity = 1;
            newProduct = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity =exist.quantity + 1;
            newProduct = [...rest, exist];
        }
        setCart(newProduct);
        addToDb(selectedProduct.id);
    }

    // Set to localStoroage

    useEffect( () => {
        const storeProduct = getStoredProduct();
        const newAdded = [];
        for (const id in storeProduct) {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct) {
                const quantity = storeProduct[id];
                addedProduct.quantity = quantity;
                newAdded.push(addedProduct);
            }
        }
        setCart(newAdded);
    },[products]);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} clickHandaler={clickHandaler}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart removeCart={removeCart} cart={cart}>
                    <Link to='/order'>
                        <button>Revew Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;