import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../utils/CoinIcons';

const CoinCard = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: images[props.symbol]}}/>
      <Text>{props.symbol}</Text>
      <Text>{props.coin_name}</Text>
      <Text style={styles.price}>{props.price_usd}</Text>
      <Text>Change past 24 hours: {props.percent_change_24h}</Text>
      <Text>Change past 7 days: {props.percent_change_24h}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  image: {
    width: 40,
    height: 40
  },
  price: {
    fontWeight: 'bold'
  }
})

export default CoinCard;