

import { ADD_ORDER, DELETE_ORDER } from "./actions";

export const orderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];

       // reducers.js
case DELETE_ORDER:
  const deletedArray = [...state];
  deletedArray.splice(action.payload.index, 1);
  return deletedArray;

    default:
      return state;
  }
};
