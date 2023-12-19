import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({

    categoryItemContainer:{
        backgroundColor: colors.darkBlue,
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cardText:{
        color: 'white',
        fontFamily: 'Comfortaa-Regular',
        textTransform: 'capitalize',
        fontSize: 14,
    },

    cardImg:{
        
        width: 50,
        height: 50,
    },
})