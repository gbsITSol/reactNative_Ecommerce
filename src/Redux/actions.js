export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const DELETE_ADDRESS = 'DELETE_ADDRESS';

export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = "DELETE_ORDER";





export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: { item },
});


// actions.js
export const removeFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payload: { index },
});




export const addToWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: { item },
});



export const removeFromWishlist = (indexId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: { indexId },
});





export const addAddress = data => ({
  type: ADD_ADDRESS,
  payload: data,
});


export const deleteAddress = index => ({
  type: DELETE_ADDRESS,
  payload: index,
});



export const addOrder = data => ({
  type: ADD_ORDER,
  payload: data,
});


export const deleteOrder = index => ({
  type: DELETE_ORDER,
  payload: index,
});