import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ handleRemoveItems, product }) => {
    const { name, price, img, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-items-details'>
                    <p className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>price : $<span className='orange-color'>{price}</span> </p>
                    <p>Shipping : $<span className='orange-color'>{shipping}</span> </p>
                    <p><small>Quantity : ${quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveItems(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;