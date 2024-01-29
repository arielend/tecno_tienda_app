import { FlatList, StyleSheet, Text, View, ScrollView, SafeAreaView, VirtualizedList } from "react-native";
import { colors } from "../global/colors";
import Card from "../components/card/Card";

const OrderDetail = ({route}) => {

    const order = route.params

    const renderOrderProducts = ({item}) => (
        <Card>
            <View style={styles.separator}></View>
            <Text>{item.shortName}</Text>
            <Text>{item.quantity} u.</Text>
            <Text>Subtotal $ {item.price * item.quantity}</Text>
        </Card>
    )

    return (

        <View style={styles.container}>
        
            <Text style={styles.title}>Detalle de mi compra</Text>
            <Card style={styles.card}>
                <Text>ID: {order.orderId}</Text>
                <Text>Productos:</Text>
                <FlatList
                    data={order.orderItems}
                    renderItem={renderOrderProducts}
                    keyExtractor={item=>item.id}
                    style={{height: '75%'}}
                />                
                <View style={styles.separator}></View>
                <Text>Total compra: $ {order.orderTotal}</Text>
            </Card>
            
        </View>

    );
};

export default OrderDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },

    card:{
        padding: 10,
        margin: 10,
        backgroundColor: '#FFF',
    },

    title:{
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },

    separator:{
        width: '95%',
        height: 2,
        marginVertical: 3,
        borderBottomColor: colors.ligthGray,
        borderBottomWidth: 2

    },
});