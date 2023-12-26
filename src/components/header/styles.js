import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 45,
        paddingBottom: 15,
        paddingHorizontal: 15,        
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.ligthGray,
        borderBottomColor: colors.orange,
        borderBottomWidth: 2        
    },

    headerIcons: {
        width: 35,
        height: 35,
    },

    headerLogo: {
        height: 31.2,
        width: 230
    },

    home:{
    },

    back:{        
    }


})