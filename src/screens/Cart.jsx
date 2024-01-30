import { StyleSheet, FlatList, Text, View, Pressable } from "react-native"
import { colors } from "../global/colors"
import { CartItem, CustomModal } from "../components"
import { useSelector } from "react-redux"
import { usePutOrderMutation } from "../services/shopService"
import { useEffect, useState } from "react"
import { clearCart, removeItemFromCart } from "../features/cartSlice"
import { updateUserOrders } from "../features/shopSlice"
import { useDispatch } from "react-redux"


const Cart = ({navigation}) => {

    const [ modalVisible, setModalVisible ] = useState(false)
    const [ actualDate, setActualDate ] = useState(Date.now())
    const [ cartItems, setCartItems ] = useState([])
    const localId = useSelector(state => state.authReducer.localId)
    const cartItemsState = useSelector(state => state.cartReducer.items)
    const userOrders = useSelector( state => state.shopReducer.userOrders)
    const totalBudget = useSelector(state => state.cartReducer.totalBudget)
    const [ triggerPutOrder, result] = usePutOrderMutation()
    const dispatch = useDispatch()
    
    const launchModal = () => {
        setModalVisible(!modalVisible)
    }

    const formatDate = () => {
        const orderDate = new Date(actualDate)
        function padStart(value, length) {
            return String(value).padStart(length, "0");
        }
        const date = new Date(orderDate).getDate();
        const month = padStart(new Date(orderDate).getMonth() + 1, 2);
        const year = new Date(orderDate).getFullYear();
        return `${date}/${month}/${year}`;
    }

    const generateOrderId = () => {
        let number = Math.random()
        let string = number.toString(16)
        let id = string.slice(-8)
        return id
    }

    useEffect(()=> {
        if(cartItemsState){
            setCartItems(cartItemsState)
        }
    },[cartItemsState])    
    
    const confirmCart = () => {        
        const order = {
            orderId: generateOrderId(),
            orderDate: formatDate(),
            orderStatus: 'created',
            payStatus: 'pending',
            orderItems: cartItems,
            orderTotal: totalBudget            
        }
        const ordersUpdated = [...userOrders, order]
        triggerPutOrder({localId, ordersUpdated})
        dispatch(updateUserOrders(ordersUpdated))
        setModalVisible(!modalVisible)
        dispatch(clearCart())        
        navigation.navigate("OrdersStack", {Screen: "Orders"})
    }

    const onRemoveItemHandler = (id) => {
        dispatch(removeItemFromCart(id))
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems)
    }

    const renderCartItems = ({item}) => {
        return(
            <View>
                <CartItem {...item} navigation={navigation} onRemoveItem={onRemoveItemHandler}/>
            </View>
        )
    }
    
    return (
        <>
            {
                (cartItems.length !== 0) ? 
                    <View style={styles.container}>
                        <Text style={styles.title}>Mi Carrito</Text>

                        <FlatList
                            data={cartItems}
                            renderItem={renderCartItems}
                            keyExtractor={(item) => item.id}
                        />

                        <View style={styles.buySection}>
                            <Text style={styles.total}>Total carrito: $ {totalBudget}</Text>
                            <Pressable
                                onPress={launchModal} 
                                style={({pressed})=>[
                                    styles.button,
                                    pressed && styles.buttonPressed
                                    ]
                                }
                            >
                                <Text>Comprar</Text>
                            </Pressable>
                        </View>
                    </View> :
                    <View style={styles.container}>
                        <Text style={styles.title}>Mi Carrito</Text>
                        <Text style={styles.message}>No hay nada en tu carrito</Text>
                    </View>
            }

            <CustomModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            modalTitle={'Atención'}
            modalMessage={'¿Confirma la compra?'}
            showCancelButton={true}
            cancelButtonTitle={'Regresar'}
            confirmButtonTitle={'Confirmar'}
            confirmButtonHandler={confirmCart}
            />
        </>
    )
}

export default Cart

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

    total:{
        fontSize: 14,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },

    buySection:{
        height: 70,
        justifyContent: 'space-around',
        alignItems: 'center',
    }, 
    
    button:{
        backgroundColor: colors.ligthGray,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 3,
        borderColor: colors.darkGray,
        borderWidth: 1
    },

    buttonPressed:{
        backgroundColor: colors.skyBlue,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 3,
        borderColor: colors.darkBlue,
        borderWidth: 1
    }

})