import { StyleSheet, View, Text } from "react-native"
import { colors } from "../global/colors"

const Account = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mi Cuenta</Text>        
        </View>
    )
}

export default Account

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#FFF',
        height: '100%'
    },

    title:{
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },

})