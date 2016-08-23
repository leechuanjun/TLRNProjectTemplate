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
  TextInput,
  Image,
  AlertIOS,
  Navigator,
} from 'react-native';

import ToastIOS from 'react-native-sk-toast';

import NWDTabBar from './nwdTabBar';
import NWDHttpClient from '../Service/nwdHttpClient';
import NWDUtil from '../Common/nwdUtil';
import NWDMacroDefine from '../Common/nwdMacroDefine';
import NWDStorage from '../Common/nwdStorage';
import NWDRegister from '../Business/account/nwdRegister';

export default class NWDLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      telephone: '',
      password: '',
    };
    global.nwdStorage = NWDStorage;
  }

  componentWillMount() {
    // 读取本地账户数据
    nwdStorage.load({
      key: 'loginState',
      autoSync: false,
      syncInBackground: true
    }).then(ret => {//如果找到数据，则在then方法中返回
      this.setState({
        telephone: ret.telephone,
        password: ret.password,
      });
    }).catch(err => {
      console.warn(err);
    });
  }

  _login() {
    if (this.state.telephone == '') {
      ToastIOS.bottom('手机号为空');
      return;
    }
    if (this.state.password == '') {
      ToastIOS.bottom('密码为空');
      return;
    }
    var that = this;
    NWDHttpClient.nwdLogin(this.state.telephone, this.state.password, function(result) {
      if (result == NWDMacroDefine._MD_Result_Success) {
        // 保存数据
        nwdStorage.save({
          key: 'loginState',
          rawData: {
            telephone: that.state.telephone,
            password: that.state.password,
          }
        })
        that.props.navigator.resetTo({
          component: NWDTabBar,
          title: 'Home',
        });
      }
      else {
        ToastIOS.bottom('登陆失败,用户名或者密码错误！');
      }
    });
  }

  _unLogin() {
    AlertIOS.alert(
      '退出',
      '确认退出吗？',
      [
        {
          text: '确定',
          onPress: () => console.log('你单击了确定按钮！'),
        },
        {
          text: '取消',
          onPress: () => console.log('你单击了取消按钮！'),
        },
      ]
    );
  }

  _register() {
    this.props.navigator.push({
      component: NWDRegister,
      title: "register",
      navigationBarHidden: false,
    });
  }

  render() {
    return (
      <ScrollView style={styles.loginContainer} keyboardShouldPersistTaps={false}>
        <Image
          style={styles.logoImage}
          source={require('image!login')} />

        <TextInput
          style={styles.accountInput}
          placeholder='请输入手机号码'
          onChangeText={(telephone) => this.setState({telephone})}
          defaultValue={this.state.telephone}
          keyboardType='numeric'
          ref='textInput'
          onFocus={() => {this.refs.textInput.focus()}} />
        <View style={{height:1,backgroundColor:'#f4f4f4'}} />
        <TextInput
          style={styles.passowrdInput}
          placeholder='请输入密码'
          password={true}
          onChangeText={(password) => this.setState({password})}
          defaultValue={this.state.password} />

        <TouchableOpacity onPress={() => this._login()}>
          <View style={styles.loginButton}>
            <Text style={{color: '#fff'}}>登录</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.viewBottom}>
          <Text style={styles.viewUnlogin} onPress={this._unLogin.bind(this)}>
               无法登录?
          </Text>
          <Text style={styles.viewRegister}  onPress={this._register.bind(this)}>
               新用户
          </Text>
        </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  logoImage:{
    borderRadius: 35,
    height: 70,
    width: 70,
    marginTop: 120,
    alignSelf: 'center',
  },

  accountInput:{
    backgroundColor: '#fff',
    marginTop: 20,
    height: 35,
    paddingLeft: 20,
    fontSize: 14,
  },

  passowrdInput:{
    backgroundColor: '#fff',
    height: 35,
    paddingLeft: 20,
    fontSize: 14,
  },

  loginButton:{
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#63B8FF',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewUnlogin:{
    fontSize:12,
    color:'#63B8FF',
    marginLeft:10,
  },

  viewRegister:{
    fontSize:12,
    color:'#63B8FF',
    marginRight:10,
    alignItems:'flex-end',
    flex:1,
    flexDirection:'row',
    textAlign:'right',
  },

  viewBottom:{
    flex:1,
    flexDirection:'row',
    alignItems: 'flex-end',
    bottom:-(NWDUtil.size.height/2-20),
  },
})
