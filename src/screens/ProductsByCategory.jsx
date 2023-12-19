import { useState, useEffect } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { ProductItem } from "../components"
import { Searcher } from "../components"
import { colors } from "../global/colors"

import tiendaData from '../data/tecnotienda_prodData.json'

const ProductsByCategory = ({navigation, route}) => {

    const { title } = route.params

    const [ productsToShow, setProductsToShow ] = useState([])
    const [ search, setSearch ] = useState('')

    useEffect(
        ()=>{
            const filteredProducts = tiendaData.filter(product=>product.category === title)
            const searchedProducts = filteredProducts.filter(product=>product.name.toLowerCase().includes(search.toLowerCase()))
            setProductsToShow(searchedProducts)
        },
        [title, search]
    )

    const onSearch = (search) => {
        setSearch(search)
    }
    
    const renderProductItem = ({item}) => (
        <View style={styles.container}>
            <ProductItem navigation={navigation} {...item}/>     
        </View>
    )

    return (
        
        <View>
            <Searcher onSearchHandler={onSearch}/>
            <Text style={styles.title}>Categoría: {title}</Text>
            {productsToShow.length === 0 && <View><Text style={styles.message}>Sin productos que mostrar</Text></View>}
            <FlatList
                data={productsToShow}
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

    message:{
        textAlign: 'center',
        marginTop: 180,
        color: colors.darkBlue,
        fontSize: 16,
        fontWeight: 'bold'
    }
})