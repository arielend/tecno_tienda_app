import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountNavigator from "./AccountNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import ShopNavigator from "./ShopNavigator";
import { StyleSheet, Image } from "react-native";
import { colors } from "../global/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="ShopStack"
                backBehavior="history"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                style={styles.tabBarIcons}
                                source={
                                    focused
                                        ? require("./assets/shop_icon-active.png")
                                        : require("./assets/shop_icon-inactive.png")
                                }
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="CartStack"
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                style={styles.tabBarIcons}
                                source={
                                    focused
                                        ? require("./assets/cart_icon-active.png")
                                        : require("./assets/cart_icon-inactive.png")
                                }
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="OrdersStack"
                    component={OrdersNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                style={styles.tabBarIcons}
                                source={
                                    focused
                                        ? require("./assets/order_icon-active.png")
                                        : require("./assets/order_icon-inactive.png")
                                }
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="AccountStack"
                    component={AccountNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                style={styles.tabBarIcons}
                                source={
                                    focused
                                        ? require("./assets/account_icon-active.png")
                                        : require("./assets/account_icon-inactive.png")
                                }
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        height: 70,
        backgroundColor: colors.ligthGray,
        shadowColor: colors.darkGray,
        elevation: 1,
    },
    tabBarIcons: {
        height: 40,
        width: 40,
    },
});
