/**
 * Created by licj on 16/05/26.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Linking
} from 'react-native';

import HTMLView from 'react-native-htmlview';

export default class BBSWebView extends Component {
  render() {
    var htmlContent = '<p><a href="http://club.niwodai.com">&hearts;niwodai</a></p>'

    return (
      <HTMLView
        value={htmlContent}
        onLinkPress={(url) => Linking.openURL(url)}//console.log('navigating to: ', url)
        stylesheet={styles}
      />
    )
  }
}

var styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // pink links
  },
})
