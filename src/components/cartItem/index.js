import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Card from '../card/Card'

const CartItem = ({ id, shortName, name, thumbnail, price, quantity, onRemoveItem }) => {

    return (
        <Card style={styles.card}>
            <View style={styles.rowSection}>
                <Text style={styles.itemName}>{shortName}</Text>
                <TouchableOpacity
                    activeOpacity={0.65}
                    onPress={()=>onRemoveItem(id)}
                >
                    <Image
                        style={styles.icons}
                        source={require("./assets/trash_icon.png")}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.separator}></View>
            
            <View style={styles.rowSection}>
                <View style={styles.viewImage}>
                    <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{
                        uri: thumbnail,
                    }}
                />
                </View>
                <View style={styles.viewDescription}>
                    <Text style={styles.itemDescription}>{name}</Text>
                    <Text style={styles.itemQuantity}>Cantidad: {quantity}</Text>
                    <Text style={styles.itemPrice}>Precio unitario: $ {price}</Text>
                </View>
            </View>

            <View style={styles.separator}></View>

            <View style={styles.rowSectionRight}>
                <Text style={styles.subtotal}>Subtotal: $ {price * quantity}</Text>
            </View>
        </Card>
    )
}

export default CartItem