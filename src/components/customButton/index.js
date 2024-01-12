import { Pressable, Text } from 'react-native'
import { styles } from './styles'

const CustomButton = ({buttonTitle, onPressHandler}) => {

    return(
        <Pressable
            onPress={onPressHandler}
            style={({pressed})=>[
                styles.button,
                pressed && styles.buttonPressed
            ]}>

            <Text>
                {buttonTitle}
            </Text>

        </Pressable>
    )
}

export default CustomButton