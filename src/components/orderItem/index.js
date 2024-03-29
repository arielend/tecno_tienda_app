import { Image, Text, View, TouchableOpacity } from "react-native"
import { styles } from './styles'
import Card from "../card/Card";

const OrderItem = ({ orderDate, orderId, orderTotal, orderItems, navigation }) => {
    
    return (
        <Card style={styles.card}>
            <View>
                <Text>ID compra: {orderId}</Text>
                <Text>Fecha compra: {orderDate}</Text>
                <Text>Total: $ {orderTotal}</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate("OrderDetail", {orderId, orderDate, orderItems, orderTotal})}}
                    style={styles.home}
                    activeOpacity={0.65}
                >
                    <Image
                        style={styles.searchIcons}
                        source={require("./assets/search_icon3.png")}
                    />
                </TouchableOpacity>
            </View>
        </Card>
    );
};

export default OrderItem