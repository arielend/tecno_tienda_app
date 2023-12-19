import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { colors } from '../global/colors'
import { CategoryItem } from '../components'
import categoriesTienda from '../data/tecnotienda_catData.json'

const Categories = ({navigation}) => {

    const [ categories, setCategories ] = useState(categoriesTienda)

    const renderCategoryItems = ({item}) => (
        <View>
            <CategoryItem navigation={navigation} {...item}/>
        </View>
    )

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Categorías</Text>
            <FlatList
                data={categories}
                renderItem={renderCategoryItems}
                keyExtractor={item=>item.id}
            />            
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#FFF',
    },

    title:{
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },

})