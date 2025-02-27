import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'WishList',
    initialState:[],
    reducers:{
        // add to wishlist
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        //remove from wishlist
        removeItem:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        }
    }
})
export const{addToWishlist,removeItem}=wishlistSlice.actions
export default wishlistSlice.reducer