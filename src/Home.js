import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                    className='home__image'
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
                    alt='amazon-banner'
                />

                <div className='home__row'>
                    <Product
                        id="123456"
                        title="The lean startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={5}
                    />
                    <Product
                        id="123457"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitcen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.99}
                        image="https://s12emagst.akamaized.net/products/8171/8170947/images/res_d523ab46a49081765056df22f8d7635d_full.jpg"
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="123458"
                        title="Samsung LC49RG90 49' Curved LED Gaming Monitor"
                        price={199.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                        rating={4}
                    />
                    <Product
                        id="123459"
                        title="Amazon Echo | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        image="https://www.twinschip.com/image/cache/catalog/Products%20Twins%20Chip%20Store%202020/%20Echo%20Dot%203rd%20Gen%20Smart%20speaker%20with%20Alexa/Alexa%20Echo%20Dot%203rd%20Gen%20Smart%20speaker%20-%20Twins%20Chip%201-550x550w.jpg"
                        rating={5}
                    />
                    <Product
                        id="123460"
                        title="New Apple iPad Pro - Silver"
                        price={598.99}
                        image="https://1.grgs.ro/images/products/1/1765416/1770372/normal/ipad-pro-11-2018-1tb-wi-fi-plus-cellular-silver-c62e55c79a083cc6ead4389f6b61e247.jpg"
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="3456578"
                        title="Apple Watch Series 3 (GPS, 38mm) - Silver Aluminum Case with White Sport Band"
                        price={399.99}
                        image="https://m.media-amazon.com/images/I/71vCuRn4CkL._AC_UY218_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
