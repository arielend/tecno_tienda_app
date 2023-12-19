import { Text, View, TouchableOpacity, Image } from "react-native"
import { styles } from './styles'
import { Card } from '../../components'

const ProductItem = ({navigation, id, name, price, img}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('product', {id})}>
        <Card style={styles.productItemContainer}>
            <View style={styles.info}>
                <Text style={styles.productTitle}>{name}</Text>
                <Text style={styles.productPrice}>$ {price}</Text>
            </View>
            <View>
                <Image
                    style={styles.productImage}
                    resizeMode="cover"
                    source={{uri:img}}
                />
            </View>            
        </Card>
        </TouchableOpacity>
    )
}

export default ProductItem