import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logoApp-re.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 500,
    textAlign:'center',
    justifyContent: 'center',
    alignContent:'center',
  },
})