
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './Cartd'
export const store=configureStore({

reducer:{
  cart:cartReducer,
}


})
