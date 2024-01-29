// import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actions";






// export const wishlistReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TO_WISHLIST:
//       return [...state, action.payload.item];






//        // reducers.js
// case REMOVE_FROM_WISHLIST:
//   const deletedArray = [...state];
//   deletedArray.splice(action.payload.index, 1);
//   return deletedArray;

//     default:
//       return state;
//   }
// };





import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actions";

export const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload.item];

       // reducers.js
case REMOVE_FROM_WISHLIST:
  const deletedArray = [...state];
  deletedArray.splice(action.payload.index, 1);
  return deletedArray;

    default:
      return state;
  }
};
