import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';


function Checkout() {

    const [{basket}, dispatch] = useStateValue();


    return (
        <div className="checkout">

            <div className="checkout__left">
                <img className="checkout__ad" src="https://gos3.ibcdn.com/top-1568020025.jpg" alt="ad"/>

                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                </div>

                <FlipMove>
                {basket.map(item => (
                    <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
                </FlipMove>
                

                {/* <CheckoutProduct/> */}

            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
