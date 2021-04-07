import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const  StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const Publishablekey = 'pk_test_51IdXKLSBC92gv2YU89sCbCCMdBdzvGtnftifzCxXLEMByqvZwBulp9NB8kVM4JLEe8WEDp7HdMswzW15zNuRiut500vbWlhBIZ';
const onToken = token => {
    console.log(token);
    alert('Payment Sucessful');
}

    return (
        <StripeCheckout
        label= 'Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={Publishablekey}
        />
    )
};

export default StripeCheckoutButton;