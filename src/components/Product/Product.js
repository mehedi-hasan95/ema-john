import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, seller, price, ratings, img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => props.clickHandaler(props.product)} className="shop-btn">
                Add to Cart
            </button>
        </div>
    );
};

export default Product;