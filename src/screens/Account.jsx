import { StyleSheet, View, Text, Pressable, Image } from "react-native"
import { colors } from "../global/colors"
import { useState } from "react"
import userData from '../data/userData.json'

const Account = () => {

    const [ image, setImage ] = useState()

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Pressable
                    onPress={() => {}}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? colors.skyBlue
                                : colors.ligthGray,
                        },
                        styles.imageContainer,
                    ]}
                >
                    {image ? (
                        <Image />
                    ) : (
                        <Image
                            style={styles.profileImage}
                            source={require("../../assets/img/profile_icon2.png")}
                        />
                    )}
                </Pressable>
            </View>

            <View style={styles.dataContainer}>
                <Text>Usuario: {userData.name}</Text>
                <Text>Tipo de usuario: {userData.role}</Text>
                <Text>Nivel cuenta: {userData.level}</Text>
                <Text>Domicilio: {userData.address}</Text>
                <Text>Ciudad: {userData.city}</Text>
            </View>

        </View>
    );
}

export default Account

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#FFF',
        height: '100%',
        flexDirection: 'row',
        padding: 20,
        columnGap: 10
    },

    title:{
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'center',
        color: colors.ligthBlue,
    },

    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 100
    },

    dataContainer:{

    },

    profileImage:{
        width: 100,
        height: 100
    }

})