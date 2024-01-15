import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity,Pressable} from 'react-native'
import React, { useState } from 'react'
import ItemListNews from './ItemListNews'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomePage = (props) => {
    const [selectedId, setSelectedId] = useState(1);
    const {navigation} = props;
    const clickNe = () => {
        navigation.navigate('NewDetail2')
    }

    return (
        <View style={styles.container}>
            <View  style={styles.container_kabar}>
                <Image style = {{width: 99,height: 30}}source={require('../media/ic_kabar.png')}></Image>
                <View>
                    <Image style = {{width: 42,height: 42}} source={require('../media/ic_bell.png')}></Image>
                </View>
            </View>
            <ScrollView 
                  horizontal={false} // chiều
                  showsHorizontalScrollIndicator={false} // thanh cuộn
                  showsVerticalScrollIndicator={false} // thanh cuộn
            >
            <View style={styles.container_search}>
                <Image style = {{width: 24,height: 24}} source={require('../media/ic_search.png')}></Image>
                <TextInput placeholder='Search' style = {styles.input_search}></TextInput>
                <Image style = {{width: 24,height: 24}} source={require('../media/ic_fillter.png')}></Image>
            </View>
          
            <View style={styles.container_trending}>
                <Text style = {styles.trending_text_1}>Trending</Text>
                <Text style = {styles.trending_text_2}>See all</Text>
            </View>
            <View style={styles.container_cards}>
                <Image style={styles.container_lineNew_img} source={require('../media/ic_tau.png')}></Image>
                <View >
                    <Text style={styles.lineNew_tex1} >
                        Europe
                    </Text>
                    <Pressable onPress={clickNe}>
                    <Text style={[styles.lineNew_tex1,styles.lineNew_tex2]}  numberOfLines={1}>
                        Russian warship: Moskva sinks in Black Sea
                    </Text>
                    </Pressable>
                  
                </View>
                <View style = {{flexDirection : 'row', justifyContent: 'space-between', alignItems :'center', width: '100%'}}>
                    <View style={styles.container_cards_bbcNew}>
                    <Image style = {styles.imgbbc}source={require('../media/ic_bbc.png')}></Image>
                    <Text style={styles.bbc_text1}>BBC News</Text>
                    <Image style={styles.imgClock}source={require('../media/ic_clock.png')}></Image>
                    <Text style={styles.bbc_text2}>4h ago</Text>
                    </View>
                    <View>
                        <Image style = {styles.bbc_abbreviate}source={require('../media/....png')}></Image>
                    </View>
                    
                </View>
            </View>
            <View style={styles.container_trending}>
                <Text style = {styles.trending_text_1}>Lastest</Text>
                <Text style = {styles.trending_text_2}>See all</Text>
            </View>
            <View  style={{ height: 50, width: '100%'}}>
                <ScrollView
                    horizontal={true} // chiều
                    showsHorizontalScrollIndicator={false} // thanh cuộn
                    showsVerticalScrollIndicator={false} // thanh cuộn
                >
                    {
                        CATEGORIES.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    setSelectedId(item.id)
                                }}
                                    style={styles.item} key={index} >
                                    <Text>{item.name}</Text>
                                    <View
                                        style={item.id.toString() == selectedId.toString() ?
                                            styles.underline : undefined}></View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
            {
                DaTa.map((item) => <ItemListNews key={item._id} data = {item}/>)
            }
             </ScrollView>
        </View>
    )
}

export default HomePage

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
    bbc_abbreviate:{
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
        lineHeight:20,
        letterSpacing: 0.12,
        color: '#4E4B66',
        marginStart: 4,
    },

    imgClock: {
        width: 14,
        height: 14,
        marginStart: 12
    },

    bbc_text1:{
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight:20,
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
        alignItems :'center'
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
        lineHeight:20,
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
        lineHeight:21,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    trending_text_1: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '800',
        fontStyle: 'normal',
        lineHeight:24,
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
        backgroundColor: '#FFFFFF'
    }
})


