import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View ,Dimensions} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewDetail2 = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_back}>
        <View>
          <Image style={styles.back} source={require('../media/ic_back.png')}></Image>
        </View>
        <View style={styles.container_back}>
          <Image style={styles.back} source={require('../media/ic_share.png')}></Image>
          <Image style={styles.back} source={require('../media/ic_outline.png')}></Image>
        </View>
      </View>
      <View style={styles.container_bbc}>
        <View style={styles.container_bbc_title}>
          <Image style={styles.bbc_icon} source={require('../media/ic_bbc.png')}></Image>
          <View style={{ marginStart: 4, }}>
            <Text style={[styles.bbc_title, styles.bbc_title2]}>BBC News</Text>
            <Text style={styles.bbc_title}>14m ago</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bbc_button}>
          <Text style={styles.bbc_button_following} >Following</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={{ marginTop: 16 }} 
        horizontal={false} // chiều
        showsHorizontalScrollIndicator={false} // thanh cuộn
        showsVerticalScrollIndicator={false} // thanh cuộn
      >
        <Image style={styles.img_tau} source={require('../media/ic_tau.png')}></Image>
        <View style={styles.container_img_title}>
          <View>
            <Text style={styles.img_title}>Europe</Text>
            <Text style={[styles.img_title, styles.img_title2]}>Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil</Text>
          </View>
          <View>
            <Text  style={[styles.img_title3,styles.img_title3]}>
              Ukrainian President Volodymyr Zelensky has accused
               European countries that continue to buy Russian oil 
               of "earning their money in other people's blood".

              In an interview with the BBC, President Zelensky singled 
              out Germany and Hungary, accusing them of blocking efforts 
              to embargo energy sales, from which Russia stands to make up 
              to £250bn ($326bn) this year.

              There has been a growing frustration among Ukraine's leadership
               with Berlin, which has backed some sanctions against Russia but 
               so far resisted calls to back tougher action on oil sales.
            </Text>
          </View>
        </View>
       
      </ScrollView>
      <View style = {styles.container_coment}>
          <View style = {styles.container_coment_like}> 
            <Image style = {{height: 24, width: 24}}source={require('../media/ic_love.png')}></Image>
            <Text style = {styles.text_coment}>24.5k</Text>
            <Image  style = {{height: 24, width: 24,marginStart: 14}} source={require('../media/ic_coment.png')}></Image>
            <Text style = {styles.text_coment}>1k</Text>
          </View>
          <View>
            
          </View>
          <View>
            <Image  style = {{height: 24, width: 24,marginEnd: 16}} source={require('../media/ic_backBook.png')}></Image>
          </View>
        </View>
    </View>
  )
}

export default NewDetail2

const styles = StyleSheet.create({
  text_coment: {
    marginStart: 4,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    fontFamily : 'Poppins'
  },
  container_coment_like: {
      flexDirection: 'row',
      marginStart: 8,
  },
  container_coment: {
    width: '100%',
    height: 100,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
  },
  img_title3: {
    fontSize: 16,
    lineHeight: 24,
    width: 380,
    marginTop: 16,
    width: Dimensions.get('window').width - 45
  },
  container_img_title: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
    marginTop: 16,
  },
  img_title2: {
    fontSize: 24,
    lineHeight: 36,
    color: '#000',
  },
  img_title: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.12,
    lineHeight: 21,
    color: '#4E4B66',
    width: 380,
    width: Dimensions.get('window').width - 25
  },
  img_tau: {
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
  bbc_button_following: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '800',
    letterSpacing: 0.12,
    color: '#fff'
  },
  bbc_button: {
    paddingStart: 12,
    paddingEnd: 11,
    paddingTop: 5,
    width: 80,
    height: 30,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#1877F2',
    borderRadius: 6,
  },
  bbc_title2: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 24,
    color: '#000'
  },

  bbc_title: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66'
    
  },
  container_bbc_title: {
    flexDirection: 'row'
    
  },
  container_bbc: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bbc_icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_back: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  container: {
    paddingTop: 24,
    paddingEnd: 24,
    paddingStart: 24,
    backgroundColor: '#FFFFFF',
  },
  back: {
    width: 24,
    height: 24
  }
})