import React from "react";
import '../components/Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";  

const CheckoutPage = () => {
    const [{basket}, dispatch] = useStateValue();


    return <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg" alt="no_img" />
            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>

                {basket.map( item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.pricing}
                    />
                )
                )}


            </div> 
        </div>
        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>

};

export default CheckoutPage;
