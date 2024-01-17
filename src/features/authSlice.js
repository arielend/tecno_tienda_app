import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "auth",
    initialState:{
        userEmail: '',
        idToken:'',
        profilePicture: '',
        localId: '',
        favorites: []
    },
    reducers:{
        setUserSessionData:(state, action) => {
            state.userEmail = action.payload.email,
            state.idToken = action.payload.idToken,
            state.localId = action.payload.localId
        },
        clearUserSessionData: state => {
            state.userEmail = '',
            state.idToken = ''
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload
        },
        updateFavorites: (state, action) => {
            const favsUpdated = action.payload
            state.favorites = favsUpdated            
        },
    }
})

export const { setUserSessionData, setProfilePicture, updateFavorites } = authSlice.actions
export default authSlice.reducer