import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { CustomButton, Skeleton } from '../components'
import MapPreview from './MapPreview'
import { map_api_key } from '../cloudService/googleClouds'
import { setUserAddress } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { usePutUserAddressMutation } from '../services/userProfileService'
import { getDistance } from 'geolib'

const LocationSelector = () => {

    const [ location, setLocation ] = useState()
    const [ address, setAddress ] = useState()
    const [ locality, setLocality ] = useState()
    const [ province, setProvince ] = useState()
    const [ country, setCountry ] = useState()
    const [ error, setError ] = useState()
    const [ storeDistance, setStoreDistance ] = useState()
    const storeLocation = {latitude:-34.9136569,longitude:-57.9535207}
    const localId = useSelector(state => state.authReducer.localId)
    
    const [ triggerPutUserAddress, result ] = usePutUserAddressMutation()

    useEffect(()=>{
        (
            async()=>{
                let { status } = await Location.requestForegroundPermissionsAsync()
                if(status !== 'granted'){
                    setError('No se han otorgado permisos para acceder a la ubicación')
                    return
                }
                let location = await Location.getCurrentPositionAsync()

                setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude})
            }
        )()
    }, [])

    useEffect(()=>{
        (
            async () => {
                try{
                    if(location?.latitude){
                        const urlReverseGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${map_api_key}`
                        const response = await fetch(urlReverseGeocoding)
                        const data = await response.json()
                        const formattedAddress = await data.results[0].formatted_address

                        const distance = getDistance(
                            {latitude: location.latitude, longitude: location.longitude},
                            {latitude: storeLocation.latitude, longitude: storeLocation.longitude}
                        )

                        setStoreDistance(distance)
                        setLocality(data.results[0].address_components.find( (i) => i.types.find( e => e === 'locality')).long_name)
                        setProvince(data.results[0].address_components.find( (i) => i.types.find( e => e === 'administrative_area_level_1')).long_name)
                        setCountry(data.results[0].address_components.find( (i) => i.types.find( e => e === 'country')).long_name)
                        setAddress(formattedAddress)
                    }
                }
                catch(error){
                    console.log(error.message);
                }
            }
        )()
    },[location])

    const dispatch = useDispatch()

    const onLocationUpdateHandler = () => {

        const userAddress = {
            address: address,
            latitude: location.latitude,
            longitude: location.longitude,
            locality: locality,
            province: province,
            country: country
        }
        dispatch(setUserAddress(userAddress))
        triggerPutUserAddress({userAddress, localId})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi ubicación</Text>
            {
                location ?
                <>
                <Text> Dirección: {address} </Text>
                <Text> País: {country} </Text>
                <Text>Provincia: {province} </Text>
                <Text>Localidad: {locality} </Text>
                <Text>La tienda más cercana esta a {storeDistance} metros </Text>
                <CustomButton
                    buttonTitle={'Actualizar ubicación'}
                    onPressHandler={onLocationUpdateHandler}
                />
                <MapPreview location={location} nearStore={storeLocation}/>
                <Text>
                    (Lat: {location.latitude}, Long: {location.longitude})
                </Text>
                </> :
                <Skeleton/>
            }
        </View>
    )
}

export default LocationSelector

const styles = StyleSheet.create({

    container:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 130,
        gap: 5
    },

})