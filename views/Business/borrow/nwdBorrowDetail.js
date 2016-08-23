/**
 * Created by leechuanjun on 16/7/12.
 */

'use strict';

import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   ScrollView,
   ListView,
   TouchableHighlight,
   TouchableOpacity,
   RefreshControl,
} from 'react-native';

import NWDUtil from '../../Common/nwdUtil';
import Service from '../../service/service';

export default class NWDBorrowDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loaded: 0,
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollView style={styles.container}
        scrollEnabled={true}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={()=>this._onRefresh()}
            tintColor="#3a5795"
            title="下拉刷新中..."
          />
        }>
        <View>
          <Text>产品详情页面</Text>
        </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imageSize: {
    height:80,
    resizeMode: Image.resizeMode.stretch,
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#F1F1F1',
  },
  rightContainer: {
    flex: 1,
    marginTop:10,
  },
  productName: {
    flex: 1,
    flexDirection: 'row',
  },
  iconTitle: {
    width:50,
    height:80,
    resizeMode: Image.resizeMode.contain,
    marginLeft: 5,
    marginRight: -5,
  },
  title: {
    flex: 2,
    marginLeft: 15,
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'left',
    fontWeight: '600',
  },
  personCount: {
    flex: 1,
    marginTop: -1,
    marginBottom: 8,
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'normal',
    color: 'red'
  },
  persons: {
    flex: 1,
    marginRight:10,
    marginBottom: 8,
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'normal',
  },
  desc: {
    flex: 1,
    marginLeft: 15,
    fontSize: 12,
    textAlign: 'left',
  },
  baseText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#4a4a4a'
  },
});
