import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({
    productItemContainer: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
	},

    info:{
        width: 260,
    },

    productTitle: {
        color: colors.darkBlue,
	},

    productPrice: {
        color: colors.orange,
	},

    productImage:{
        width: 80,
        height: 80,
    }
})