import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    cartCount: 0,
}

const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart: (state,action) => {
// we can add a item to addtocart , then this same item cannot be added repeatedly to addtocart.
// here checking if item existing ,cannot be push ,not exist push to the cartItems
            const newItem = action.payload
            const existingItem = state.cartItems.find(
                item => item.id === newItem.id)
                if(!existingItem){
                    state.cartItems.push(newItem)
                    state.cartCount+=1
                }    
         },
        incrementCartCount: (state,action) => { 
           // action.payload is the data that is sent when the action is dispatched.
            //The ID that comes through the action is set to the variable itemId.
            //itemId → Saves the ID that came from action.payload.
             //item → Finds the item from the cart list that has the same ID(itemId).
            const itemId = action.payload
            const item = state.cartItems.find(item=> item.id === itemId)
            if(item){
                item.count++
            }
        },
        decrementCartCount: (state,action) => { 
            const itemId = action.payload
            const item = state.cartItems.find(item=> item.id === itemId)
            if(item && item.count > 1){
                item.count--
            }
        },
        removeFromCart: (state,action) => {
           // console.log("Cart item removed",action.payload)
            const itemId = action.payload
            const existingItem = state.cartItems.find(
                item => item.id === itemId)
                if (existingItem){
                    state.cartItems = state.cartItems.filter(item => 
                        item.id!== itemId)
                    state.cartCount = state.cartItems.length
                }
        }
    }
})

export const {
    addToCart,incrementCartCount,decrementCartCount,removeFromCart} = cartSlice.actions
export default cartSlice.reducer;
