import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';



const productSlice= createSlice({
    name: 'productDetail',
    initialState:{products: []  } , 
    
    reducers: {
        getProductDetailsRequest(state, action){
            return { loading: true }}
        ,
        getProductDetailSuccess(state , action) {
            return { loading: false, product: action.payload }
        } ,
        getProductDetailFail(state , action) {
            return {loading: false,error: action.payload}
        } ,
        getProductDetailReset(state , action) {
            return {product: {}}
        } 

    }

})

export const {getProductDetailsRequest,getProductDetailSuccess , getProductDetailFail,getProductDetailReset} = productSlice.actions;
export default productSlice.reducer

//Thunk

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch(getProductDetailsRequest());
        const { data } = await axios.get(`/product/${id}`);
        dispatch(getProductDetailSuccess(data));

    } catch (error) {
        dispatch(getProductDetailFail(error.response));
    }
};


export const removeProductDetails = () => (dispatch) => {  
    dispatch(getProductDetailReset());
};