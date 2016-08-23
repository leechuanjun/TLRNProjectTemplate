/**
 * Created by TridonLee on Mon July 22 2016 11:28:33 GMT+0800 (CST).
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  Linking,
  AlertIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import NWDHome from '../Business/nwdHome';
import NWDInvest from '../Business/nwdInvest';
import NWDBorrow from '../Business/nwdBorrow';
import NWDAccount from '../Business/nwdAccount';
import NWDLanguage from '../Common/nwdLanguage';
import NWDMacroDefine from '../Common/nwdMacroDefine';

export default class NWDTabBar extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'home',
    }
  }

  _selectTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }

  _addNavigator(component, title) {
    var isHome = (this.state.selectedTab === 'home');

    return (
      <NavigatorIOS
        style={styles.navigator}
        barTintColor='#5F97F6'
        titleTextColor='#fff'
        tintColor="#FFFFFF"
        translucent={false}
        navigationBarHidden={false}
        initialRoute={{
          component: component,
          passProps: {},
          title: title,
          leftButtonIcon: isHome? require('image!bbs'):null,
          onLeftButtonPress: isHome?() => {
            Linking.openURL("http://club.niwodai.com");
          }:null,
          rightButtonIcon: isHome? require('image!more'):null,
          onRightButtonPress: isHome? () => {
            AlertIOS.alert(
              '消息',
              '查看更多消息',
              [
                {
                  text: '确定',
                  onPress: () => console.log('你单击了确定按钮！'),
                },
              ]
            );
          }:null
        }}/>
    );
  }

  render () {
      return (
        <TabBarIOS tintColor="#38AEF6" barTintColor="#F9F9F9">
          <TabBarIOS.Item
            title = {NWDLanguage._LG_HOME}
            icon={require('image!tab_recommend')}
            selected={ this.state.selectedTab === NWDMacroDefine._MD_HOME }
            onPress={ this._selectTab.bind(this, NWDMacroDefine._MD_HOME) }
            >
            {this._addNavigator(NWDHome, NWDLanguage._LG_HOME)}
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title= {NWDLanguage._LG_INVEST}
            icon={require('image!tab_invest')}
            selected={ this.state.selectedTab === NWDMacroDefine._MD_INVEST }
            onPress={ this._selectTab.bind(this, NWDMacroDefine._MD_INVEST) }
            >
            {this._addNavigator(NWDInvest, NWDLanguage._LG_INVEST)}
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title= {NWDLanguage._LG_BORROW}
            icon={require('image!tab_borrow')}
            selected={ this.state.selectedTab === NWDMacroDefine._MD_BORROW }
            onPress={ this._selectTab.bind(this, NWDMacroDefine._MD_BORROW) }
            >
            {this._addNavigator(NWDBorrow, NWDLanguage._LG_BORROW)}
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title= {NWDLanguage._LG_MY}
            icon={require('image!tab_my')}
            selected={ this.state.selectedTab === NWDMacroDefine._MD_MY }
            onPress={ this._selectTab.bind(this, NWDMacroDefine._MD_MY) }
            >
            {this._addNavigator(NWDAccount, NWDLanguage._LG_MY)}
          </TabBarIOS.Item>
        </TabBarIOS>
      );
  }
};

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});
