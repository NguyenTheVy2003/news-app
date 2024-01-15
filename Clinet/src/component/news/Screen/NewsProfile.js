import {
    StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions, ScrollView, TextInput, Pressable
  } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getNews } from '../NewsHTTP'

const NewsProfile = (props) => {
  
    const { navigation } = props
    const [news, setNews] = useState([])

    useEffect(() => {
        console.log('useEffect 1');
      })
      // 2. chạy ngay sau khi màn hình render
      useEffect(() => {
        // lấy tin
        const fetchData = async () => {
          try {
            const response = await getNews();
            setNews(response.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, [])

      const renderItem = ({ item }) => {
        const { _id, title, content, image } = item;
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail', { newsId: _id })
            }}
          >
            {/* //   <Text>{title}</Text>
          //   <Image style={{width: 100, height: 100}} 
          //       source={{ uri: image }} /> */}
          
            <View style={styles.container_ItemList}>
              <Image style={styles.Image} source={{ uri: image }} />
              <View style={styles.content}>
                <Text numberOfLines={1} style={styles.ItemList_content_text}>{title}</Text>
                <Text style={{ marginTop: 2, fontSize: 16, fontWeight: '400', lineHeight: 24, letterSpacing: 0.12, color: '#000' }} numberOfLines={2}>{content}</Text>
                <View style={styles.container_ItemList_bbc}>
                  <View style={styles.container_ItemList_bbc_newsDetail}>
                    <Image style={{ width: 24, height: 24 }} source={require('../../../media/img_profile.png')}></Image>
                    <Text style={styles.bbc_news_text}>WILson Fanci</Text>
                    <Image style={{ marginStart: 8, width: 14, height: 14 }} source={require('../../../media/ic_clock.png')}></Image>
                    <Text style={[styles.bbc_news_text, styles.bbc_news_text2]}>1h ago</Text>
                  </View>
                  <View>
                    <Image style={{ width: 14, height: 14 }} source={require('../../../media/....png')}></Image>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )
      }

  return (
    <View style = {styles.container}>
      <FlatList
            data={news}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
    </View>
  )
}

export default NewsProfile

const styles = StyleSheet.create({
    underline: {
        width: '100%',
        height: 2,
        backgroundColor: '#1877F2',
      },
      item: {
        height: 34,
        gap: 10,
        alignItems: 'flex-start',
        margin: 10,
        // backgroundColor: 'red',
      },
      bbc_abbreviate: {
        flexShrink: 0,
        width: 14,
        height: 14,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      },
    
      bbc_text2: {
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66',
        marginStart: 4,
      },
    
      imgClock: {
        width: 14,
        height: 14,
        marginStart: 12
      },
    
      bbc_text1: {
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66',
        marginStart: 4,
      },
    
      imgbbc: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: 20,
        height: 20,
      },
      container_cards_bbcNew: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        alignItems: 'center'
      },
    
      lineNew_tex2: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000'
      },
    
      lineNew_tex1: {
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66'
      },
    
      container_lineNew_img: {
        borderRadius: 6,
        width: "100%",
        height: 175,
      },
    
      container_cards: {
        marginTop: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
        padding: 8,
      },
    
      trending_text_2: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66'
      },
      trending_text_1: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '800',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000'
      },
      container_trending: {
        marginTop: 16,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
      },
      container: {
        paddingTop: 24,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
      },
      container_kabar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 56,
        backgroundColor: '#FFFFFF',
      },
      input_search: {
        width: 230,
      },
      container_search: {
        flexDirection: 'row',
        borderColor: '#4E4B66',
        borderWidth: 1,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#FFFFFF'
      },
    
      bbc_news_text2: {
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: '400'
    
      },
    
      bbc_news_text: {
        marginStart: 4,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66'
      },
      container_ItemList_bbc: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      container_ItemList_bbc_newsDetail: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    
      },
      container_ItemList: {
        flexDirection: 'row',
        marginTop: 16,
        width: '100%'
    
      },
      Image: {
        width: 96,
        height: 96,
        borderRadius: 6,
      },
      content: {
        marginStart: 10,
        width: Dimensions.get('window').width - 160
      },
      ItemList_content_text: {
        color: '#4E4B66',
        fontWeight: 'bold',
        fontSize: 13,
        styles: 'normal',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0.12,
      },
})