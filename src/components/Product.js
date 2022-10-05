import React from 'react';
import './Product.css'
import { useStateValue } from './StateProvider';

const Product = ({ id,title,image,price,rating }) => {
    const [{ basket }, dispatch] = useStateValue();

const addToBasket = () =>{
    // add item to basket....
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id    : id,
            title : title,
            image : image,
            price : price,
            rating:rating
        }
    })

}
    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p> 
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                        
                    ))}
                    
                </div>
            </div>

            <img src={image} alt="no_img" className="product_img" />
            <button id="btn" onClick={ addToBasket }>Add To Cart</button>

        </div>
    )
}

export default Product;