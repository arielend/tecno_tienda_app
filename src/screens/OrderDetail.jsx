import { FlatList, StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { colors } from "../global/colors";
import Card from "../components/card/Card";

const OrderDetail = ({route}) => {

    const renderOrderProducts = ({item}) => (
        <Card>
            <View style={styles.separator}></View>
            <Text>{item.shortName}</Text>
            <Text>{item.quantity} u.</Text>
            <Text>Subtotal $ {item.price}</Text>
        </Card>
    )

    return (

        <ScrollView style={styles.container}>
        
            <Text style={styles.title}>Detalle de mi compra</Text>
            <Card style={styles.card}>
                <Text>ID: {route.params.id}</Text>
                <Text>Fecha: {route.params.orderDate}</Text>
                <Text>Productos:</Text>
                <FlatList
                    data={route.params.orderProducts}
                    renderItem={renderOrderProducts}
                    keyExtractor={item=>item.id}
                    nestedScrollEnabled
                />
                <View style={styles.separator}></View>
                <Text>Total compra: $ {route.params.orderTotal}</Text>
            </Card>
            
        </ScrollView>

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