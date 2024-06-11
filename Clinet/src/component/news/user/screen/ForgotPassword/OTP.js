import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const OTP = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_otp}>
        <View style={{width: '100%'}}>
          <Image
            style={styles.ic}
            source={require('../../../../../media/ic_back.png')}
          />
        </View>
        <View style={styles.conatiner_otp_txt}>
          <Text style={[styles.otp_txt, styles.otp_txt_1]}>
            OTP Verification
          </Text>
          <Text style={styles.otp_txt}>
            Enter the OTP sent to +67-1234-5678-9
          </Text>
        </View>
        <View>
          <View style={styles.container_textInput_opt}>
            <View style={styles.textInput_opt}>
              <TextInput style={styles.textInput}></TextInput>
            </View>

            <View style={styles.textInput_opt}>
              <TextInput style={styles.textInput}></TextInput>
            </View>

            <View style={styles.textInput_opt}>
              <TextInput style={styles.textInput}></TextInput>
            </View>

            <View style={styles.textInput_opt}>
              <TextInput style={styles.textInput}></TextInput>
            </View>
          </View>

          <View style={styles.container_invalidOtp}>
            <Image
              style={{width: 16, height: 16}}
              source={require('../../../../../media/ic_warning.png')}
            />
            <Text style={styles.txt_resendcode_1}>Invalid OTP</Text>
          </View>
        </View>
      </View>
      <Text style={styles.txt_resendcode}>
        Resend code in{' '}
        <Text style={[styles.txt_resendcode, styles.txt_resendcode_1]}>
          56s
        </Text>
      </Text>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container_invalidOtp: {
    width: 98,
    justifyContent: 'center',
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  textInput: {
    color: '#050505',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 48,
    letterSpacing: 0.12,
  },
  txt_resendcode_1: {
    color: '#C30052',
  },
  txt_resendcode: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  textInput_opt: {
    width: 64,
    height: 64,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#4E4B66',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  container_textInput_opt: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16,
    flexDirection: 'row',
  },
  otp_txt_1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 48,
    textAlign: 'center',
  },
  otp_txt: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },

  conatiner_otp_txt: {
    marginTop: 27,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  container_otp: {
    width: '100%',
    gap: 27,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ic: {
    width: 24,
    height: 24,
  },
  container: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
  },
});
