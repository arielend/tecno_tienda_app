import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "auth",
    initialState:{
        userEmail: '',
        idToken:'',
        userAddress: {
            latitude:'',
            longitude: '',
            address: '',
            locality: '',
            province: '',
            country: ''
        },
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
            state.idToken = '',
            state.localId = ''
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload
        },
        updateFavorites: (state, action) => {
            const favsUpdated = action.payload
            state.favorites = favsUpdated            
        },
        setUserAddress: (state, action) => {
            state.userAddress = {
                address: action.payload.address,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                locality: action.payload.locality,
                province: action.payload.province,
                country: action.payload.country
            }
            console.log("La dirección del usuario es: ", state.userAddress);
        }
    }
})

export const { setUserSessionData, setProfilePicture, setUserAddress, updateFavorites, clearUserSessionData } = authSlice.actions
export default authSlice.reducer