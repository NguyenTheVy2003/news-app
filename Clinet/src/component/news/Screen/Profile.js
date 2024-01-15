import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import NewsProfile from './NewsProfile';
import Recent from './Recent';
import EditProfile from './EditProfile';

const Profile = (props) => {
  const [selectedId, setSelectedId] = useState(1);
  const {navigation} = props;
  const clickNe = () => {
    navigation.navigate('NewsProfile')
  }

  const clickNe2 = () => {
    navigation.navigate('Recent')
  }

  const clickNe3 = () => {
    navigation.navigate('EditProfile')
  }
  return (
    <ScrollView style={styles.container}
      showsHorizontalScrollIndicator={false} // thanh cuộn
      showsVerticalScrollIndicator={false} // thanh cuộn
    >
      <View style={styles.container_setting}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '55%' }}>
          <Text style={[styles.text_follower, styles.text_follower2]}>Profile</Text>
          <Image style={{ width: 24, height: 24 }} source={require('../../../media/ic_setting.png')}></Image>
        </View>

      </View>
      <View style={styles.container_my_profile}>
        <Image style={{ width: 100, height: 100 }} source={require('../../../media/img_profile.png')}></Image>
        <View style={styles.container_follower}>
          <View style={styles.container_my_profile_follower}>
            <Text style={styles.text_follower}>2156</Text>
            <Text style={[styles.text_follower, styles.text_follower2]}>Followers</Text>
          </View>
          <View style={styles.container_my_profile_follower}>
            <Text style={styles.text_follower}>567</Text>
            <Text style={[styles.text_follower, styles.text_follower2]}>Following</Text>
          </View>
          <View style={styles.container_my_profile_follower}>
            <Text style={styles.text_follower}>23</Text>
            <Text style={[styles.text_follower, styles.text_follower2]}>News</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={styles.text_profile}>Wilson Franci</Text>
        <Text style={[styles.text_profile, styles.text_profile2]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </View>
      <View style={styles.socialButtons} >
        <Pressable style={styles.buttonFBGG} onPress={clickNe3}>
          <Text style={styles.buttonFBGGText} >Edit profile</Text>
        </Pressable>

        <TouchableOpacity style={styles.buttonFBGG}>
          <Text style={styles.buttonFBGGText}>Website</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.container_newProfile}>
        <View>
          <Pressable>
            <Text onPress={() => props.navigation.navigate('NewsProfile')}>News</Text>
          </Pressable>
        </View>
        
        <View>
          <Pressable style = {{marginStart: 24,}}>
            <Text onPress={() => props.navigation.navigate('Recent')}>Recent</Text>
          </Pressable>
        </View>
       
      </View>
      <NewsProfile/>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container_newProfile: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 13,
    alignItems: 'center'
   
  },
  container_editProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    paddingStart: 24,
    paddingEnd: 24,
  },

  text_profile2: {
    color: '#4E4B66',
    fontWeight: '600',
    fontSize: 16,

  },

  text_profile: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.12,
  },


  container_my_profile_follower: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  //#4E4B66

  text_follower2: {
    color: '#4E4B66',
    fontWeight: '600',
    fontSize: 14,
  },
  text_follower: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.12,

  },
  container_my_profile: {
    flexDirection: 'row',
    marginTop: 13,

  },
  container_follower: {
    fontStyle: 'normal',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 196,
    marginStart: 16,

  },
  container_setting: {
    width: '100%',
    alignItems: 'flex-end'
  },
  container: {
    padding: 24,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  buttonFBGGText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#fff',
    marginLeft: 10,
  },
  buttonFBGG: {
    width: '47%',
    flexDirection: 'row',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: '#1877F2',
    position: 'relative',
  },
  socialButtons: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: '#1877F2',
  },
  item: {
    height: 34,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    // backgroundColor: 'red',
  },
})

var CATEGORIES = [{
  "id": 1,
  "name": "News"
}, {
  "id": 2,
  "name": "Recent"
}]