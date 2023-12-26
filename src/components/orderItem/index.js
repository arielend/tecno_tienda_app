import { Image, Text, View, TouchableOpacity } from "react-native"
import { styles } from './styles'
import Card from "../card/Card";

const OrderItem = ({ id, orderDate, orderProducts, orderTotal, navigation }) => {
    const formatDate = () => {
        function padStart(value, length) {
            return String(value).padStart(length, "0");
        }

        const date = new Date(orderDate).getDate();
        const month = padStart(new Date(orderDate).getMonth() + 1, 2);
        const year = new Date(orderDate).getFullYear();
        return `${date}/${month}/${year}`;
    }

    return (
        <Card style={styles.card}>
            <View>
                <Text>ID compra: {id}</Text>
                <Text>Fecha compra: {formatDate()} </Text>
				<Text>Total: $ {orderTotal}</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate("OrderDetail", {id, orderDate, orderTotal, orderProducts})}}
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