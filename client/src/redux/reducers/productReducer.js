import axios from 'axios';
import { createSlice } from "@reduxjs/toolkit";



const productSlice= createSlice({
    name: 'product',
    initialState:{products: []  } , 
    
    reducers: {
        getProductsSuccess(state, action){
            return { products: action.payload } }
        ,
        getProductsFail(state , action) {
            return { error: action.payload }
        } 

    }

})

export const {getProductsSuccess , getProductsFail } = productSlice.actions;
export default productSlice.reducer


//Thunk

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products`);
        dispatch(getProductsSuccess(data));

    } catch (error) {
        dispatch(getProductsFail(error.response));
    }
};