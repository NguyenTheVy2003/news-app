import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'

const ForgotPassword = (props) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
              <ScrollView
                showsHorizontalScrollIndicator={false} // thanh cuộn
                showsVerticalScrollIndicator={false} // thanh cuộn
            >
            <View >
                <View style={styles.container_forgotPassword}>
                    <TouchableOpacity>
                        <Image style={styles.ic} source={require('../../../../../media/ic_back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text_forgotPassword}>Forgot Password ?</Text>
                    <Text style={styles.text_txt}>
                        Don’t worry! it happens. Please select the
                        email or number associated with your account.
                    </Text>
                    <View >
                        <View style={styles.container_email}>
                            <View style={styles.container_text_email}>
                                <View style={styles.ic_email_sms}>
                                    <Image style={styles.ic} source={require('../../../../../media/ic_email.png')} />
                                </View>
                                <View style={styles.container_txt_email_sms}>
                                    <Text style={styles.text_email_sms}>via Email:</Text>
                                    <Text style={styles.text_email}>example@youremail.com</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image style={{ width: 20, height: 20, flexShrink: 0 }} source={require('../../../../../media/ic_radioBt.png')} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.container_email}>
                            <View style={styles.container_text_email}>
                                <View style={styles.ic_email_sms}>
                                    <Image style={styles.ic} source={require('../../../../../media/ic_sms.png')} />
                                </View>
                                <View style={styles.container_txt_email_sms}>
                                    <Text style={styles.text_email_sms}>via SMS:</Text>
                                    <Text style={styles.text_email}>+62-8421-4512-2531</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image style={{ width: 20, height: 20, flexShrink: 0 }} source={require('../../../../../media/ic_radioBt_noClick.png')} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>


            </View>
            </ScrollView>
            <View>
                <TouchableOpacity style={styles.btn_Submit} onPress={() => props.navigation.navigate('ForgotPassword2')}>
                    <Text style={styles.txt_submit}>Submit</Text>
                </TouchableOpacity>
            </View>
          
        </KeyboardAvoidingView>

    )
}

export default ForgotPassword

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
        paddingTop: 13, paddingBottom: 13,
        paddingStart: 24, paddingEnd: 24,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        height: 50,
        backgroundColor: '#1877F2',
        borderRadius: 6,
    },
    container_txt_email_sms: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 5,
        marginStart: 16,
        height: 50,
        width: 180,
    },
    ic_email_sms: {
        backgroundColor: '#1877F2',
        padding: 20,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
    },
    text_email: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#050505',
    },
    text_email_sms: {
        fontFamily: 'Poppoins',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#667080'
    },
    ic: {
        width: 24,
        height: 24,
    },
    container_text_email: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    container_email: {
        marginTop: 16,
        padding: 18,
        paddingBottom: 18,
        paddingEnd: 16,
        paddingStart: 16,
        borderRadius: 6,
        backgroundColor: '#EEF1F4',
    },
    text_txt: {
        height: 72,
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
    container_forgotPassword: {

    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 24,
    }
})