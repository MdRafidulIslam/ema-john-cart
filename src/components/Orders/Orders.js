import React from 'react';
import useProducts from './../../hooks/useProducts';
import useCart from './../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft, faRightLong, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveItems = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)


    }
    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewItem key={product.id} handleRemoveItems={handleRemoveItems} product={product}></ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/shipping'>
                        <button className='review-btn'>Review Order <FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon> </button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;