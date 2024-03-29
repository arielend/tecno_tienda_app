import { Image, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const Header = () => {

    const navigation = useNavigation()
    
    return (
        <View style={styles.headerContainer}>

            <TouchableOpacity
                onPress={navigation.popToTop}
                style={styles.home}
                activeOpacity={0.65}
            >
                <Image style={styles.headerIcons} source={require("./assets/home_icon3.png")} />
            </TouchableOpacity>

            <View style={styles.headerLogoView}>
                <Image style={styles.headerLogo} source={require("./assets/isologo_tecnoTienda.png")} />
            </View>

            {
                navigation.canGoBack() &&
                <TouchableOpacity
                    onPress={navigation.goBack}
                    style={styles.back}
                    activeOpacity={0.65}
                >
                    <Image style={styles.headerIcons} source={require("./assets/back_icon3.png")} />
                </TouchableOpacity>
            }

        </View>
    )
}

export default Header