import { StyleSheet, Image, Dimensions, View } from 'react-native'

const map_api_key = process.env.EXPO_PUBLIC_MAP_API_KEY

const MapPreview = ({location, nearStore}) => {

    const storeIcon = 'https://i.postimg.cc/HW41Q6b5/store-Location-icon3.png'
    const userIcon = 'https://i.postimg.cc/sgLkVqRF/user-Location-icon3.png'
    const urlPreview = `https://maps.googleapis.com/maps/api/staticmap?zoom=auto&size=300x300&mapType=roadmap&markers=icon:${userIcon}%7C${location.latitude},${location.longitude}&markers=icon:${storeIcon}%7C${nearStore.latitude},${nearStore.longitude}&path=color:0x0000ff%7C${location.latitude},${location.longitude}%7C${nearStore.latitude},${nearStore.longitude}&key=${map_api_key}`

    return (
        <View>
            <Image
            style={styles.mapImage}
                source={{uri:urlPreview}}
            />
        </View>
    )
}

export default MapPreview

const styles = StyleSheet.create({

    mapImage:{
        width: Dimensions.get('window').width * 0.9,
        height: 300
    },
})