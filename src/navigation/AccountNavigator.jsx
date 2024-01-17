import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from '../components'
import Account from '../screens/Account'
import ImageSelector from '../screens/ImageSelector'

const Stack = createNativeStackNavigator()

const AccountNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="account"
            screenOptions={
                ({navigation})=>({
                    header: () => <Header navigation={navigation}/>
                })
            }
        >
            <Stack.Screen
                name="account"
                component={Account}
            />

            <Stack.Screen
                name="imageSelector"
                component={ImageSelector}
            />

        </Stack.Navigator>       
    )
}

export default AccountNavigator