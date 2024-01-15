import { StyleSheet, Text, View,
    TouchableOpacity, TextInput, Image, Pressable, ScrollView, ToastAndroid, KeyboardAvoidingView} 
    from 'react-native'

import React, { useState, useContext } from 'react';
import UserContext from '../UserContext';
import { setToken } from '../../../../http/AsyncStorageHelper';
import { AppConstanst } from '../../../../http/AppConstants';
import { login } from '../UserHTTP';

const Login = (props) => {

    const { navigation } = props;
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    
    const handleLogin = async () => {
      try {
            const result = await login(email, password);
            // luu token vao storage
            // luu thong tin user
            setUser(result.user);
            console.log(result)
        } catch (error) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
            console.log(error)
            throw error
        }
    }

    const { setUser } = useContext(UserContext);
    return (
        <KeyboardAvoidingView style={styles.container}>
        <ScrollView
            showsVerticalScrollIndicator={false} // thanh cuộn
        >
            <View>
                <Text style={styles.hello}>Hello</Text>
                <Text style={[styles.hello, styles.again]}>Again</Text>
            </View>
            <View>
                <Text style={styles.welcome}>Welcome back you've been missed</Text>
            </View>
            <View style={styles.inputUsernameContainer}>
                <Text style={styles.inputLabel}>Username*</Text>
                <TextInput style={styles.input}
                    placeholder="Nhập email"
                    value={email}
                    onChangeText={setemail} />
            </View>
            <View style={styles.inputPasswordContainer}>
                <Text style={styles.inputLabel}>Password*</Text>
                <View style={styles.inputTextContainer}>
                    <TextInput style={styles.input}
                        secureTextEntry={true}
                        placeholder="Nhập password"
                        value={password}
                        onChangeText={setpassword} />
                    <Image style={styles.eyeIcon} source={require('../../../../media/ic_eye.png')} />
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgot}>Forgot password?</Text>
                </TouchableOpacity>

            </View>
            <View>
                <Pressable>
                    <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                        <Text style={styles.buttonLoginText}>Login</Text>
                    </TouchableOpacity>
                </Pressable>
            </View>
            <View style={styles.continue}>
                <Text style={styles.continue_text}>or continue with</Text>
            </View>
            <View style={styles.socialButtons}>
                <TouchableOpacity style={styles.buttonFBGG}>
                    <Image style={{ height: 24, width: 24 }} source={require('../../../../media/ic_fb.png')} />
                    <Text style={styles.buttonFBGGText}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFBGG}>
                    <Image style={{ height: 24, width: 24 }} source={require('../../../../media/ic_gg.png')} />
                    <Text style={styles.buttonFBGGText}>Google</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.already}>
                <Text style={styles.already_text1}>don't have an account ? </Text>
                <Pressable >
                    <Text onPress={() => props.navigation.navigate('Register')} style={styles.already_login}>Sign Up</Text>
                </Pressable>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    already_login: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 21,
        letterSpacing: 0.12,
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

    buttonLogin: {
        marginTop: 16,
        paddingVertical: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#1877f2',
    },
    forgot: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#5890ff',
        textAlign: 'right',
        marginTop: 16,
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
        color: 'black'
    },
    inputUsernameContainer: {
        marginTop: 16,
    },
    welcome: {
        width: 222,
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 30,
        letterSpacing: 0.12,
        marginTop: 16,
        color: '#4e4b66',
    },
    hello: {
        fontSize: 48,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 72,
        letterSpacing: 0.12,
        color: '#050505',
    },
    again: {
        color: '#1877f2',
    },
    container: {
        padding: 24,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
    }
})