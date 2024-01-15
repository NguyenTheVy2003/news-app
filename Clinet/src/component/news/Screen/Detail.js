import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView, ReactImageView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getNewsDetail } from '../NewsHTTP'

const Detail = (props) => {
  const { navigation, route: { params: { newsId } } } = props
  const [newsDetail, setNewsDetail] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNewsDetail(newsId)
        console.log(response);
        setNewsDetail(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    // <View>
    //   <Text>Detail</Text>
    //   <Text>{newsDetail.title}</Text>
    //   <Text>{newsDetail.content}</Text>
    //   {
    //     newsDetail.image &&
    //       <Image style={{ width: 100, height: 100 }}
    //         source={{ uri: newsDetail.image }} />
    //   }
    // </View>

    <View style={styles.container}>
      <View style={styles.container_back}>
        <View>
          <Image style={styles.back} source={require('../../../media/ic_back.png')}></Image>
        </View>
        <View style={styles.container_back}>
          <Image style={styles.back} source={require('../../../media/ic_share.png')}></Image>
          <Image style={styles.back} source={require('../../../media/ic_outline.png')}></Image>
        </View>
      </View>
      <View style={styles.container_bbc}>
        <View style={styles.container_bbc_title}>
          <Image style={styles.bbc_icon} source={require('../../../media/ic_bbc.png')}></Image>
          <View style={{ marginStart: 4, }}>
            <Text style={[styles.bbc_title, styles.bbc_title2]}>BBC News</Text>
            <Text style={styles.bbc_title}>14m ago</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bbc_button}>
          <Text style={styles.bbc_button_following} >Following</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ marginTop: 16 }}
        horizontal={false} // chiều
        showsHorizontalScrollIndicator={false} // thanh cuộn
        showsVerticalScrollIndicator={false} // thanh cuộn
      >
        {
          newsDetail.image && <Image style={styles.img_tau} source={{ uri: newsDetail.image }}></Image>
        }
        <View style={styles.container_img_title}>
          <View>
            <Text style={[styles.img_title, styles.img_title2]}>Name: {newsDetail.name}</Text>
          </View>
          <View>
            <Text style={[styles.img_title3, styles.img_title3]}>Price: {newsDetail.price} $</Text>
            <Text style={[styles.img_title3, styles.img_title3]}>Quantity: {newsDetail.quantity}</Text>
            <Text style={[styles.img_title3, styles.img_title3]}>Description: {newsDetail.description}</Text>
            <Text style={[styles.img_title3, styles.img_title3]}>Category: {newsDetail.category_id}</Text>
          </View>
        </View>
        <View style={styles.container_coment}>
          <View style={styles.container_coment_like}>
            <Image style={{ height: 24, width: 24 }} source={require('../../../media/ic_love.png')}></Image>
            <Text style={styles.text_coment}>24.5k</Text>
            <Image style={{ height: 24, width: 24, marginStart: 14 }} source={require('../../../media/ic_coment.png')}></Image>
            <Text style={styles.text_coment}>1k</Text>
          </View>
          <View>
          </View>
          <View>
            <Image style={{ height: 24, width: 24, marginEnd: 16 }} source={require('../../../media/ic_backBook.png')}></Image>
          </View>
        </View>
      </ScrollView>

    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  text_coment: {
    marginStart: 4,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    fontFamily: 'Poppins'
  },
  container_coment_like: {
    flexDirection: 'row',
    marginStart: 8,
  },
  container_coment: {
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  img_title3: {
    fontSize: 16,
    lineHeight: 24,
    width: 380,
    marginTop: 16,
    width: Dimensions.get('window').width - 40
  },
  container_img_title: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
    marginTop: 16,
  },
  img_title2: {
    fontSize: 24,
    lineHeight: 36,
    color: '#000',
    width: Dimensions.get('window').width - 30
  },
  img_title: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.12,
    lineHeight: 21,
    color: '#4E4B66',
    width: 380,
    width: Dimensions.get('window').width - 25
  },
  img_tau: {
    width: '100%',
    height: 450,
    borderRadius: 6,
  },
  bbc_button_following: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '800',
    letterSpacing: 0.12,
    color: '#fff'
  },
  bbc_button: {
    paddingStart: 12,
    paddingEnd: 11,
    paddingTop: 5,
    width: 80,
    height: 30,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#1877F2',
    borderRadius: 6,
  },
  bbc_title2: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 24,
    color: '#000'
  },

  bbc_title: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66'

  },
  container_bbc_title: {
    flexDirection: 'row'

  },
  container_bbc: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bbc_icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_back: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  container: {
    paddingTop: 24,
    paddingEnd: 24,
    paddingStart: 24,
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
  },
  back: {
    width: 24,
    height: 24
  }
})