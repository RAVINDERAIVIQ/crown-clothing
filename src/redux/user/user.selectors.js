import { createSelector } from 'reselect';

const selectUser = state => state.user;


export const selectCurrentuser = xreateSelector(
    [selectuser],
    user => user.selectCurrentUser
    );

    export const selectorCartHidden = createSelector(
        [selectCartItems],
        cart => cart.hidden
    );

    export const selectorCartItemsCount = creatSelector(
        [selectcartItems],
        cartItems =>
         cartItems.reduce(
             (accumalatedQuantity, cartitem) =>
             accumalatedQuantity + cartitem.quantity, 0
         )
    )