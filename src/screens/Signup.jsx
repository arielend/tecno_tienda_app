import { StyleSheet, View, KeyboardAvoidingView, Text, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { colors } from '../global/colors'
import { Input } from '../components'
import { setUserSessionData } from '../features/authSlice'
import { useSignupMutation } from '../services/authService'
import { signupSchema } from '../validations/signupSchema'

const Signup = ({navigation}) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirm, setPasswordConfirm ] = useState('')
    const [ emailError, setEmailError ] = useState()
    const [ passwordError, setPasswordError ] = useState('')
    const [ passwordConfirmError, setPasswordConfirmError ] = useState('')

    const [ triggerSignup, result ] = useSignupMutation()
    
    const onSignupHandler = () => {
        setEmailError('')
        setPasswordError('')
        setPasswordConfirmError('')

        try {
            signupSchema.validateSync({email, password, passwordConfirm}, {abortEarly: false})
            triggerSignup({email, password})
        } catch (error) {
            error.errors.map(
                e => {
                    const customError = Object.values(e)[0]
                    switch(Object.keys(e)[0]){
                        case 'empty_email':
                            setEmailError(customError)
                            break

                        case 'email_format':
                            setEmailError(customError)
                            break

                        case 'password_format':
                            setPasswordError(customError)
                            break

                        case 'empty_password':
                            setPasswordError(customError)
                            break

                        case 'empty_pass_confirm':
                            setPasswordConfirmError(customError)
                            break

                        case 'password_match':
                            setPasswordConfirmError(customError)
                            break

                        default: 
                            break
                    }
                }
            )
        }
    }

    const dispatch = useDispatch()

    useEffect (()=>{
        if(result.data){
            dispatch(setUserSessionData(result.data))
        }
    }, [result])

    return(

        <KeyboardAvoidingView style={styles.container} behavior='height'>

            <View style={styles.form}>
                <Input
                    label={'Correo electrónico: '}
                    onChange={setEmail}
                    error={emailError}
                    isSecure={false}
                />

                <Input 
                    label={'Contraseña: '}
                    onChange={setPassword}
                    error={passwordError}
                    isSecure={true} 
                />

                <Input 
                    label={'Confirmar contraseña: '}
                    onChange={setPasswordConfirm}
                    error={passwordConfirmError}
                    isSecure={true} 
                />

                <Pressable
                    onPress={onSignupHandler}
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Text>Registrarse</Text>
                </Pressable>
            </View>

            <View style={styles.navigation}>
                <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
                <Pressable
                    onPress={() => {navigation.navigate('Login')}}
                >
                    <Text style={styles.link}>Inicia sesión</Text>
                </Pressable>
            </View>

        </KeyboardAvoidingView>
    )
}
export default Signup

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.darkBlue,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30      
    },

    form:{
		width: '90%',
        rowGap: 25,
        alignItems: 'center'
	},

    navigation:{
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
        borderRadius: 5,
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