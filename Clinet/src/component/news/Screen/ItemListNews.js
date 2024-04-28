import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'


const ItemListNews = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.content}>
        <Text style={styles.content_text}>{data.title}</Text>
        <Text>
          15m ago
        </Text>
      </View>
    </View>
  )
}

export default ItemListNews

const styles = StyleSheet.create({


  container: {
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
  },
  image: {
    width: 70,
    borderRadius: 50,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0
  },
  content: {
    width: '100%',
    width: Dimensions.get('window').width - 143,
  },
  content_text: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
})


