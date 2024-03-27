import {configureStore} from '@reduxjs/toolkit'
import { cartReducer } from "./reducers/cart";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;


