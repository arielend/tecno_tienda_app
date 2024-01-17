import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../screens/Login'
import Signup from '../screens/Signup'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='Signup'
                component={Signup}                
            />

            <Stack.Screen
                name='Login'
                component={Login}                
            />

        </Stack.Navigator>       
    )
}

export default AuthNavigator