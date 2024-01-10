import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors'
import { Input } from '../components'
import { useState } from 'react'
import { useSignUpMutation } from '../services/authService'

const SignUp = ({navigation}) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirm, setPasswordConfirm ] = useState('')

    const [ triggerSignUp, result ] = useSignUpMutation()

    const onSignUpHandler = () => {
        triggerSignUp({email, password})
    }

    return (
        <View style={styles.signupContainer}>

            <View style={styles.signupForm}>
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

                <Input 
                    label={'Confirmar contraseña: '}
                    onChange={setPasswordConfirm}
                    error=''
                    isSecure={true} 
                />

                <Pressable
                    onPress={onSignUpHandler}
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Text>Registrarse</Text>
                </Pressable>
            </View>

            <View style={styles.signupNavigation}>
                <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
                <Pressable
                    onPress={() => {navigation.navigate('Login')}}
                >
                    <Text style={styles.link}>Inicia sesión</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    signupContainer: {
        flex: 1,
        backgroundColor: colors.darkBlue,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30      
    },

    signupForm:{
		width: '90%',
        rowGap: 25,
        alignItems: 'center'
	},

    signupNavigation:{
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
