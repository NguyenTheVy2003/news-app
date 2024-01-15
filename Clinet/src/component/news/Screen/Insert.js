import {
  StyleSheet, Text, View, TouchableOpacity,
  Modal, Image, Button, TextInput, ScrollView, ToastAndroid, KeyboardAvoidingView, Alert, ActivityIndicator
} from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import {
  launchImageLibrary,
  launchCamera
} from 'react-native-image-picker'
import { uploadImage } from '../NewsHTTP'
import AxiosInstance from '../../../helper/AxiosInstance'
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list'


const Insert = (props) => {

  const { navigation } = props;
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [ImagePath, setImagePath] = useState("");
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [quantity, setquantity] = useState('')
  const [description, setdescription] = useState('')
  const [category_id, setCategory_id] = React.useState("")

  // nhận hình ảnh từ thư viện
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
      setImagePath(result.data);
      console.log('>>>>>upload image: ', result);
      if (result.error == false) {
        ToastAndroid.show("Up load ảnh thất bại", ToastAndroid.SHORT)
      }
      else {
        setImagePath(result)
        ToastAndroid.show("Up load ảnh thành công", ToastAndroid.SHORT)
      }
    }
  }, []);

  // sử dụng lại hàm này
  const openCamera = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, takePhoto);
    // await launchImageLibrary(options, takePhoto);
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

  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await AxiosInstance().get('/categories')
        let newArray = result.map((item) => {
          return { key: item._id, value: item.name }
        })
        setCategories(newArray);
        // setCategory_id(result[2]._id)
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, []);
  console.log(categories);

  // const data = [
  //   { key: '1', value: 'Mobiles', disabled: true },
  //   { key: '2', value: 'Appliances' },
  //   { key: '3', value: 'Cameras' },
  //   { key: '4', value: 'Computers', disabled: true },
  //   { key: '5', value: 'Vegetables' },
  //   { key: '6', value: 'Diary Products' },
  //   { key: '7', value: 'Drinks' },
  // ]


  const dangTin = async () => {
    const response = await AxiosInstance().post(`/products`,
      {
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        image: image,
        category_id: category_id
      });

    if (response.error == false) {
      ToastAndroid.show('Đăng tin thất bại', ToastAndroid.SHORT)

    }
    else {
      ToastAndroid.show('Đăng tin thành công', ToastAndroid.SHORT)
      Alert.alert('Success', 'Add News Product Success')
      navigation.navigate('Trending');
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false} // thanh cuộn
      >
        <View style={styles.container_toolbar}>
          <Image style={{ width: 24, height: 24 }} source={require('../../../media/ic_back.png')}></Image>
          <Text>Create News</Text>
          <Image style={{ width: 24, height: 24 }} source={require('../../../media/ic_outline.png')}></Image>
        </View>

        <View style={styles.container_add_cover_photo}>
          {
            image && (
              <Image
                source={{ uri: image }}
                style={{
                  width: "100%",
                  borderRadius: 6,
                  position: 'absolute',
                  height: "100%",
                }}
                resizeMode='cover'
              />
            )
          }
          <TouchableOpacity onPress={openCamera}>
            <Image style={{ width: 24, height: 24 }} source={require('../../../media/ic_+.png')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={openPhotolibrary}>
            <Text style={{ marginTop: 8 }} >Add Cover Photo</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={{ fontSize: 30 }}>Insert</Text>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Text style={{ fontSize: 20 }}>Image</Text>
      </TouchableOpacity> */}
        <View style={styles.container_text_input}>
          <TextInput placeholder='News title' style={styles.textInput} onChangeText={setname}></TextInput>
          <View style={{ backgroundColor: '#C4C4C4', height: 1 }} />
        </View>

        <View style={styles.container_text_input2}>
          <TextInput placeholder='Add news/Price' style={styles.textInput2} onChangeText={setprice}></TextInput>
        </View>
        <View style={styles.container_text_input2}>
          <TextInput placeholder='Add news/Quantity' style={styles.textInput2} onChangeText={setquantity}></TextInput>
        </View>
        <View style={styles.container_text_input2}>
          <TextInput placeholder='Add news/Description' style={styles.textInput2} onChangeText={setdescription}></TextInput>
        </View>
        <View style={styles.container_text_category}>
          <Text style={styles.text_category}> Category</Text>
          <SelectList
            setSelected={setCategory_id}
            data={categories}
            onSelect={() => Alert.alert(category_id)}
            placeholder='Select Category'
          />
        </View>
      </ScrollView>
      <View style={styles.container_Pulish}>
        <View style={styles.container_Pulish_ic}>
          <Image source={require('../../../media/ic_Aa.png')} style={{ width: 24, height: 24, }}></Image>
          <Image source={require('../../../media/ic_Align_left.png')} style={{ width: 24, height: 24, marginStart: 24 }}></Image>
          <TouchableOpacity onPress={openPhotolibrary}>
            <Image source={require('../../../media/ic_Image.png')} style={{ width: 24, height: 24, marginStart: 24 }} ></Image>
          </TouchableOpacity>
          <Image source={require('../../../media/....png')} style={{ width: 24, height: 24, marginStart: 24 }}></Image>
        </View>
        <TouchableOpacity style={styles.container_button_publish} onPress={dangTin}>
          <Text style={styles.button_publish_text}>Publish</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default Insert

const styles = StyleSheet.create({

  button_publish_text: {
    color: '#667080',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12
  },

  container_button_publish: {
    backgroundColor: '#EEF1F4',
    paddingTop: 13,
    paddingBottom: 13,
    paddingStart: 24,
    paddingEnd: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 6,
  },
  container_Pulish_ic: {
    flexDirection: 'row',
  },
  container_Pulish: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_text_category: {
   marginTop: 16,
  },
  text_category: {
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.12,
    color: '#A0A3BD',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12
  },
  textInput2: {
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.12,
    color: '#A0A3BD',
    fontSize: 16,
    lineHeight: 24,
  },

  textInput: {
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.12,
    color: '#A0A3BD',
    fontSize: 24,
    lineHeight: 36,
  },

  container_text_input2: {
    marginTop: 16,
    height: 52,
  },
  container_text_input: {
    marginTop: 16,
  },

  container_add_cover_photo: {
    marginTop: 16,
    borderRadius: 6,
    height: 183,


    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#EEF1F4',
    borderColor: '#4E4B66',
    borderWidth: 1,
    borderStyle: 'dashed',
    gap: 8,
  },
  container_toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  container: {
    // justifyContent: 'center',
    // alignItems: 'center'
    padding: 24,
    width: '100%',
    height: '100%',

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
})