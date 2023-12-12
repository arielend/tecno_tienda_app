import { FlatList, StyleSheet, Text, View } from "react-native"
import productsData from '../data/products_data.json'
import CategoryItem from '../components/categoryItem/CategoryItem'
import ProductItem from '../components/productItem/ProductItem'

import { colors } from "../global/colors"
import Header from "../components/header/Header"
import { useState, useEffect } from "react"

const ProductsByCategory = ({category, onSelectCategory, onSelectedProductId}) => {
    
    const [ productByCategory, setProductsByCategory ] = useState()
    
    useEffect(
        ()=>{
            const filteredProducts = productsData.filter(product=>product.category === category)
            setProductsByCategory(filteredProducts)
        },
        [category]
    )
    
    const renderProductItem = ({item}) => (
        <View style={styles.container}>
            <ProductItem item={item} onSelectedProductId={onSelectedProductId}/>     
        </View>
    )

    //Sacar el onSelectCategory pasado por props al header y eliminar la prop recibida onSelectCategory
	return (
        
        <View>
            <Header onSelectCategory={onSelectCategory}/>
            <Text style={styles.title}>Productos</Text>
            <FlatList
                data={productByCategory}
                renderItem={renderProductItem}
                keyExtractor={item=>item.id}            
            />
        </View>
    )
}

export default ProductsByCategory

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
    },

    title:{
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },
})
