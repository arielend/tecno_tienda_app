import { Image, Pressable, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const Header = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity 
                onPress={navigation.popToTop}
                style={styles.home}
                activeOpacity={0.65}
            >
                <Image style={styles.headerIcons} source={require("./assets/home_icon3.png")} />
            </TouchableOpacity>
            <Image style={styles.headerLogo} source={require("./assets/isologo_tecnoTienda.png")} />
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