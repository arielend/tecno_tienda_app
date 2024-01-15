import { NavigationContainer } from '@react-navigation/native'
import { useState } from 'react'

import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'

import { useSelector } from 'react-redux'

const MainNavigator = () => {

    const user = useSelector( state => state.authReducer.userEmail)
    
    return(

        <NavigationContainer>
            {
                user ?
                <TabNavigator /> :
                <AuthNavigator />
            }            
        </NavigationContainer>

    )
}

export default MainNavigator