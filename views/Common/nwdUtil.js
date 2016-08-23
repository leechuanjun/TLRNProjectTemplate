'use strict';

import React, { Component } from 'react';
import {
  PixelRatio,
  AlertIOS,
} from 'react-native';
var Dimensions = require('Dimensions');

var NWDUtil = {

  //单位像素
  pixel: 1 / PixelRatio.get(),
  //屏幕尺寸
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

};

module.exports = NWDUtil;
