import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Screen2 = (props) => {
    const {navigation} = props;

    const clickNe = () => {
        navigation.navigate('Screen1')
    }
  return (
    <View>
      <Text>Screen2</Text>
      <Pressable style = {styles.pressMe} onPress={clickNe}>
        <Text style = {{  color: '#ffff'}}>Go to screen 1</Text>
      </Pressable>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    pressMe: {
        marginTop: 16,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
    },
})