import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ItemListNews from './ItemListNews';

const Notification = props => {
  const {navigation} = props;
  return (
    <View style={styles.conatiner}>
      <View style={styles.conatiner_trending}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Image
            style={styles.ic}
            source={require('../../../media/ic_back.png')}
          />
        </TouchableOpacity>

        <Text style={styles.txt_trending}>Notification</Text>
        <Image
          style={styles.ic}
          source={require('../../../media/ic_outline.png')}
        />
      </View>

      <Text
        style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '600',
          lineHeight: 24,
          letterSpacing: 0.12,
          marginTop: 16,
          marginEnd: 16,
        }}>
        Today, April 22
      </Text>

      {/* <View style={{
                marginTop: 16,
                display: 'flex',
                paddingTop: 14,
                paddingBottom: 14,
                paddingStart: 8,
                paddingEnd: 8,
                alignItems: 'center',
                gap: 16,
                borderRadius: 6,
                backgroundColor: '#EEF1F4',
                flexDirection: 'row'

            }}>
                <Image style={{
                    width: 70,
                    height: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0
                }}
                    source={require('../../../media/ic_bbc.png')}
                />
                <View style={{
                    width: '100%',
                    width: Dimensions.get('window').width - 100,
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#000',
                        fontWeight: '600',
                        lineHeight: 24,
                        letterSpacing: 0.12
                    }}>
                        BBC News <Text style={{
                            fontSize: 16,
                            color: '#000',
                            fontWeight: '400',
                            lineHeight: 24,
                            letterSpacing: 0.12,

                        }}>has posted new europe news “Ukraine's President Zele...”</Text>
                    </Text>
                    <Text>
                        15m ago
                    </Text>
                </View>


            </View> */}

      {DaTaNotifi.map(item => (
        <ItemListNews key={item._id} data={item} />
      ))}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container_isloading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt_title: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000',
  },
  txt_title_bbc2: {
    fontWeight: '400',
  },
  txt_title_bbc: {
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 19.5,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  container_title_content4: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    flexDirection: 'row',
  },
  container_title_content3: {
    alignItems: 'flex-start',
    gap: 12,
    flexDirection: 'row',
    marginTop: 4,
  },
  ic_title: {
    width: 14,
    height: 14,
  },
  container_title_content2: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },

  container_title_content: {
    flexDirection: 'column',
    gap: 4,
  },
  img: {
    height: 220,
    width: '100%',
    borderRadius: 6,
    flexShrink: 0,
  },
  container_title: {
    marginTop: 16,
    padding: 8,
    flexDirection: 'column',
    gap: 8,
    borderRadius: 6,
  },
  conatiner_trending: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  txt_trending: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  conatiner: {
    padding: 24,
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
  },
  ic: {
    width: 24,
    height: 24,
  },
});

const DaTaNotifi = [
  {
    _id: '1',
    title:
      'Pilot proposes to flight attendant girlfriend in front of passengers',
    content:
      'Phổ thông Năng khiếu là trường công lập đầu tiên ở Việt Nam dạy và thi 6 môn của chương trình Advanced Placement (AP), thường gọi là chương trình dự bị đại học Mỹ.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhukHFdx5p-tLNBrU1j52IeYHmn3VlN3YRw&s',
    createdAt: '1h ago',
    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',
      name: '',
      avatar: '',
    },
  },
  {
    _id: '2',
    title: 'Trump can’t be in two places at once in double courtroom drama',
    content:
      'Các kỳ thi đánh giá năng lực, tư duy diễn ra từ tháng 3 đến 7, thí sinh có thể tham dự nhiều đợt và đăng ký từ đầu tháng 2.',
    image: 'https://ichef.bbci.co.uk/images/ic/768x432/p0g71c5s.jpg',
    createdAt: '1h ago',
    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',
      name: '',
      avatar: '',
    },
  },
  {
    _id: '3',
    title:
      'BBC Director General Tim Davie has made protecting impartiality one of his major priorities. Oli',
    content:
      'Ngày nghỉ Tết cuối cùng, hàng chục trang bài tập Toán, Tiếng Việt và Tiếng Anh của Anh Thư được giải quyết, nhưng do mẹ và dì làm giúp.',
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/230223121345-bbc-director-general-tim-davie-1122-file.jpg?q=w_1110,c_fill/f_webp',
    createdAt: '1 Day ago',
    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',
      name: '',
      avatar: '',
    },
  },
  {
    _id: '4',
    title:
      'Premier League club Nottingham Forest accuses refereeing official of supporting rival team after defeat',
    content:
      'Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.',
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2149637911.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp',
    createdAt: '2023-01-12T06:26:17.539Z',
    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',
      name: '',
      avatar: '',
    },
  },
];
