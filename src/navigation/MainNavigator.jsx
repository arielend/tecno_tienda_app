import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'

import { useGetProductsQuery, useGetUserOrdersQuery } from '../services/shopService'
import { useGetProfilePictureQuery, useGetFavoriteItemsQuery, useGetUserAddressQuery } from '../services/userProfileService'

import { setProfilePicture, updateFavorites, setUserSessionData, setUserAddress } from '../features/authSlice'
import { setProducts, updateUserOrders } from '../features/shopSlice'

import { getSessions } from '../db'

const MainNavigator = () => {

    const user = useSelector( state => state.authReducer.userEmail)
    const localId = useSelector( state => state.authReducer.localId)
    const { data, error, isLoading } = useGetProfilePictureQuery(localId)
    const { data: products } = useGetProductsQuery()
    const { data: favorites } = useGetFavoriteItemsQuery(localId)
    const { data: userOrders } = useGetUserOrdersQuery(localId)
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

    useEffect(()=>{
        if(userOrders){
            dispatch(updateUserOrders(userOrders))
        }

    },[userOrders])
    
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