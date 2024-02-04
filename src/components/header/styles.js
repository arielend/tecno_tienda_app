import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

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