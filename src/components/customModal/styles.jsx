import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.darkBlueTransp,
        justifyContent: "center",
        alignItems: "center",        
    },

    modal: {
        padding: 15,
        rowGap: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.ligthGray,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.yellow,
        width: "85%",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalHeader: {},

    modalBody: {
        display: "flex",
        alignItems: "center",
    },

    modalFooter: {
        flexDirection: "row",
        columnGap: 15,
    },

    modalTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.orange
    },

    button: {
        backgroundColor: colors.skyBlue,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 3,
        borderColor: colors.darkGray,
        borderWidth: 1,
    },

    buttonPressed: {
        backgroundColor: colors.yellow,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 3,
        borderColor: colors.darkBlue,
        borderWidth: 1,
    },

    estilosPrueba: {},

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
