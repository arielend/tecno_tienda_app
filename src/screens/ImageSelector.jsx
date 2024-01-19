import { useState } from 'react'
import { StyleSheet, Text, Image, View, Pressable } from 'react-native'
import { colors } from '../global/colors'
import { CustomButton } from '../components'
import { setProfilePicture } from '../features/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import { usePutProfilePictureMutation } from '../services/userProfileService'

const ImageSelector = ({navigation}) => {

    const localId = useSelector(state => state.authReducer.localId)
    const profilePicture = useSelector(state => state.authReducer.profilePicture)

    const [ image, setImage ] = useState('')

    const verifyCameraPermissions = async () =>  {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!granted) return false
        return true
    }

    const onTakePhotoHandler = async () => {
        const isCameraOk = await verifyCameraPermissions()

        if(isCameraOk){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1,1],
                base64: true,
                quality: 0.3
            })
            if(!result.canceled){
                setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            }            
        } else {
            console.log('No se han otorgado permisos para usar la cámara')
        }
    }

    const dispatch = useDispatch()

    const [ triggerSaveProfilePicture, result ] = usePutProfilePictureMutation()

    const onConfirmHandler = () => {
        dispatch(setProfilePicture(image))
        triggerSaveProfilePicture({image, localId})
        navigation.navigate('account')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi imagen de perfil</Text>
            {
                (profilePicture || image) ?
                <View>

                    <View style={styles.imageContainer}>                        
                        <Image
                            source={{uri:profilePicture||image}}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.buttonsContainer}>
                        <CustomButton
                            buttonTitle={'Tomar otra'}
                            onPressHandler={onTakePhotoHandler}
                        />
                        {/* Validamos que haya una foto en el estado para confirmar, si no se podría guardar una cadena vacía en lugar de una imagen */}
                        {
                            (!image && profilePicture) ? 
                            <CustomButton
                                buttonTitle={'Regresar'}
                                onPressHandler={()=>{navigation.goBack()}}
                            /> :
                            <CustomButton
                                buttonTitle={'Confirmar'}
                                onPressHandler={onConfirmHandler}
                            />
                        }

                    </View>
                </View>
                :
                <View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/img/noPhoto_icon3.png')}
                            style={styles.image}
                            resizeMode="contain"
                        />

                    </View>
                    <View style={styles.buttonsContainer}>
                        <CustomButton
                            buttonTitle={'Tomar una foto'}
                            onPressHandler={onTakePhotoHandler}
                        />
                    </View>
                </View>
            }            
        </View>
    )
}

export default ImageSelector

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

    image:{
        height: 150,
        width: 150,
        borderRadius: 200
    },

    imageContainer:{
        alignItems: 'center',
        borderRadius: 200,
        marginBottom: 30
    },

    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 20
    }


})