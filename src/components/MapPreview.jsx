import { StyleSheet, Image, Dimensions, View } from 'react-native'

import { map_api_key } from '../cloudService/googleClouds'

const MapPreview = ({location, nearStore}) => {

    return (
        <View style={styles.container}>
            <Image
            style={styles.mapImage}
                source={{uri:`https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=300x300&mapType=roadmap&markers=color:blue%7Clabel=I%7C${location.latitude},${location.longitude}&key=${map_api_key}`
                }}
            />
        </View>
    )
}

export default MapPreview

const styles = StyleSheet.create({

    container:{
        
    },

    mapImage:{
        // width: Dimensions.get('window').width,
        width: 300,
        height: 300
    },
})