// dữ liệu cứng
var CATEGORIES = [{
    "id": 1,
    "name": "Robby"
}, {
    "id": 2,
    "name": "Wanda"
}, {
    "id": 3,
    "name": "Derrek"
}, {
    "id": 4,
    "name": "Eleonora"
}, {
    "id": 5,
    "name": "Issy"
}, {
    "id": 6,
    "name": "Herrick"
}, {
    "id": 7,
    "name": "Erhart"
}, {
    "id": 8,
    "name": "Stavro"
}, {
    "id": 9,
    "name": "Giacobo"
}, {
    "id": 10,
    "name": "Jana"
}, {
    "id": 11,
    "name": "Constantine"
}, {
    "id": 12,
    "name": "Nikola"
}, {
    "id": 13,
    "name": "Nolie"
}, {
    "id": 14,
    "name": "Jarred"
}, {
    "id": 15,
    "name": "Baxie"
}, {
    "id": 16,
    "name": "Mike"
}, {
    "id": 17,
    "name": "Sutherland"
}, {
    "id": 18,
    "name": "Charmaine"
}, {
    "id": 19,
    "name": "Bobbe"
}, {
    "id": 20,
    "name": "Ferris"
}, {
    "id": 21,
    "name": "Byrom"
}, {
    "id": 22,
    "name": "Deeyn"
}, {
    "id": 23,
    "name": "Nerita"
}, {
    "id": 24,
    "name": "Sherry"
}, {
    "id": 25,
    "name": "Chrisy"
}, {
    "id": 26,
    "name": "Spencer"
}, {
    "id": 27,
    "name": "Gwenette"
}, {
    "id": 28,
    "name": "Morty"
}, {
    "id": 29,
    "name": "Marie"
}, {
    "id": 30,
    "name": "Udall"
}, {
    "id": 31,

}]

const DaTa = [
    {
        "_id": "1",
        "title": "Trường công lập đầu tiên dạy và thi chương trình dự bị đại học Mỹ",
        "content": "Phổ thông Năng khiếu là trường công lập đầu tiên ở Việt Nam dạy và thi 6 môn của chương trình Advanced Placement (AP), thường gọi là chương trình dự bị đại học Mỹ.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/02/02/328463889-891024988600042-6177-9136-2603-1675295134.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BCVEDMn0Smx1XLiCRi0rrA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "2",
        "title": "Lịch thi đánh giá năng lực, tư duy năm 2023",
        "content": "Các kỳ thi đánh giá năng lực, tư duy diễn ra từ tháng 3 đến 7, thí sinh có thể tham dự nhiều đợt và đăng ký từ đầu tháng 2.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/117f5804708184dfdd90-162556098-1999-1999-1675148782.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=Ie6cEqbs1YL8PDAG85QrsA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "3",
        "title": "Đối phó với bài tập Tết",
        "content": "Ngày nghỉ Tết cuối cùng, hàng chục trang bài tập Toán, Tiếng Việt và Tiếng Anh của Anh Thư được giải quyết, nhưng do mẹ và dì làm giúp.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/4313-1662984910-1675082690-4516-1675083076.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=BnjiAv8Bq8iaZcGQ2jJC3Q",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "4",
        "title": "Đường trở thành giáo viên ở Mỹ của một phụ nữ Việt",
        "content": "Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4Pvlut0Bl1rw",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "5",
        "title": "Cô giáo đèo hai con giữa mưa rét, vượt 100 km đến trường",
        "content": "Cô Nguyễn Thị Hà gây xúc động khi đèo hai con, vượt 100 km trong mưa lạnh để trở lại điểm trường ở xã Trà Dơn, huyện Nam Trà My, sau Tết.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/untitled-1675115482-6811-1675116325.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=sDv36arZmV-B6KEYjStHbA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "6",
        "title": "Nam sinh trả lại hơn 40 triệu đồng nhặt được",
        "content": "Lê Hải Thăng, 17 tuổi, được tuyên dương vì nộp lại túi nylon đựng hơn 40 triệu đồng nhặt được hôm 29 Tết.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/tuyenduongnamsinh-1675076463-2581-1675077291.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=vlqGCurXgocetWe4SYl13g",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "7",
        "title": "Cho con đi ngắm trăng, sao từ bé",
        "content": "Từ khi 4 tuổi, con trai chị Hồng Anh đã được đưa đi ngắm nhật thực, mưa sao băng và tham gia câu lạc bộ thiên văn trẻ em.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/danny-kim-png-1929-1673698701-1199-6656-1675037287.png?w=300&h=180&q=100&dpr=1&fit=crop&s=uYWNW2YjIsttuhLT4s8fqQ",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    }
]