import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from '../actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    return this.props.crypto.data.map(
      (coinData, index) => <CoinCard key={index} {...coinData} />
    );
  }

  render() {
    if(this.props.crypto.isFetching){
      return (
        <View>
          <Spinner
            visible={true}
            textContent='Loading...'
            animation='fade'
          />
        </View>
      )
    }

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 50,
    paddingBottom: 100
  }
})

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);