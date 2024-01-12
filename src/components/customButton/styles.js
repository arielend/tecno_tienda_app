import { StyleSheet } from 'react-native'
import { colors } from '../../global/colors'

export const styles = StyleSheet.create({

    button:{
        backgroundColor: colors.ligthGray,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 3,
        borderColor: colors.darkGray,
        borderWidth: 1
    },

    buttonPressed:{
        backgroundColor: colors.skyBlue,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 3,
        borderColor: colors.darkBlue,
        borderWidth: 1
    },

})