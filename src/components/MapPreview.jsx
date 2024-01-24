import { StyleSheet, Image, Dimensions, View } from 'react-native'

import { map_api_key } from '../cloudService/googleClouds'

const MapPreview = ({location, nearStore}) => {

    const storeIcon = 'https://i.postimg.cc/HW41Q6b5/store-Location-icon3.png'
    const userIcon = 'https://i.postimg.cc/sgLkVqRF/user-Location-icon3.png'
    const urlPreview = `https://maps.googleapis.com/maps/api/staticmap?zoom=auto&size=300x300&mapType=roadmap&markers=icon:${userIcon}%7C${location.latitude},${location.longitude}&markers=icon:${storeIcon}%7C${nearStore.latitude},${nearStore.longitude}&path=color:0x0000ff%7C${location.latitude},${location.longitude}%7C${nearStore.latitude},${nearStore.longitude}&key=${map_api_key}`

    return (
        <View style={styles.container}>
            <Image
            style={styles.mapImage}
                source={{uri:urlPreview}}
            />
        </View>
    )
}

export default MapPreview

const styles = StyleSheet.create({

    container:{
        
    },

    mapImage:{
        width: Dimensions.get('window').width * 0.9,
        // width: 300,
        height: 300
    },
})