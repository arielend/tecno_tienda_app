import { StyleSheet } from "react-native"
import { colors } from '../../global/colors'

export const styles = StyleSheet.create({
    
    inputContainer:{
        justifyContent: 'center',
        width: '70%'
    },

    label:{
        fontSize: 12,
        color: 'white'        
    },

    input:{
        fontSize: 12,
        paddingVertical: 4,
        paddingLeft: 10,
        borderColor: colors.yellow,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.ligthGray
    },

    error:{
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.orange,
        textAlign: 'center'
    },

})