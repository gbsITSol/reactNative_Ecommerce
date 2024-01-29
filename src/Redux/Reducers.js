import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actions";

export const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload.item];

    // case REMOVE_FROM_CART:
    //   const deletedArray = [...state]
        
    //    deletedArray.state.filter((item, index) => index.Id !== action.payload.indexId);
    //   return deletedArray;
    // case REMOVE_FROM_CART:
    //   const updatedArray = state.filter(({item}) => item?.id !== action.payload.itemId);

    //   console.log(updatedArray,'ersdfghjkghrdjgfhgjh.k')
    //   return updatedArray;




 // reducers.js
case REMOVE_FROM_CART:
  const deletedArray = [...state];
  deletedArray.splice(action.payload.index, 1);
  return deletedArray;


   
    default:
      return state;
  }
};










