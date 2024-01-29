import { StyleSheet, View, Text, FlatList } from "react-native"
import { colors } from "../global/colors"
import { OrderItem } from "../components"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Orders = ({navigation}) => {

    const userOrders = useSelector( state => state.shopReducer.userOrders)
    const [ orders, setOrders ] = useState([])
    
    useEffect(()=>{
        if(userOrders){
            setOrders(userOrders)
        }
    },[userOrders])
    
    const renderOrderItem = ({item}) => {
        return <OrderItem {...item} navigation={navigation}/>
    }

    return(
        <>
        {
            (userOrders.length !== 0) ?
            <View style={styles.container}>
                <Text style={styles.title}>Mis Compras</Text>
                {
                    <FlatList
                    data={orders}
                    renderItem={renderOrderItem}
                    keyExtractor={(item)=> item.orderId}/>
                }
            </View>:
            <View style={styles.container}>
                <Text style={styles.title}>Mis Compras</Text>
                <Text style={styles.message}>Aún no has comprado nada</Text>
            </View>

        }
        </>        
    )
}

export default Orders

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#FFF',
        marginBottom: 110,
        alignItems: 'center',
        height: '100%'
    },

    title:{
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },

    message:{
        marginTop: 230,
        color: colors.ligthBlue,
        fontSize: 16
    },    

})