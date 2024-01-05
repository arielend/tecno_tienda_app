import { Text, View, TextInput, Image, Pressable } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

const Searcher = ({onSearchHandler}) => {

    const [ inputSearch, setInputSearch ] = useState('')
    const [ error, setError ] = useState('')

    const searchHandler = () => {
        const regEx = /[^\w\s]/

        if(regEx.test(inputSearch)){
            setError('Ingresar letras o numeros')
            setInputSearch('')
        }
        else{
            setError('')
            onSearchHandler(inputSearch)
        }
    }
    
    const clearSearch = () => {        
        setInputSearch('')
        setError('')
        onSearchHandler('')
    }

    return (
        <>
        <View style={styles.container}>
            <TextInput
                placeholder={"Buscar producto"}
                placeholderTextColor="#FFF"
                style={styles.textInput}
                onChangeText={setInputSearch}
                value={inputSearch}
                cursorColor={"orange"}
                maxLength={25}
            />
            <Pressable onPress={()=>searchHandler(inputSearch)}>
            <Image
                style={styles.searchIcons}
                resizeMode="cover"
                source={require("./assets/search_icon4.png")}
            />
            </Pressable>
            <Pressable onPress={()=>clearSearch()}>
            <Image
                style={styles.searchIcons}
                resizeMode="cover"
                source={require("./assets/x_icon4.png")}
            />
            </Pressable>

        </View>
        {
            error && <View><Text style={styles.inputAlert}>{error}</Text></View>
        }
        </>
    )
}

export default Searcher