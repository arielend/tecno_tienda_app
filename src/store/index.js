import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import cartReducer from '../features/cartSlice'
import shopReducer from '../features/shopSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../services/shopService'
import { authApi } from '../services/authService'
import { userProfileApi } from '../services/userProfileService'

const store = configureStore({
    reducer: {
        authReducer,
        cartReducer,
        shopReducer,
        [authApi.reducerPath]: authApi.reducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [userProfileApi.reducerPath]: userProfileApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(shopApi.middleware).concat(userProfileApi.middleware)
})

setupListeners(store.dispatch)

export default store