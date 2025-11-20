import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'

export const store = configureStore({
    reducer:{
        Cart: cartReducer
    }
})


//The reducer property tells Redux how to manage and update the state of your application.
//reducer: { Cart: cartReducer } means your store will have a state slice called Cart.
//cartReducer is responsible for handling all updates related to that Cart state.