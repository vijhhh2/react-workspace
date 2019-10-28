import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe.component.scss';

const StripeCheckoutButton = ({price}) => {
    const stripePayment = price * 100;
    const publishableKey = 'pk_test_e0DRKMKFHa6zJ3LgW5EEjszh00vsBkc6ix';

    const onToken = (data) => {
        console.log(data);
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total price is $${price}`}
        amount={stripePayment}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;