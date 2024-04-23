import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cartReducer';
import getProductReducer from './reducers/productReducer';
import getProductDetailsReducer from './reducers/productDetailReducer';

export  const store = configureStore({
    reducer : {
        cart: cartReducer,
        getProducts: getProductReducer,
        getProductDetails: getProductDetailsReducer
    }
})

export default store;