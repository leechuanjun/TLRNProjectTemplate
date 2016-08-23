/**
 * Created by vczero on 15/7/12.
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Image,
   View,
   Text
 } from 'react-native';

 import Swiper from 'react-native-swiper';

 var sliderImgs = [
   'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
   'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
   'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
 ];

export default class NWDSliderBar extends Component{

  render() {
    return (
      // <Swiper style={styles.wrapper} showsButtons={false} horizontal={true} autoplay={true} height={80} showsPagination={true}>
      <Swiper style={styles.wrapper} horizontal={true} autoplay={true} height={80}
          dot={<View style={{backgroundColor:'#FFFFFF', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          activeDot={<View style={{backgroundColor: '#FF5A44', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          paginationStyle={{
            bottom: 5, left: null, right: 10,
          }}>
        <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
        <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
        <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
      </Swiper>
    );
  }
}

var styles = StyleSheet.create({
  //slider
  wrapper: {
    height:70,
  },
  slide: {
    height:80,
    resizeMode: Image.resizeMode.contain,
  },
});
