/**
 * Created by TridonLee on Mon July 25 2016 23:28:33 GMT+0800 (CST).
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import NWDLandingSwiper from './nwdLandingSwiper';

export default class NWDLandingGuide extends Component {
  render() {
    return (
      <NWDLandingSwiper />
    );
  }
}
