import { StyleSheet, Text, View, Image } from 'react-native'
import productsData from '../data/products_data.json'

import Header from '../components/header/Header'


const ProductDetail = ({productIdSelected, onSelectCategory}) => {

    const product = productsData.find(item=>item.id === productIdSelected)

    return (
        <View>
            <Header onSelectCategory={onSelectCategory}/>
            <Text>Detalles del Producto</Text>
            <Text>{product.title}</Text>
            <Text>Precio: U$D {product.price}</Text>
            <Image
                    style={styles.productImage}
                    resizeMode="cover"
                    source={{uri:product.thumbnail}}
                />
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({

    container: {
        fontSize: 14,
    },

    productImage:{
        width: 200,
        height: 200,
    }
})