import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Input, CustomModal } from '../components'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import { useLoginMutation } from '../services/authService'

import { setUserSessionData } from '../features/authSlice'
import { useDispatch } from 'react-redux'

import { insertSession } from '../db'

const Login = ({navigation}) => {

    const [ modalVisible, setModalVisible ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ error, setError ] = useState('')
    const [ password, setPassword] = useState('')
    const [ triggerLogin, result ] = useLoginMutation()

    const onLoginHandler = () => {
        if(!email || !password){
            setError("Complete ambos campos para continuar")
            setModalVisible(!modalVisible)
        }else{
            triggerLogin({email, password})
        }
    }

    const handleError = (error) => {
        let err = ''
        switch(error.message){
            case 'INVALID_EMAIL':
                err = "Debe ingresar un email válido"
                break
            case 'MISSING_PASSWORD':
                err = "Contraseña requerida"
                break
            case 'INVALID_LOGIN_CREDENTIALS':
                err = "Revise su usuario y contraseña"
                break
        }
        setError(err)
        setModalVisible(!modalVisible)
    }
    
    const dispatch = useDispatch()

    useEffect (()=>{
        if(result?.data){
            dispatch(setUserSessionData(result.data))
            insertSession({
                userEmail: result.data.email,
                idToken: result.data.idToken,
                localId: result.data.localId
            })
        }
        if(result?.error){
            handleError(result.error.data.error)            
        }
    }, [result])

    return (
        <>
        <View style={styles.loginContainer}>

            <View style={styles.loginForm}>
                <Input
                    label={'Correo electrónico: '}
                    onChange={setEmail}
					error=''
                    isSecure={false}
                />

                <Input
					label={'Contraseña: '}
					onChange={setPassword}
					error=''
					isSecure={true}
				/>

				<Pressable
                    onPress={onLoginHandler}
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Text>Ingresar</Text>
                </Pressable>
            </View>

            <View style={styles.loginNavigation}>
                <Text style={styles.text}>¿Aún no tienes una cuenta?</Text>
                <Pressable
                    onPress={() => {navigation.navigate('Signup')}}
                >
                    <Text style={styles.link}>Registrate</Text>
                </Pressable>
            </View>

        </View>
        <CustomModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            modalTitle={'Algo salió mal'}
            modalMessage={error}
            showCancelButton={false}
            cancelButtonTitle={''}
            confirmButtonTitle={'Aceptar'}
            confirmButtonHandler={()=>setModalVisible(!modalVisible)}
            />
        </>
    )
}

export default Login

const styles = StyleSheet.create({

    loginContainer: {
		flex: 1,
		backgroundColor: colors.darkBlue,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 30
	},

	loginForm:{
		width: '90%',
		rowGap: 25,
		alignItems: 'center'
	},

	loginNavigation:{
        alignItems: 'center'
    },

	text:{
		fontSize: 12,
		color: colors.orange
	},

	link:{
		fontSize: 12,
		color: colors.yellow
	},

	button:{
        backgroundColor: colors.ligthGray,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        borderColor: colors.darkGray,
        borderWidth: 2
    },

    buttonPressed:{
        backgroundColor: colors.skyBlue,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        borderColor: colors.darkBlue,
        borderWidth: 2
    },
})