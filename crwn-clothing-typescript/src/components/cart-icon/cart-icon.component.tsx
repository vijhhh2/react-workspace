import React from 'react';
import { connect } from 'react-redux';

import { toggleDropDown } from '../../redux/cart/cart.actions';
import { selectItemCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import './cart-icon.component.scss';
import { AppState } from '../../redux/store';

interface ICartIconProps {
    toggleDropDown: () => void;
    itemCount: number;
}

const CartIcon: React.FC<ICartIconProps> = ({toggleDropDown, itemCount}) => (
    <div className='cart-icon' onClick={toggleDropDown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch: import('redux').Dispatch) => ({
    toggleDropDown: () => dispatch(toggleDropDown())
})

const mapStateToProps = (state: AppState) => ({
    itemCount: selectItemCount(state)
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);