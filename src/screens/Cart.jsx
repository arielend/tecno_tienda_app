import { StyleSheet, FlatList, Text, View, Pressable } from "react-native"
import { colors } from "../global/colors"
import { CartItem } from "../components"
import { useSelector } from "react-redux"

const Cart = () => {

    const cartItems = useSelector(state => state.cartReducer.items)
    console.log(cartItems)
    console.log("El carrito tiene ", cartItems.length, " elementos")

    const totalBudget = useSelector(state => state.cartReducer.totalBudget)

    const renderCartItems = ({item}) => {

        return(
            <View>
                <CartItem {...item}/>
            </View>
        )
    }
    
    return (
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
                style={({pressed})=>[
                    styles.button,
                    pressed && styles.buttonPressed
                ]}                
                >
                    <Text>Comprar</Text>
                </Pressable>
            </View>
        </View>
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