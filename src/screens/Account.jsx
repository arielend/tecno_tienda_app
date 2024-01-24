import { StyleSheet, View, ScrollView, Text, Pressable, Image } from 'react-native'
import { colors } from '../global/colors'
import userData from '../data/userData.json'
import { useSelector, useDispatch } from 'react-redux'
import { CustomButton } from '../components'
import { deleteUserSessionDB } from '../db'
import { clearUserSessionData } from '../features/authSlice'
import LocationSelector from '../components/LocationSelector'


const Account = ({navigation}) => {

    const image = useSelector(state => state.authReducer.profilePicture)

    const userAddress = useSelector(state => state.authReducer.userAddress)

    const localId = useSelector( state => state.authReducer.localId)

    const dispatch = useDispatch()

    const onLogoutHandler = () => {
        deleteUserSessionDB({localId})
        dispatch(clearUserSessionData())
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}>

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
            </View>

            {
                userAddress && 
                <View style={styles.lastLocationContainer}>
                    <Text style={styles.lastLocationTitle}>Última ubicación guardada</Text>
                    <Text style={styles.lastLocationText}>{userAddress.address}</Text>
                </View>
            }


            <View>
                <LocationSelector/> 
            </View>

            <View style={styles.logutContainer}>
                <CustomButton
                    buttonTitle={'Cerrar sesión'}
                    onPressHandler={()=>onLogoutHandler()}
                />
            </View>
            
        </ScrollView>
    );
}

export default Account

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        rowGap: 5
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
        borderRadius: 150
    },

    lastLocationContainer:{
        backgroundColor: colors.ligthBlue,
        borderRadius: 10,
        padding: 5,
        alignItems: 'center'
    },

    lastLocationTitle:{
        fontWeight: 'bold',
        color: 'white'
    },

    lastLocationText:{
        textAlign: 'center'
    },

    dataContainer:{
        alignSelf: 'flex-start'
    },

    logutContainer:{
        justifyContent: 'center',
        alignItems: 'center'
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