import { Image, Pressable, StyleSheet, Text, Touchable, View } from 'react-native'
import {colors} from '../../global/colors'
import React from 'react'

const Header = ({onSelectCategory}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable >
        <Image style={styles.headerIcon} source={require("./assets/menu_icon3.png")}/>       
      </Pressable>
      <Image style={styles.headerLogo} source={require("./assets/isologo_tecnoTienda.png")}/>
      <Pressable onPress={()=>onSelectCategory('')}>
        <Image style={styles.headerIcon} source={require("./assets/home_icon3.png")}/>       
      </Pressable>
    </View>
  )
} 

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 45,
        paddingBottom: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',        
        backgroundColor: colors.ligthGray,
        borderBottomColor: colors.orange,
        borderBottomWidth: 2,
    },

    headerIcon:{
      width: 35,
      height: 35,
    },

    headerLogo:{
      height: 31.2,
      width: 230,
    }
})