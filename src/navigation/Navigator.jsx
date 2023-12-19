import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
 
import Categories from "../screens/Categories"
import ProductDetail from "../screens/ProductDetail"
import ProductsByCategory from "../screens/ProductsByCategory"

import { Header } from "../components"

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName="categories"
                screenOptions={
                    ({navigation})=>({
                        header: () => <Header navigation={navigation}/>
                    })
                }
            >                

                <Stack.Screen
                    name="categories"
                    component={Categories}
                />

                <Stack.Screen
                    name="products"
                    component={ProductsByCategory}
                />

                <Stack.Screen
                    name="product"
                    component={ProductDetail}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigator;
