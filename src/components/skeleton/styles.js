import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        rowGap: 40,
        alignItems: "center",
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.ligthBlue,
    },

})