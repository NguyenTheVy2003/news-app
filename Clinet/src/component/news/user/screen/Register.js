import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {register} from '../UserHTTP';

const Register = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async () => {
    try {
      const result = await register(email, password, name, role);
      console.log(result);
      Alert.alert('Success', 'Register Success, please login');
      navigation.navigate('Login');
      return result.user;
    } catch (error) {
      console.log(error);
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false} // thanh cuộn
      >
        <View>
          <View>
            <Text style={styles.hello}>Hello!</Text>
            <Text style={styles.register_text}>Signup to get Started</Text>
          </View>
          <View style={styles.inputUsernameContainer}>
            <Text style={styles.inputLabel}>Email*</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập email"
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>
          <View style={styles.inputPasswordContainer}>
            <Text style={styles.inputLabel}>Password*</Text>
            <View style={styles.inputTextContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Nhập password"
                value={password}
                onChangeText={text => {
                  setPassword(text);
                }}
              />
              <Image
                style={styles.eyeIcon}
                source={require('../../../../media/ic_eye.png')}
              />
            </View>
          </View>
          <View style={styles.inputPasswordContainer}>
            <Text style={styles.inputLabel}>Name*</Text>
            <View style={styles.inputTextContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nhập Name"
                value={name}
                onChangeText={text => {
                  setName(text);
                }}
              />
            </View>
          </View>
          <View style={styles.inputPasswordContainer}>
            <Text style={styles.inputLabel}>Role*</Text>
            <View style={styles.inputTextContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Nhập Role"
                value={role}
                onChangeText={text => {
                  setRole(Number);
                }}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={handleRegister}>
              <Text style={styles.buttonLoginText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.continue}>
            <Text style={styles.continue_text}>or continue with</Text>
          </View>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.buttonFBGG}>
              <Image
                style={{height: 24, width: 24}}
                source={require('../../../../media/ic_fb.png')}
              />
              <Text style={styles.buttonFBGGText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFBGG}>
              <Image
                style={{height: 24, width: 24}}
                source={require('../../../../media/ic_gg.png')}
              />
              <Text style={styles.buttonFBGGText}>Google</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.already}>
            <Text style={styles.already_text1}>Already have an account ? </Text>
            <Pressable>
              <Text
                onPress={() => props.navigation.navigate('Login')}
                style={[styles.already_text1, styles.already_login]}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  already_login: {
    fontWeight: '600',
    color: '#1877F2',
  },

  already_text1: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#667080',
  },
  already: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continue_text: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  continue: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonFBGGText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#667000',
    marginLeft: 10,
  },
  buttonFBGG: {
    width: '45%',
    flexDirection: 'row',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#eef1f4',
    position: 'relative',
  },
  socialButtons: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonLoginText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#ffffff',
  },
  buttonLogin: {
    marginTop: 18,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#1877f2',
  },

  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 16,
    width: 24,
    height: 24,
  },
  inputTextContainer: {
    position: 'relative',
  },
  inputPasswordContainer: {
    marginTop: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4e4b66',
  },
  input: {
    height: 48,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4e4b66',
    marginTop: 4,
    color: 'black',
  },
  inputUsernameContainer: {
    marginTop: 48,
  },
  hello: {
    fontSize: 48,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 72,
    letterSpacing: 0.12,
    color: '#1877f2',
    fontFamily: 'Poppins',
  },

  register_text: {
    fontSize: 20,
    color: '#1877f2',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 30,
    letterSpacing: 0.12,
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
});
