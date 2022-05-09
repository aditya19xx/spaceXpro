import {configureStore} from "@reduxjs/toolkit";
import dataReducer from './DataSlice';

const store = configureStore({
    reducer: {
        cart: dataReducer 
    }
})

export default store;