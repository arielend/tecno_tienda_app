import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigation'
import { useState } from 'react'

const MainNavigator = () => {

    const [ user, setUser ] = useState('')

    return(
        <NavigationContainer>

            {
                user ?
                <TabNavigator/>
                :
                <AuthNavigator/>
            }

        </NavigationContainer>
    )
}

export default MainNavigator
