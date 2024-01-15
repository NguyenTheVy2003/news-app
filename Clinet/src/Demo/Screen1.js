import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'

const Screen1 = (props) => {

    const {navigation} = props;

    const clickNe = () => {
        navigation.navigate ('Screen2')
    } 
  return (
    <View style = {{ padding: 24}}>
      <Text>Screen1</Text>
      <Pressable style = {styles.pressMe} onPress={clickNe}>
        <Text style = {{  color: '#ffff'}}>Go to screen 2</Text>
      </Pressable>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    pressMe: {
        marginTop: 16,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 10,
    },
})