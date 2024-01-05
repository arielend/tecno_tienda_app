import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({
    // headerContainer: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     paddingTop: 45,
    //     paddingBottom: 15,
    //     paddingHorizontal: 15,        
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     backgroundColor: colors.ligthGray,
    //     borderBottomColor: colors.orange,
    //     borderBottomWidth: 2        
    // },

    headerContainer:{
        height: 90,
        position: 'relative'        
    },

    headerIcons: {
        width: 35,
        height: 35,
    },

    headerLogoView:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerLogo: {
        height: 31.2,
        width: 230,
        position: "absolute",
        top: 35,
    },

    home:{
        position: 'absolute',
        top: 35,
        left: 20
    },

    back:{        
        position: 'absolute',
        top: 35,
        right: 20
    }


})