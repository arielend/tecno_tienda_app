import { useState, useEffect } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { ProductItem, Searcher } from "../components"
import { colors } from "../global/colors"

import { useSelector } from "react-redux"

const ProductsByCategory = ({navigation}) => {

    const categoria = useSelector(state=>state.shopReducer.categorySelected)
    const productsByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)
    
    const [ productsToShow, setProductsToShow ] = useState([])
    const [ search, setSearch ] = useState('')

    useEffect(
        ()=>{
            const searchedProducts = productsByCategory.filter(p =>p.name.toLowerCase().includes(search.toLowerCase()))
            setProductsToShow(searchedProducts)
        },
        [search]
    )

    const onSearch = (search) => {
        setSearch(search)
    }
    
    const renderProductItem = ({item}) => (
        <View>
            <ProductItem navigation={navigation} {...item}/>     
        </View>
    )

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Categoría: {categoria}</Text>
            <Searcher onSearchHandler={onSearch}/>
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
        height: '100%'
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