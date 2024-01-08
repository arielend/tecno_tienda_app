import { FlatList, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import { CategoryItem } from '../components'
import { useGetCategoriesQuery } from '../services/shopServices'

const Categories = ({navigation}) => {
    
    const { data: categories } = useGetCategoriesQuery()

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
        marginBottom: 45
    },

    title:{
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },

})