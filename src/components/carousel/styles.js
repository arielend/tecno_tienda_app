import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        height: 300
    },

    slide:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    image:{
        width: width-100,
        height: 300        
    },

    prevArrow:{
        width: 40,
        height: 40,
        position: 'relative',
        left: -30
    },

    nextArrow:{
        width: 40,
        height: 40,
        position: 'relative',
        right: -30
    },    

})