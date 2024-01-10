import { Text, View, TextInput } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

const Input = ({label, onChange, error = '', isSecure = false}) => {

    const [ input, setInput ] = useState()

    const onChangeTextHandler = (text) => {
        setInput(text)
        onChange(text)
    }

    return(
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={input}
                onChange={onChangeTextHandler}
                secureTextEntry={isSecure}            
            />
            {
                error && <Text style={styles.error}>{error}</Text>
            }
        </View>
    )
}

export default Input