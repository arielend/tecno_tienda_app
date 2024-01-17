import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Input } from '../components'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import { useLoginMutation } from '../services/authService'

import { setUserSessionData } from '../features/authSlice'
import { useDispatch } from 'react-redux'

const Login = ({navigation}) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword] = useState('')
    const [ triggerLogin, result ] = useLoginMutation()   
    
    const onLoginHandler = () => {        
        triggerLogin({email: 'arielendrizzi78@gmail.com', password: '123456'})
    }
    
    const dispatch = useDispatch()

    useEffect (()=>{
        if(result.data){
            dispatch(setUserSessionData(result.data))
        }
    }, [result])

    return (
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