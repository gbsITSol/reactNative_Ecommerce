
// import { createStore, combineReducers } from 'redux';
// import { cartReducer, wishlistReducer } from './Reducers';

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   wishlist: wishlistReducer,
// });

// const store = createStore(rootReducer);

// export default store;

// store.js
import { createStore, combineReducers } from 'redux';
import { reducers } from './Reducers';
import { wishlistReducer } from './Reducer2';
import { AddressReducers } from './AddressReducer';
import { orderReducer } from './OrderReducers';


const rootReducer = combineReducers({
  reducers,
   wishlistReducer,
   AddressReducers,
   orderReducer
  // ... other reducers
});

const store = createStore(rootReducer);

export default store;
