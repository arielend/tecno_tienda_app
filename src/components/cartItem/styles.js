import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },

    rowSection: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center', 
        width: '90%'
    },

    separator:{
        width: '95%',
        height: 2,
        marginVertical: 3,
        borderBottomColor: colors.ligthGray,
        borderBottomWidth: 2

    },

    viewImage:{
        width: '30%',
    },

    viewDescription:{
        width: '70%',
    },

    icons: {
        width: 30,
        height: 30,
    },

    image:{
        width: 85,
        height: 85
    },

    rowSectionRight:{
        width: '90%',
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    itemName:{
        fontSize: 14,
        fontWeight: 'bold'
    },

    itemDescription:{
        fontSize: 13
    },

    itemQuantity:{
        fontSize: 12,
        color: colors.darkGray
    },
    
    itemPrice:{
        fontSize: 13,
        color: colors.orange
    },

    subtotal:{
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.ligthBlue
    }
})