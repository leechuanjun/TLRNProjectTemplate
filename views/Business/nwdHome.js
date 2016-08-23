/**
 * Created by TridonLee on Mon July 22 2016 11:28:33 GMT+0800 (CST).
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  AlertIOS,
} from 'react-native';

import NWDHomeDetail from './home/nwdHomeDetail';
import NWDSliderBar from '../Common/nwdSliderBar';
import NWDHttpClient from '../Service/nwdHttpClient';

export default class NWDHome extends Component {
  render(){
    return (
      <ScrollView style={styles.navigator}>
        <NWDSliderBar/>
        {/* <View style={styles.tradeInvest}>
          <Text style={styles.tradeInvestDesc}>累计投资：284.57亿 交易人次：1,106.01万</Text>
        </View> */}
        <View style={styles.tabContent}>
          <TouchableOpacity onPress={this._navigateToSubview.bind(this)}>
            <View style={styles.button}><Text style={styles.buttonText}>Home Content</Text></View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }

  _navigateToSubview() {
    this.props.navigator.push({
      component: NWDHomeDetail,
      title: "Detail",
      rightButtonTitle: 'New',
      onRightButtonPress: function(){
        alert('On right button press!');
      }
    })
  }
};

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  tradeInvest: {
    flex: 1,
    alignItems: 'flex-start',
  },
  tradeInvestDesc: {
    fontSize: 12,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    color:'#ff0000',
    backgroundColor:'#a3a3a3'
  }
});
