import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { colors } from "../../global/colors"
import Card from "../card/Card"

const ProductItem = ({ item, onSelectedProductId }) => {
    return (
        <TouchableOpacity onPress={()=>onSelectedProductId(item.id)}>
        <Card style={styles.productItemContainer}>
            <View style={styles.info}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>U$D {item.price}</Text>
            </View>
            <View>
                <Image
                    style={styles.productImage}
                    resizeMode="cover"
                    source={{uri:item.thumbnail}}
                />
            </View>            
        </Card>
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    productItemContainer: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
	},

    info:{
        width: 260,
    },

    productTitle: {
        color: colors.darkBlue,
	},

    productPrice: {
        color: colors.orange,
	},

    productImage:{
        width: 80,
        height: 80,
    }
})
