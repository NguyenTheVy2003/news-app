import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getNews, searchNews} from '../NewsHTTP';

const Explore = props => {
  const {navigation} = props;
  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [searchText, setsearchText] = useState('');

  const onSearch = async searchText => {
    setisLoading(true);
    try {
      const response = await searchNews(searchText);

      // lấy dữ liệu thành công
      setdataNe(response);
      setisLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // lấy tin
    const fetchData = async () => {
      try {
        const response = await getNews();
        console.log(response);
        // lấy dữ liệu thành công
        setdataNe(response);
        setisLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    const {_id, name, price, image, quantity} = item;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', {newsId: _id});
        }}>
        {/* //   <Text>{title}</Text>
      //   <Image style={{width: 100, height: 100}} 
      //       source={{ uri: image }} /> */}
        <View style={styles.container_ItemList}>
          <Image style={styles.image} source={{uri: image}} />
          <View style={styles.content}>
            <Text numberOfLines={1} style={styles.ItemList_content_text}>
              {name}
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                letterSpacing: 0.12,
                color: '#000',
              }}
              numberOfLines={2}>
              {price}
            </Text>
            <View style={styles.container_ItemList_bbc}>
              <View style={styles.container_ItemList_bbc_newsDetail}>
                <Image
                  style={{width: 24, height: 24}}
                  source={require('../../../media/ic_bbc.png')}></Image>
                <Text style={styles.bbc_news_text}>BBC News</Text>
                <Image
                  style={{marginStart: 8, width: 14, height: 14}}
                  source={require('../../../media/ic_clock.png')}></Image>
                <Text style={[styles.bbc_news_text, styles.bbc_news_text2]}>
                  4h ago
                </Text>
              </View>
              <View>
                <Image
                  style={{width: 14, height: 14}}
                  source={require('../../../media/....png')}></Image>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  let timeOut = null;
  const countDownSearch = searchText => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      onSearch(searchText);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_search}>
        <TouchableOpacity onPress={onSearch}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../../../media/ic_search.png')}></Image>
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={styles.input_search}
          onChangeText={text => countDownSearch(text)}></TextInput>
        <Image
          style={{width: 24, height: 24}}
          source={require('../../../media/ic_X.png')}></Image>
      </View>

      {isLoading == true ? (
        <View style={styles.container_isloading}>
          <ActivityIndicator size="large" color="#fff00" />
          <Text>Loading...</Text>
        </View>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false} // thanh cuộn
          showsVerticalScrollIndicator={false} // thanh cuộn
          data={dataNe}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container_isloading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_search: {
    width: 311,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  container_search: {
    flexDirection: 'row',
    borderColor: '#4E4B66',
    borderWidth: 1,
    display: 'flex',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
  },
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
    alignItems: 'flex-start',
  },

  bbc_text2: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#4E4B66',
    marginStart: 4,
  },

  imgClock: {
    width: 14,
    height: 14,
    marginStart: 12,
  },

  bbc_text1: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '600',
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
    alignItems: 'center',
  },

  lineNew_tex2: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
  },
  container_lineNew_img: {
    borderRadius: 6,
    width: '100%',
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
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  trending_text_1: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000',
  },
  container_trending: {
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  container: {
    paddingTop: 24,
    paddingStart: 24,
    paddingEnd: 24,
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
    backgroundColor: '#FFFFFF',
  },

  bbc_news_text2: {
    fontSize: 13,
    fontWeight: '400',
  },

  bbc_news_text: {
    marginStart: 4,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  container_ItemList_bbc: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container_ItemList_bbc_newsDetail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_ItemList: {
    flexDirection: 'row',
    marginTop: 16,
    marginStart: 8,
    width: '100%',
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 6,
  },
  content: {
    marginStart: 10,
    width: Dimensions.get('window').width - 160,
  },
  ItemList_content_text: {
    color: '#4E4B66',
    fontWeight: 'bold',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.12,
  },
});
