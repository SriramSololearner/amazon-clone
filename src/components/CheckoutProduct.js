import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {

    // Remove the item from Basket
    dispatch({
        type : 'REMOVE_FROM_BASKET',
        id   : id,
    })

    }




    return (
        <div className="checkoutProduct">
            <img src={image} alt="no_img" />

            <div className="checkoutProduct_info">
                <p className="checkout_title">{title}</p>
                <p className="checkoutProductPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>

                    ))}

                </div>
                <button onClick={ removeFromBasket }>Remove from Basket</button>
            </div>
        </div>

        
    )
}

export default CheckoutProduct