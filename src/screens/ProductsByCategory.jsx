import { useState, useEffect } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { ProductItem, Searcher, Skeleton } from "../components"
import { colors } from "../global/colors"
import { useSelector } from "react-redux"
import { useGetProductsByCategoryQuery } from "../services/shopServices"

const ProductsByCategory = ({navigation}) => {

    const categoria = useSelector(state=>state.shopReducer.categorySelected)    
    const { data: productsByCategory, isLoading, error } = useGetProductsByCategoryQuery(categoria)
    const [ productsToShow, setProductsToShow ] = useState([])
    const [ search, setSearch ] = useState('')

    useEffect(
        ()=>{
            if(!isLoading){
                const productsValues = Object.values(productsByCategory)
                const searchedProducts = productsValues.filter(p =>p.name.toLowerCase().includes(search.toLowerCase()))
                setProductsToShow(searchedProducts)
            }
        },
        [search, isLoading]
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
        <>
        {
            isLoading ?
            <Skeleton/>
            :
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
        }
        </>
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