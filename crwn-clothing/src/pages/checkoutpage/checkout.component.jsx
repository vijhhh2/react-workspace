import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { cartItems, selectTotalAmount } from '../../redux/cart/cart.selectors'
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckOutButton from '../../components/stripe-checkout/stripe.component';

import './checkout.component.scss'

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="text-warning">
      *Please use following test card for payments.
      <br />
      4242 4242 4242 4242 01/20 123
    </div>
    <StripeCheckOutButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: cartItems,
  total: selectTotalAmount,
})

export default connect(mapStateToProps)(CheckoutPage)
