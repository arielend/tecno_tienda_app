import { Image, Pressable, View } from 'react-native'
import { styles } from './styles'

const Header = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>

            <Pressable onPress={navigation.popToTop}>
                <Image style={styles.headerIcons} source={require("./assets/home_icon3.png")} />
            </Pressable>

            <Image style={styles.headerLogo} source={require("./assets/isologo_tecnoTienda.png")} />

            <Pressable onPress={navigation.goBack}>
                <Image style={styles.headerIcons} source={require("./assets/back_icon3.png")} />
            </Pressable>

        </View>
    )
}

export default Header