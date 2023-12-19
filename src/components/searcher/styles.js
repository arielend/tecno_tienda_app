import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container:{
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        height: 40,
    },

    searchIcons: {
        width: 40,
        height: 40
    },
    
    textInput: {
        borderRadius: 12,
        paddingLeft: 15,
        backgroundColor: "#006D7777",
        width: 290,
        color: "#FFF",
    },

    inputAlert:{
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold'
    }
})