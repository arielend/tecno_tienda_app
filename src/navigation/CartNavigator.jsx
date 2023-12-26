import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from "../components"
import Cart from '../screens/Cart'

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={
                ({navigation})=>({
                    header: () => <Header navigation={navigation}/>
                })
            }
        >
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>       
    )
}

export default CartNavigator