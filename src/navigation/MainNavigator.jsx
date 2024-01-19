import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'

import { useDispatch, useSelector } from 'react-redux'
import { useGetProfilePictureQuery } from '../services/userProfileService'
import { useGetFavoriteItemsQuery } from '../services/userProfileService'
import { setProfilePicture } from '../features/authSlice'
import { updateFavorites } from '../features/authSlice'
import { setUserSessionData } from '../features/authSlice'

//Usar deleteSessions solo para borrar sesiones en producción
import { deleteSessions } from '../db'
import { getSessions } from '../db'
import { Skeleton } from '../components'

const MainNavigator = () => {

    //deleteSessions()

    const user = useSelector( state => state.authReducer.userEmail)
    const [ userStored, setUserStored  ] = useState()
    const localId = useSelector( state => state.authReducer.localId)
    const { data, error, isLoading } = useGetProfilePictureQuery(localId)
    const { data: favorites } = useGetFavoriteItemsQuery(localId)
    const dispatch = useDispatch()

    const [ readingLocalDB, setReadingLocalDB ] = useState(true)

    useEffect(()=>{
        (
            async () => {
                try{
                    const sessions = await getSessions()
                    console.log("Lo que hay guardado en sessions DB: ", sessions.rows._array)
                    if(sessions?.rows.length){
                        console.log("Hay sesiones guardadas")
                        const user = sessions.rows._array[0]
                        console.log("User in storage: ", user)
                        setUserStored(user)
                        dispatch(setUserSessionData(user))
                        setReadingLocalDB(false)
                    }
                    else{
                        console.log("No hay usuarios locales guardados")
                        setReadingLocalDB(false)
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
    }, [data])

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