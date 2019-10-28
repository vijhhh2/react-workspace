import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { AppState } from '../../redux/store';
import { ShopItem } from '../../models/collection.model';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter, RouteComponentProps } from 'react-router';
import { CartActions } from '../../redux/cart/cart.types';
import { toggleDropDown } from '../../redux/cart/cart.actions';

import './cart-dropdown.component.scss';

interface ICartDropDownProps extends RouteComponentProps {
    selectCartItems: ShopItem[];
    dispatch: import('redux').Dispatch<CartActions>;
}

const CartDropDown: React.FC<ICartDropDownProps> = ({selectCartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                selectCartItems.length
                ?selectCartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                :<span className='empty-text'>Your Cart Is Empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleDropDown());
        }}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state: AppState) => ({
    selectCartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));