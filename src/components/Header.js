import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={container}>
      <Text style={text}>
        Cryptocurrency App
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 50,
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40
  }
});

const { container, text } = styles;

export default Header;