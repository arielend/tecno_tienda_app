import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../../global/colors"

import Card from "../card/Card"

const CategoryItem = ({category, onSelectCategory}) => {

    return(
        <TouchableOpacity onPress={()=>onSelectCategory(category)}>
            <Card style={styles.categoryItemContainer}>
                <Text style={styles.cardText}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem


const styles = StyleSheet.create({

    categoryItemContainer:{
        backgroundColor: '#FFF',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cardText:{
        color: colors.ligthBlue,
        fontFamily: 'Comfortaa-Light',
        textTransform: 'capitalize',
        fontSize: 14,
    }

})