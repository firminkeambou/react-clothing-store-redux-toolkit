import { createSlice } from '@reduxjs/toolkit'; // this method is use to create a reducer and action types, no more need of creating a personnal action
import { addCartItem, removeCartItem, clearCartItem } from './cart.utils';

// bear in mind that, with redux-persist, redux-toolkit uses initiatialState from the local storage if any, so whenever there is a change in InititiaState, clear the local storage to see the effect
const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart', // nameSpace like 'categories' in "categories/SET_CATEGORIES" old action
  initialState: CART_INITIAL_STATE,
  reducers: {
    // generating an action and a reducer in one go  // the call to setCartItems will be done with a ready payload
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    }, // function that receives a state, action and return an object // actionCreator function
    removeItemFromCart: (state, action) => {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setIsCartOpen,
} = cartSlice.actions; // this is an action creator; actions is one of the object returned  by the use of "createSlice", action generated;; the payload is implied
export const cartReducer = cartSlice.reducer;

////////////////
///////////////////////

/* import { CART_ACTION_TYPES } from './cart.types';

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
 */
