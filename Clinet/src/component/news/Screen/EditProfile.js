import {
    StyleSheet, Text, View, TouchableOpacity,
    Modal, Image, Button, TextInput, ScrollView, ToastAndroid, KeyboardAvoidingView
} from 'react-native'
import { useContext, useState, useCallback } from 'react'
import UserContext from '../user/UserContext'

import {
    launchImageLibrary,
    launchCamera
} from 'react-native-image-picker'

import { uploadImage } from '../NewsHTTP'
const EditProfile = (props) => {
    const { user, setUser } = useContext(UserContext);
    const { navigation } = props
    const [email, setemail] = useState('')
    const [fullname, setfullname] = useState('')
    const [role, setrole] = useState('')

    const takePhoto = useCallback(async (response) => {
        if (response.didCancel) return;
        if (response.errorCode) return;
        if (response.errorMessage) return;
        if (response.assets && response.assets.length > 0) {
            const asset = response.assets[0];
            // hiện hình
            setImage(asset.uri);
            // tắt modal
            setShow(false);
            // upload image
            const formData = new FormData();
            formData.append('image', {
                uri: asset.uri,
                type: asset.type,
                name: asset.fileName,
            });
            const result = await uploadImage(formData);
            console.log('>>>>>upload image: ', result.data.path);
            setImagePath(result.data.path);

            if (result.error == false) {
                setImagePath(result.data.path)
            }
            else {
                ToastAndroid.show("Up load ảnh thất bại", ToastAndroid.SHORT)
            }
        }
        setUser({ ...user, avatar: response.data.path });
    }, []);

    const openPhotolibrary = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            saveToPhotos: true,
        };
        // await launchCamera(options, takePhoto);
        await launchImageLibrary(options, takePhoto);
    }, []);

    const openCamera = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            saveToPhotos: true,
        };
        await launchCamera(options, takePhoto);
        // await launchImageLibrary(options, takePhoto);
    }, []);

    const logOut = () => { setUser(null) }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false} // thanh cuộn
                showsVerticalScrollIndicator={false} // thanh cuộn
            >
                <View style={styles.container_setting}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image style={{ width: 24, height: 24 }} source={require('../../../media/ic_X.png')}></Image>
                        <Text style={[styles.text_follower, styles.text_follower2]}>Profile</Text>
                        <TouchableOpacity>
                            <Image style={{ width: 24, height: 24 }} source={require('../../../media/ic_ok.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <TouchableOpacity onPress={openCamera}>
                {
                    user.avatar == ''
                        ?
                        <View style={styles.container_my_profile_img}>
                            <Image style={{ width: 140, height: 140 }} source={require('../../../media/img_profile.png')} />
                            <Text style={{ marginTop: 10 }}>{user.email}</Text>
                        </View>
                        :
                        <Image style={{ width: 140, height: 140 }} source={{ uri: user.avatar }} />

                }
            </TouchableOpacity> */}
                <View style={styles.container_my_profile_img}>
                    <Image style={{ width: 140, height: 140 }} source={require('../../../media/img_profile.png')} />
                    <Text style={{ marginTop: 10 }}>{user.email}</Text>
                </View>


                <View >
                    <View style={styles.inputUsernameContainer}>
                        <Text style={styles.inputLabel} >Username</Text>
                        <TextInput style={styles.input}
                            placeholder="Nhập Uername"
                            value={user.name}
                            onChangeText={setfullname} />
                    </View>
                    <View style={styles.inputUsernameContainer}>
                        <Text style={styles.inputLabel}>Email Address*</Text>
                        <TextInput style={styles.input}
                            placeholder="Nhập email"
                            value={user.email}
                            onChangeText={setemail} />
                    </View>
                    <View style={styles.inputUsernameContainer}>
                        <Text style={styles.inputLabel}>Role*</Text>
                        <Text style={styles.input}
                        // placeholder="Nhập Role"
                        // value={parseInt(user.role)}
                        // onChangeText={setrole}
                        >{user.role}</Text>
                    </View>
                </View>



            </ScrollView>
            <View>
                <TouchableOpacity style={styles.btn_Submit} onPress={logOut}>
                    <Text style={styles.txt_submit}>Sign Out</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>

    )
}

export default EditProfile

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
    container_my_profile_img: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16,
    },
    container: {
        padding: 24,
        width: '100%',
        height: '100%',
    },
})