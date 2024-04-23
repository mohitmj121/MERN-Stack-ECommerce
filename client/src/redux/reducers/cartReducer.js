import axios from 'axios';
import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name: 'cart',
    initialState:{ cartItems: []} , 
    
    reducers: {
        add(state, action){
            const item = action.payload;

            const existItem = state.cartItems.find(product => product.id === item.id);
            
            if(existItem){;
                return {...state, cartItems: state.cartItems.map(x => x.id === existItem.id ? { ...x, quantity: x.quantity + 1 } : x)}
            } 
            else {
                return  { cartItems: [...state.cartItems, { ...item, quantity: 1 }]}
            }
        } ,

        
        remove(state, action){
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)}
        },

        removeOne(state,action){
            let a1 = state.cartItems.find(i => i.id===action.payload.id)
            if(!a1){
                return state}

            if(a1.quantity>1){
                return {...state , cartItems:state.cartItems.map(i=>( i.id===action.payload.id ? {...i, quantity:i.quantity-1} :i))}
                             }
            if(a1.quantity===1){
                return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload.id)}

            }

        }
    }

})

export const {add , remove , removeOne} = cartSlice.actions;
export default cartSlice.reducer


//Thunk

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`/product/${id}`);

        dispatch(add({ ...data, quantity }));

    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch(remove(id))

};