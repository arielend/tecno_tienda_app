import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create ({
    cardContainer: {
        shadowColor: colors.darkBlue,
        shadowOffset: { height: 10, width: 10 },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
    }
})