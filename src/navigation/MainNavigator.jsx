import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'

import { useDispatch, useSelector } from 'react-redux'
import { useGetProductsQuery } from '../services/shopService'
import { useGetProfilePictureQuery, useGetFavoriteItemsQuery } from '../services/userProfileService'

import { setProfilePicture, updateFavorites, setUserSessionData, setUserAddress } from '../features/authSlice'
import { setProducts } from '../features/shopSlice'

import { useGetUserAddressQuery } from '../services/userProfileService'

//Usar deleteSessions solo para borrar sesiones locales en producción
import { deleteSessions } from '../db'
import { getSessions } from '../db'

const MainNavigator = () => {

    //deleteSessions()

    const user = useSelector( state => state.authReducer.userEmail)
    const localId = useSelector( state => state.authReducer.localId)
    const { data: products } = useGetProductsQuery()
    const { data, error, isLoading } = useGetProfilePictureQuery(localId)
    const { data: favorites } = useGetFavoriteItemsQuery(localId)
    const { data: userAddressData, error: userAddressError, isLoading: isUserAddressLoading } = useGetUserAddressQuery(localId)

    const dispatch = useDispatch()

    useEffect(()=>{
        (
            async () => {
                try{
                    const sessions = await getSessions()
                    if(sessions?.rows.length){
                        console.log("Hay sesiones guardadas localmente")
                        const user = sessions.rows._array[0]
                        dispatch(setUserSessionData(user))                        
                    }
                    else{
                        console.log("No hay sesiones guardadas localmente")
                    }
                }
                catch(error){
                    console.log("Error a leer datos locales de sesión: ", error.message);
                }
            }
        )()
    },[])

    useEffect(()=>{
        if(data){
            dispatch(setProfilePicture(data.image))
        }
        if(userAddressData){
            dispatch(setUserAddress(userAddressData))
        }

    }, [data, userAddressData])

    useEffect(()=>{
        if(products){
            dispatch(setProducts(products))
        }

    }, [products])

    useEffect(()=>{
        if(favorites){
            dispatch(updateFavorites(favorites))
        } else{
            dispatch(updateFavorites([]))
        }
    }, [favorites])
    
    return(

        <NavigationContainer>
            {
                (user && !isLoading) ?
                <TabNavigator /> :
                <AuthNavigator />
            }            
        </NavigationContainer>

    )
}

export default MainNavigator