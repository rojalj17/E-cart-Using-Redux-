import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            return state.filter((item)=>item.id != action.payload)
        },
        emptycart :(state)=>{
            return state
        }
    }
})
export const {addToCart,removeFromCart,emptycart} = cartSlice.actions
export default cartSlice.reducer