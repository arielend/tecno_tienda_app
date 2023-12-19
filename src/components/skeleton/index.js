import { useEffect, useState } from "react"
import { Animated, View, Text } from "react-native"
import { styles } from './styles'

const Skeleton = () => {
    const [spinValue] = useState(new Animated.Value(0))

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    })

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            })
        ).start()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cargando</Text>
            <Animated.Image
                style={{
                    width: 50,
                    height: 50,
                    transform: [{ rotate: spin }]
                }}
                source={require("./assets/spiner.png")}
            />
        </View>
    )
}

export default Skeleton