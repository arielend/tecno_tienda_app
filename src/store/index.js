import { configureStore } from "@reduxjs/toolkit"
import shopReducer from '../features/shopSlice'
import { authApi } from "../services/authService"
import { setupListeners } from "@reduxjs/toolkit/query"

const store = configureStore({
    reducer: {
        shopReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware().concat(authApi.middleware)
    }

})

setupListeners(store.dispatch)

export default store