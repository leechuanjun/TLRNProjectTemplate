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

import NWDUtil from '../Common/nwdUtil';
import NWDTabBar from './nwdTabBar';

export default class NWDLandingSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterState: false,
    };
  }

  _enterAppview() {
    var that = this;
    setTimeout(function () {
      that.setState({enterState : true});
    }, 1);//1毫秒
  }

  render() {
    if (this.state.enterState) {
      return (<NWDTabBar />);
    }
    else {
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
                <Text style={styles.enterAppButton} onPress={this._enterAppview.bind(this)}>开始体验</Text>
              </View>
            </View>
          </View>

        </Swiper>);
      }
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
  enterAppButton: {
    backgroundColor: '#fff',
    padding: 10,
    textAlign: 'center',
    width: NWDUtil.size.width,
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
