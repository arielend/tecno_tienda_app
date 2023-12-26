import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from "../components"
import Orders from '../screens/Orders'
import OrderDetail from '../screens/OrderDetail'

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={({ navigation }) => ({
                header: () => <Header navigation={navigation} />,
            })}>
                
                <Stack.Screen 
                name="Orders"
                component={Orders}
                />

                <Stack.Screen
                name="OrderDetail"
                component={OrderDetail}
                />
            
        </Stack.Navigator>
    );
}

export default OrdersNavigator