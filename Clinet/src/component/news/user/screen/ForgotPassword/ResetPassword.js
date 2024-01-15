import { Image, Pressable, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const ResetPassword = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.ic} source={require('../../../../../media/ic_back.png')} />
            </TouchableOpacity>
            <Text style={styles.text_ResetPassword}>Reset Password ?</Text>

            <View style={styles.container_textInput}>
                <Text style={styles.txt_textInput}>New Password<Text style={{ color: '#C30052' }}>*</Text></Text>
                <TextInput style={styles.textInput} />
                <TouchableOpacity style = {styles.ic_eye}>
                    <Image style = {styles.ic} source={require('../../../../../media/ic_eye.png')} />
                </TouchableOpacity>
                <Text style={styles.txt_textInput}>Confirm new password<Text style={{ color: '#C30052' }}>*</Text></Text>
                <TextInput style={styles.textInput} />
                <TouchableOpacity style = {[styles.ic_eye,styles.ic_eye_confirmPass]}>
                    <Image style = {styles.ic} source={require('../../../../../media/ic_eye.png')} />
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity style={styles.btn_Submit}>
                    <Text style={styles.txt_submit}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ResetPassword

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
        height: '67%',
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
    text_ResetPassword: {
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
    ic: {
        width: 24,
        height: 24,
    },
    ic_eye_confirmPass:{
        top: 114,
    },
    ic_eye: {
        position: 'absolute',
        right: 10,
        top: 36,
        width: 24,
        height: 24,
    },
    container: {
        padding: 24,
        width: '100%',
        backgroundColor: '#FFF',
    },
})