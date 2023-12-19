import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { Skeleton } from './src/components'

import Navigator from './src/navigation/Navigator'

export default function App() {

	const [fontLoaded] = useFonts({
		'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
		'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
		'Comfortaa-Medium': require('./assets/fonts/Comfortaa-Medium.ttf'),
		'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf')
	})

	if (!fontLoaded) {
		return <Skeleton/>
	}

	return (
		<>
			<Navigator />
			<StatusBar />
		</>
	)
}