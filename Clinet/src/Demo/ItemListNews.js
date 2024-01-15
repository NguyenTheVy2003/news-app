import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ItemListNews = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.content_text}>{data.title}</Text>
        <Text style ={{ marginTop: 2,fontSize: 16,fontWeight: '400', lineHeight: 24,letterSpacing: 0.12, color: '#000'}}numberOfLines={2}>{data.content}</Text>
        <View style = {styles.container_bbc}>
          <View style = {styles.container_bbc_newsDetail}>
            <Image style={{ width: 24, height: 24 }} source={require('../media/ic_bbc.png')}></Image>
            <Text style ={styles.bbc_news_text}>BBC News</Text>
            <Image style ={{marginStart: 8 ,width: 14, height: 14}}source={require('../media/ic_clock.png')}></Image>
            <Text  style ={[styles.bbc_news_text,styles.bbc_news_text2]}>4h ago</Text>
          </View>
          <View>
              <Image style = {{width: 14, height: 14}} source={require('../media/....png')}></Image>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ItemListNews

const styles = StyleSheet.create({

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
  container_bbc: {
    marginTop: 2,
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems :'center'
  },
  container_bbc_newsDetail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems :'center'
    
  },
  container: {
    flexDirection: 'row',
    marginTop: 16,
    marginStart :8,
    width: '100%'

  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 6,
  },
  content: {
    marginStart: 10,
    width: Dimensions.get('window').width - 160
  },
  content_text: {
    color: '#4E4B66',
    fontWeight: 'bold',
    fontSize: 13,
    styles: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.12,
  },
})