import { FlatList, StyleSheet, Text, View, ScrollView, SafeAreaView, VirtualizedList } from "react-native";
import { colors } from "../global/colors";
import Card from "../components/card/Card";

const OrderDetail = ({route}) => {

    const order = route.params

    const renderOrderProducts = ({item}) => (
        <Card>
            <View style={styles.separator}></View>
            <Text>Descripción:   {item.shortName}</Text>
            <View style={styles.rowField}>
                <Text>Cant.: {item.quantity} u.</Text>
                <Text>Precio unit.: {item.price}</Text>
            </View>
            <Text style={styles.subTotalText}>Subtotal $ {item.price * item.quantity}</Text>
        </Card>
    )

    return (

        <View style={styles.container}>
        
            <Text style={styles.title}>Detalle de mi compra</Text>
            <Card style={styles.card}>
                <Text>Order ID: {order.orderId}</Text>
                <Text style={styles.centeredText}>Productos:</Text>
                <FlatList
                    data={order.orderItems}
                    renderItem={renderOrderProducts}
                    keyExtractor={item=>item.id}
                    style={{height: '75%'}}
                />                
                <View style={styles.separator}></View>
                <Text style={styles.centeredText}>Total compra: $ {order.orderTotal}</Text>
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

    rowField:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    subTotalText:{
        alignSelf: 'flex-end',
        fontWeight: 'bold'
    },

    title:{
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },

    centeredText:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.darkBlue
    },

    separator:{
        width: '95%',
        height: 2,
        marginVertical: 3,
        borderBottomColor: colors.ligthGray,
        borderBottomWidth: 2

    },
});