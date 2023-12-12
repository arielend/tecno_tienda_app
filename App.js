import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font'

import Categories from './src/screens/Categories'
import ProductsByCategory from './src/screens/ProductsByCategory'
import ProductDetail from './src/screens/ProductDetail'
import { useState } from 'react'


export default function App() {

  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  const onSelectCategory = (category, id) =>{
    if(category && id === undefined){
      setCategorySelected(category)      
    }
    if(category === '' && id === undefined){
      setCategorySelected('')
      setProductIdSelected('')
    }
  }

  const onSelectedProductId = (id) => {
    setProductIdSelected(id)    
  }

  const [fontLoaded] = useFonts({
    'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
    'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
    'Comfortaa-Medium': require('./assets/fonts/Comfortaa-Medium.ttf'),
    'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf')
  })

  if(!fontLoaded) {
    return <ActivityIndicator/>
  }

  return (
    <View>
      {
        productIdSelected ?
          <ProductDetail productIdSelected={productIdSelected} onSelectCategory={onSelectCategory}/> :
            categorySelected ?
            <ProductsByCategory category={categorySelected} onSelectedProductId={onSelectedProductId} onSelectCategory={onSelectCategory}/>//Sacar el onSelectCategory
            : <Categories onSelectCategory={onSelectCategory}/> 
      }
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
