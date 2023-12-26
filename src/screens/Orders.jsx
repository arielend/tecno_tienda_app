import { StyleSheet, View, Text, FlatList } from "react-native"
import { colors } from "../global/colors"
import ordersData from '../data/tecnotienda_ordersData.json'
import { OrderItem } from "../components"

const Orders = ({navigation}) => {

    const renderOrderItem = ({item}) => (
        <OrderItem {...item} navigation={navigation}/>
    )

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mis Compras</Text>

            <FlatList
                data={ordersData}
                renderItem={renderOrderItem}
                keyExtractor={(item)=> item.id}
            />

        </View>
    )
}

export default Orders

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#FFF',
        marginBottom: 110,
    },

    title:{
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },

    

})