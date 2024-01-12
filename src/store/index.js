import { configureStore } from "@reduxjs/toolkit"
import shopReducer from '../features/shopSlice'
import cartReducer from '../features/cartSlice'
import { setupListeners } from "@reduxjs/toolkit/query"
import { shopApi } from "../services/shopServices"

const store = configureStore({
    reducer: {
        cartReducer,
        shopReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store