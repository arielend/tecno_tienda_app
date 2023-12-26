import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BottomTabBar } from "@react-navigation/bottom-tabs"
 
import Categories from "../screens/Categories"
import ProductDetail from "../screens/ProductDetail"
import ProductsByCategory from "../screens/ProductsByCategory"

import { Header } from "../components"

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
        

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
    )
}

export default ShopNavigator;
