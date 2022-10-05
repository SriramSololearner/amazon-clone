import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className='Home'>
            <div className='Home_container'>
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/715Hmi-5iSL._SX3000_.jpg"
                    alt="no__img"
                />

                <div className="home_row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />

                </div>

                <div className="home_row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={9}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="90829332"
                        title="Amazon Fire TV 55 Omni Series 4K UHD smart TV, hands-free with Alexa"
                        price={13199.00}
                        rating={8}
                        image="https://m.media-amazon.com/images/I/618Yxam1kWL._AC_SX679_.jpg"
                    />
                    <Product
                        id="50425232"
                        title="Dove Deep Moisture Body Wash with Pump For Dry Skin Moisturizing Body Wash Cleanser Transforms Even The Driest Skin In One Shower 34 oz"
                        price={1094.98}
                        rating={8}
                        image="https://m.media-amazon.com/images/I/612WP0GwYwL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="60735245"
                        title="E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone Deep Bass Wireless Headphones Over Ear,30 Hours Playtime for Travel/Work"
                        price={1094.98}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/4156P56sLzL._AC_UF226,226_FMjpg_.jpg"
                    />
                    <Product
                        id="60735245"
                        title="JBL Tune 130, Vibe 100, and Live Free 2 Headphones "
                        price={1094.98}
                        rating={6}
                        image="https://m.media-amazon.com/images/I/21UFdk7W9HL._AC_UF226,226_FMjpg_.jpg"
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="90829332"
                        title="HP DeskJet 2755e Wireless Color All-in-One Printer with Bonus 6 Months Instant Ink with HP+"
                        price={11199.98}
                        rating={8}
                        image="https://m.media-amazon.com/images/I/61iD0U2YwqL._AC_SX466_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="Insignia 39-inch Class F20 Series Smart HD 720p Fire TV (NS-39DF310NA21, 2020 Model)"
                        price={11199.98}
                        rating={8}
                        image="https://m.media-amazon.com/images/I/81kQyu0HvbL._AC_SX466_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="Dove Deep Moisture Body Wash with Pump For Dry Skin Moisturizing Body Wash Cleanser Transforms Even The Driest Skin In One Shower 34 oz"
                        price={1094.98}
                        rating={8}
                        image="https://m.media-amazon.com/images/I/612WP0GwYwL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home;