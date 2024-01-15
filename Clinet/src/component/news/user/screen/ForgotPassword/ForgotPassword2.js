import { Image, Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native'
import React, { useState } from 'react'
import AxiosInstance from '../../../../../helper/AxiosInstance';
import { fogotPass } from '../../UserHTTP';

const ForgotPassword2 = (props) => {
  const [email, setEmail] = useState('');
  const { navigation } = props
  const onSubmit = async () => {
    try {
      // const response = await AxiosInstance().post('http://192.168.1.114:8686/users/forgot-password', { email });
      const response = await fogotPass(email)
      const { status } = response;
      if (status) {
        alert('Password reset link sent successfully');
        // onPress = props.navigation.navigate = 'ResetPassword';
      } else {
        alert('Error sending password reset link');
      }

    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false} // thanh cuộn
        showsVerticalScrollIndicator={false} // thanh cuộn
      >
        <View>
          <View>
            <Pressable>
              <Image style={styles.ic} source={require('../../../../../media/ic_back.png')} />
            </Pressable>

            <Text style={styles.text_forgotPassword}>Forgot Password ?</Text>
            <Text style={styles.text_txt}>
              Don’t worry! it happens. Please enter the
              address associated with your account.
            </Text>
            <View style={styles.container_textInput}>
              <Text style={styles.txt_textInput}>Email ID / Mobile number</Text>
              <TextInput style={styles.textInput}
                value={email}
                onChangeText={setEmail} />
            </View>
          </View>

        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.btn_Submit} onPress={onSubmit}>
          <Text style={styles.txt_submit}>ResetPassword</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

export default ForgotPassword2

const styles = StyleSheet.create({
  textInput: {
    display: 'flex',
    height: 48,
    padding: 10,
    alignItems: 'flex-start',
    gap: 10,
    alignSelf: 'stretch',
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#4E4B66',
    backgroundColor: '#FFF',
  },
  txt_textInput: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  container_textInput: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
    height: '60%',
    marginTop: 16,
  },

  txt_submit: {
    color: '#FFF',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  btn_Submit: {
    paddingTop: 13, paddingBottom: 13,
    paddingStart: 24, paddingEnd: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    height: 50,
    backgroundColor: '#1877F2',

    borderRadius: 6,
  },


  ic: {
    width: 24,
    height: 24,
  },

  text_txt: {
    height: 48,
    marginTop: 16,
    color: '#4E4B66',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,

  },
  text_forgotPassword: {
    color: '#4E4B66',
    fontFamily: 'Popponis',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 48,
    letterSpacing: 0.12,
    width: 186,
    height: 96,
    marginTop: 16,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 24,
  }
})