import { StyleSheet, FlatList, Text, View, Pressable } from "react-native"
import { colors } from "../global/colors"
import { CartItem, CustomModal } from "../components"
import { useSelector } from "react-redux"
import { usePostOrderMutation } from '../services/shopServices'
import { useState } from "react"
import { clearCart } from "../features/cartSlice"
import { useDispatch } from "react-redux"

const Cart = ({navigation}) => {

    const [ modalVisible, setModalVisible ] = useState(false)

    const cartItems = useSelector(state => state.cartReducer.items)   

    const totalBudget = useSelector(state => state.cartReducer.totalBudget)

    const [ triggerPost, result ] = usePostOrderMutation()

    const dispatch = useDispatch()

    const launchModal = () => {
        setModalVisible(!modalVisible)
    }
    
    const confirmCart = () => {
        triggerPost({totalBudget, cartItems, user: 'testUser'})
        setModalVisible(!modalVisible)
        dispatch(clearCart())        
        navigation.navigate("OrdersStack", {Screen: "Orders"})
    }

    const renderCartItems = ({item}) => {

        return(
            <View>
                <CartItem {...item} navigation={navigation}/>
            </View>
        )
    }
    
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Mi Carrito</Text>

                <FlatList
                    data={cartItems}
                    renderItem={renderCartItems}
                    keyExtractor={(item) => item.id}
                />

                <View style={styles.buySection}>
                    <Text style={styles.total}>Mi compra: $ {totalBudget}</Text>
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
            </View>

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
    );
}

export default Cart

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

    total:{
        fontSize: 14,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },

    buySection:{
        height: 70,        
        flexDirection: 'row',
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