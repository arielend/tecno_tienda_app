import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { Skeleton } from './src/components'
import MainNavigator from './src/navigation/MainNavigator'

import { init } from './src/db'

import { Provider } from 'react-redux'
import store from './src/store'

export default function App() {

	init()
	.then(()=>(console.log("DB inicializada correctamente")))
	.catch(error=>{
		console.log("Fallo al conectar a la BD: ", error.message);
	})

	const [fontLoaded] = useFonts({
		'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
		'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
		'Comfortaa-Medium': require('./assets/fonts/Comfortaa-Medium.ttf'),
		'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf')
	})

	if (!fontLoaded) {
		return <Skeleton />
	}

	return (
		<>
			<Provider store={store}>
				<MainNavigator />
			</Provider>
			<StatusBar />
		</>
	)
}