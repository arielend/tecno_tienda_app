import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "auth",
    initialState:{
        userEmail: '',
        idToken:''
    },
    reducers:{
        setUserSessionData:(state, action) => {
            state.userEmail = action.payload.email,
            state.idToken = action.payload.idToken
        },
        clearUserSessionData: state => {
            state.userEmail = '',
            state.idToken = ''
        }
    }
})

export const { setUserSessionData } = authSlice.actions
export default authSlice.reducer