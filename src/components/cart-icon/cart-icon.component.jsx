import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.action'; 
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

import { ReactComponent as Shoppingicon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = ({toggleCartHidden,itemCount}) => (
   
    <div className='cart-icon' onClick = {toggleCartHidden}>
        <Shoppingicon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);