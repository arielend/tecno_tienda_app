import { StyleSheet, View, Text, Pressable, Image } from "react-native"
import { colors } from "../global/colors"
import { useState } from "react"
import userData from '../data/userData.json'
import { useSelector } from "react-redux"

const Account = ({navigation}) => {

    const image = useSelector(state => state.authReducer.profilePicture)

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Mi cuenta</Text>

            <View style={styles.imageContainer}>
                <Pressable
                    onPress={() => {navigation.navigate('imageSelector')}}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? colors.skyBlue
                                : colors.ligthGray,
                        },
                        styles.imageContainer,
                    ]}
                >
                    {image ? <Image
                            source={{uri:image}}
                            style={styles.profileImage}
                            resizeMode="contain"/>
                            : <Image
                            source={require("../../assets/img/profile_icon2.png")}
                            style={styles.profileImage}
                            resizeMode="contain"/>
                    }
                </Pressable>
            </View>

            <View style={styles.dataContainer}>
                <Text style={styles.textUserName}>Usuario: {userData.name}</Text>
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
        alignItems: 'center',
        paddingHorizontal: 20,
        rowGap: 15
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
        width: 150,
        height: 150,
        borderRadius: 150
    },

    dataContainer:{
        alignSelf: 'flex-start'
    },

    textUserName:{
        fontWeight: 'bold'
    },

    profileImage:{
        width: 150,
        height: 150,
        borderRadius: 150
    }

})