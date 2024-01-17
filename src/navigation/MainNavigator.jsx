import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'

import { useDispatch, useSelector } from 'react-redux'
import { useGetProductsQuery } from '../services/shopService'
import { useGetProfilePictureQuery } from '../services/userProfileService'
import { useGetFavoriteItemsQuery } from '../services/userProfileService'
import { setProfilePicture } from '../features/authSlice'
import { setProducts } from '../features/shopSlice'
import { updateFavorites } from '../features/authSlice'

const MainNavigator = () => {

    const user = useSelector( state => state.authReducer.userEmail)
    const localId = useSelector( state => state.authReducer.localId)
    const { data: products } = useGetProductsQuery()
    const { data, error, isLoading } = useGetProfilePictureQuery(localId)
    const { data: favorites } = useGetFavoriteItemsQuery(localId)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(data){
            dispatch(setProfilePicture(data.image))
        }
    }, [data])

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