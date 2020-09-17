import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {

    const history = useHistory();

    const [state, dispatch] = useStateValue();

    var total = state.basket.reduce((a, { price }) => a + price, 0);

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({state.basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(state.basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => {
                if (state.user) {
                    history.push('/payment');
                } else {
                    history.push('/login');
                }
            }}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
