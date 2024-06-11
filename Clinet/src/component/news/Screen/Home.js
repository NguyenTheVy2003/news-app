import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getNews} from '../NewsHTTP';

const Home = props => {
  const [showTrending, setshowTrending] = useState(true);
  const [selectedId, setSelectedId] = useState(1);
  const {navigation} = props;
  const [news, setNews] = useState([]);
  const clickNe = () => {
    navigation.navigate('NewDetail');
  };
  // useeffect la gi?
  // hooks để gọi API lấy data
  // chạy ngay sau khi màn hình render
  // 1. chạy ngay sau khi màn hình render
  // và khi có state thay đổi
  // 2. chạy ngay sau khi màn hình render

  useEffect(() => {
    // lấy tin
    const fetchData = async () => {
      try {
        const response = await getNews();
        setNews(response);
        console.log(response);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    fetchData();
  }, []);
  // 3. chạy ngay sau khi màn hình render
  // và khi có state count thay đổi
  // useEffect(() => {
  //   console.log('useEffect 3');
  // }, [count])

  const renderItem = ({item}) => {
    const {_id, name, price, quantity, description, image, category_id} = item;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', {newsId: _id});
        }}>
        <View style={styles.container_ItemList}>
          <Image style={styles.image} source={{uri: image}} />
          <View style={styles.content}>
            <Text numberOfLines={1} style={styles.ItemList_content_text}>
              Name: {name}
            </Text>
            <Text numberOfLines={1} style={styles.ItemList_content_text}>
              Quantity: {quantity}
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
              Price{price}
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

  const Trending = () => {
    return (
      <View>
        <View style={styles.container_search}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../../../media/ic_search.png')}></Image>
          <TextInput
            placeholder="Search"
            style={styles.input_search}></TextInput>
          <Image
            style={{width: 24, height: 24}}
            source={require('../../../media/ic_fillter.png')}></Image>
        </View>

        <View style={styles.container_trending}>
          <Text style={styles.trending_text_1}>Trending</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Trending')}>
            <Text style={styles.trending_text_2}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_cards}>
          <Image
            style={styles.container_lineNew_img}
            source={require('../../../media/imgPlanta.png')}></Image>
          <View>
            <Text style={styles.lineNew_tex1}>Europe</Text>
            <Pressable onPress={clickNe}>
              <Text
                style={[styles.lineNew_tex1, styles.lineNew_tex2]}
                numberOfLines={1}>
                Russian warship: Moskva sinks in Black Sea
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <View style={styles.container_cards_bbcNew}>
              <Image
                style={styles.imgbbc}
                source={require('../../../media/ic_bbc.png')}></Image>
              <Text style={styles.bbc_text1}>BBC News</Text>
              <Image
                style={styles.imgClock}
                source={require('../../../media/ic_clock.png')}></Image>
              <Text style={styles.bbc_text2}>4h ago</Text>
            </View>
            <View>
              <Image
                style={styles.bbc_abbreviate}
                source={require('../../../media/....png')}></Image>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const all = () => {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false} // thanh cuộn
        >
          <View style={styles.container_kabar}>
            <Image
              style={{width: 99, height: 30}}
              source={require('../../../media/ic_kabar.png')}></Image>
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Notification')}>
                <Image
                  style={{width: 42, height: 42}}
                  source={require('../../../media/ic_bell.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          {showTrending ? Trending() : null}
          <View style={styles.container_trending}>
            <Text style={styles.trending_text_1}>Lastest</Text>
            <TouchableOpacity
              onPress={() => {
                setshowTrending(!showTrending);
              }}>
              <Text style={styles.trending_text_2}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 50, width: '100%'}}>
            <ScrollView
              horizontal={true} // chiều
              showsHorizontalScrollIndicator={false} // thanh cuộn
              showsVerticalScrollIndicator={false} // thanh cuộn
            >
              {CATEGORIES.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedId(item.id);
                    }}
                    style={styles.item}
                    key={index}>
                    <Text>{item.name}</Text>
                    <View
                      style={
                        item.id.toString() == selectedId.toString()
                          ? styles.underline
                          : undefined
                      }></View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View>
            <FlatList
              scrollEnabled={false}
              horizontal={false} // chiều
              showsHorizontalScrollIndicator={false} // thanh cuộn
              showsVerticalScrollIndicator={false} // thanh cuộn
              data={news}
              renderItem={renderItem}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

  return all();
};

export default Home;

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
    alignItems: 'flex-start',
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
    marginStart: 12,
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
    alignItems: 'center',
  },

  lineNew_tex2: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
  },

  lineNew_tex1: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },

  container_lineNew_img: {
    borderRadius: 6,
    width: '100%',
    height: 300,
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
    color: '#4E4B66',
  },
  trending_text_1: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '800',
    fontStyle: 'normal',
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

  bbc_news_text2: {
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
  },

  bbc_news_text: {
    marginStart: 4,
    fontSize: 14,
    fontStyle: 'normal',
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
});

var CATEGORIES = [
  {
    id: 1,
    name: 'Robby',
  },
  {
    id: 2,
    name: 'Wanda',
  },
  {
    id: 3,
    name: 'Derrek',
  },
  {
    id: 4,
    name: 'Eleonora',
  },
  {
    id: 5,
    name: 'Issy',
  },
  {
    id: 6,
    name: 'Herrick',
  },
  {
    id: 7,
    name: 'Erhart',
  },
  {
    id: 8,
    name: 'Stavro',
  },
  {
    id: 9,
    name: 'Giacobo',
  },
  {
    id: 10,
    name: 'Jana',
  },
  {
    id: 11,
    name: 'Constantine',
  },
  {
    id: 12,
    name: 'Nikola',
  },
  {
    id: 13,
    name: 'Nolie',
  },
  {
    id: 14,
    name: 'Jarred',
  },
  {
    id: 15,
    name: 'Baxie',
  },
  {
    id: 16,
    name: 'Mike',
  },
  {
    id: 17,
    name: 'Sutherland',
  },
  {
    id: 18,
    name: 'Charmaine',
  },
  {
    id: 19,
    name: 'Bobbe',
  },
  {
    id: 20,
    name: 'Ferris',
  },
  {
    id: 21,
    name: 'Byrom',
  },
  {
    id: 22,
    name: 'Deeyn',
  },
  {
    id: 23,
    name: 'Nerita',
  },
  {
    id: 24,
    name: 'Sherry',
  },
  {
    id: 25,
    name: 'Chrisy',
  },
  {
    id: 26,
    name: 'Spencer',
  },
  {
    id: 27,
    name: 'Gwenette',
  },
  {
    id: 28,
    name: 'Morty',
  },
  {
    id: 29,
    name: 'Marie',
  },
  {
    id: 30,
    name: 'Udall',
  },
  {
    id: 31,
  },
];
