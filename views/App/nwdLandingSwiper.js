/**
 * Created by TridonLee on Mon July 23 2016 22:25:21 GMT+0800 (CST).
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity,
  TextInput,
  Image,
  AlertIOS,
} from 'react-native';

import Swiper from 'react-native-swiper';
// import Modal from 'react-native-modalbox';

import NWDUtil from '../Common/nwdUtil';
import NWDLogin from './nwdLogin';


export default class NWDLandingSwiper extends Component {
  _navigateToLoginview() {
    this.props.navigator.push({
      component: NWDLogin,
      title: "login",
      navigationBarHidden: true,
    });
  }

  _navigateToRegisterview() {
    AlertIOS.alert(
      '注册',
      '该功能还没有实现，等待开发中...',
      [
        {
          text: '确定',
          // onPress: () => console.log('你单击了确定按钮！'),
        }
      ]
    );
  }

  render() {

    return (
      <Swiper style={styles.wrapper}
         paginationStyle={{bottom: 60}}
        loop={false}>

        <View style={styles.slideSize}>
          <Image
            style={styles.introIcon}
            source={require('../Resource/Intro/pic1.png')}>
          </Image>
        </View>

        <View style={styles.slideSize}>
          <Image
            style={styles.introIcon}
            source={require('../Resource/Intro/pic2.png')}>
          </Image>
        </View>

        <View style={styles.slideSize}>
          <Image
            style={styles.introIcon}
            source={require('../Resource/Intro/pic3.png')}>
          </Image>
        </View>

        <View style={styles.slideSize}>
          <Image
            style={styles.introIcon}
            source={require('../Resource/Intro/pic4.png')}>
          </Image>
        </View>

        <View style={styles.slideSize}>
          <Image
            style={styles.introIconLast}
            source={require('../Resource/Intro/pic5.png')}>
          </Image>
          <View style={styles.buttons}>
            <View style={styles.leftButton}>
              <Text style={styles.signInButton} onPress={this._navigateToRegisterview.bind(this)}>注册</Text>
            </View>
            <View style={styles.rightButton}>
              <Text style={styles.loginButton} onPress={this._navigateToLoginview.bind(this)}>登录</Text>
            </View>
          </View>
        </View>

      </Swiper>
    )
  }
};

var styles = StyleSheet.create({
  slideText: {
    justifyContent: 'center',
    alignItems: 'center',
    height: NWDUtil.size.height-60,
  },
  slideSize: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  signInButton: {
    backgroundColor: '#fff',
    padding: 10,
    textAlign: 'center',
    width: NWDUtil.size.width/2,
  },

  loginButton: {
    backgroundColor: '#3B5998',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    width: NWDUtil.size.width/2,
  },

  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  introIcon: {
    flex: 1,
    height: NWDUtil.size.height,
    width: NWDUtil.size.width,
  },

  introIconLast: {
    flex: 1,
    height: NWDUtil.size.height-60,
    width: NWDUtil.size.width,
  },
})
