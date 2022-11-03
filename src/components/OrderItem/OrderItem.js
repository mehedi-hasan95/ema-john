import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderItem.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const OrderItem = ({ product, removeCartItem }) => {
    const { id, img, name, price, shipping, quantity } = product;
    return (
        <div className='order-items'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className="product-wrap">
                <div className="product-info">
                    <h3>{name}</h3>
                    <h4>Price: ${price}</h4>
                    <h4>Shipping Charge: ${shipping}</h4>
                    <h4>Total Quantity: {quantity}</h4>
                </div>
                <div className="delete-container">
                    <button onClick={() => removeCartItem(id)} className="delete-btn">
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;