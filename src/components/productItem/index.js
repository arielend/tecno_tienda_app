import { Text, View, TouchableOpacity, Image } from "react-native"
import { styles } from './styles'
import Card from '../../components/card/Card'

import { useDispatch } from "react-redux"
import { setProductIdSelected, setProductSelectedById } from "../../features/shopSlice"

const ProductItem = ({navigation, id, name, price, thumbnail}) => {

    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={()=>{
            dispatch(setProductIdSelected(id))
            dispatch(setProductSelectedById(id))
            navigation.navigate('product', {id})
            }}>
        <Card style={styles.productItemContainer}>
            <View style={styles.info}>
                <Text style={styles.productTitle}>{name}</Text>
                <Text style={styles.productPrice}>$ {price}</Text>
            </View>
            <View>
                <Image
                    style={styles.productImage}
                    resizeMode="cover"
                    source={{uri:thumbnail}}
                />
            </View>            
        </Card>
        </TouchableOpacity>
    )
}

export default ProductItem