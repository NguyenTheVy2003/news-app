import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const GotoHomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.container_Kabar}>
          <Image
            style={styles.ic_kabar}
            source={require('../../../../../media/ic_kabar.png')}
          />
        </View>
        <View style={styles.container_text}>
          <Text style={styles.text_1}>Congratulations!</Text>
          <Text style={styles.text_2}>Your account is ready to use</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.btn_Submit}>
          <Text style={styles.txt_submit}>Go to Homepage</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GotoHomePage;

const styles = StyleSheet.create({
  txt_submit: {
    color: '#FFF',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  btn_Submit: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingStart: 24,
    paddingEnd: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    height: 50,
    backgroundColor: '#1877F2',

    borderRadius: 6,
  },
  container_text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_2: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: -0.3,
    color: '#4E4B66',
  },
  text_1: {
    fontFamily: 'Arial',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: -0.3,
    color: '#4E4B66',
  },
  ic_kabar: {
    width: 217,
    height: 66,
    flexShrink: 0,
  },
  container_Kabar: {
    height: 173,
    display: 'flex',
    paddingTop: 76,
    paddingBottom: 76,
    paddingStart: 49,
    paddingEnd: 49,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  container: {
    padding: 24,
    width: '100%',
    height: '96%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
});
