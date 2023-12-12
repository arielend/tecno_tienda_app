import { FlatList, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors';

import categoriesMock from '../data/categories_data.json'
import Header from "../components/header/Header"
import CategoryItem from '../components/categoryItem/CategoryItem';

const Categories = ({onSelectCategory}) => {

    const renderCategoryItems = ({item}) => (
        <CategoryItem category={item} onSelectCategory={onSelectCategory}/>
    )

    //Sacar el onSelectCategory pasado por props al header
    return(
        <View style={styles.container}>
            <Header onSelectCategory={onSelectCategory}/>
            <Text style={styles.title}>Categorías</Text>
            <FlatList
                data={categoriesMock}
                renderItem={renderCategoryItems}
                keyExtractor={item=>item}
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