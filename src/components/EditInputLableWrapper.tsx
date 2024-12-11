import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const EditInputLableWrapper = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      {props.children}
    </View>
  )
}

export default EditInputLableWrapper

const styles = StyleSheet.create({
    container:{
        gap: 10,
        paddingHorizontal: 5,
    },
    label:{
        fontSize: 16,
        fontFamily: 'AvenirNextCyr-Medium',
        color: Colors.text,
    }
})