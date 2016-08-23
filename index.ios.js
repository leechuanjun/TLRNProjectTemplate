/**
 * Created by TridonLee on Mon July 22 2016 11:28:33 GMT+0800 (CST).
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  Navigator,
} from 'react-native';

import NWDLandingGuide from './views/App/nwdLandingGuide';
import NWDTabBar from './views/App/nwdTabBar';
import NWDStorage from './views/Common/nwdStorage';
// import NWDLogin from './views/App/nwdLogin';

class TLRNProjectTemplate extends Component {
  constructor() {
    super();
    this.state = {
      showLandingPage: false,
    };
    global.nwdStorage = NWDStorage;
  }

  componentWillMount() {
    // 读取本地账户数据
    nwdStorage.load({
      key: 'appVersion',
      autoSync: false,
      syncInBackground: true
    }).then(ret => {
      var that = this;
      setTimeout(function () {
        that.setState({
          showLandingPage: (ret.version != '101'),
        });
      }, 1);//1毫秒

    }).catch(err => {
      console.warn(err);
    });

  }

  componentDidMount() {
    StatusBar.setBarStyle(0);//状态栏为黑色：0； 为白色：1
    // 保存数据
    // nwdStorage.save({
    //   key: 'appVersion',
    //   rawData: {
    //     version: '100',
    //   }
    // })
  }

  render() {
    if (this.state.showLandingPage) {
      return (<NWDLandingGuide />);
    } else {
      // return (
      //   <Navigator
      //     initialRoute = {{name:"login", component: NWDLogin}}
      //     renderScene={(route, navigator) => {
      //       let Component = route.component;
      //       return <Component {...route.params} navigator={navigator} />}
      //     }
      //   />);
      return (<NWDTabBar />);
    }
  }
}

AppRegistry.registerComponent('TLRNProjectTemplate', () => TLRNProjectTemplate);
