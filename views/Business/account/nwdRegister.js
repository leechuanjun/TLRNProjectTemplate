
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  AlertIOS,
  NavigatorIOS,
} from 'react-native';

import ToastIOS from 'react-native-sk-toast';

import NWDUtil from '../../Common/nwdUtil';
import NWDHttpClient from '../../Service/nwdHttpClient';
import NWDMacroDefine from '../../Common/nwdMacroDefine';
// import NWDTabBar from '../../App/nwdTabBar';

export default class NWDRegister extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      telephone: '',
      password: '',
    };
  }

  render(){

    return (
      <ScrollView style={{paddingTop:80}}>
        <View style={styles.row}>
          <Text style={styles.label}>用户名</Text>
          <TextInput style={styles.input} autoCorrect={false} autoCapitalize={'none'} autoFocus={true} onChangeText={this._setUserName.bind(this)}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>密   码</Text>
          <TextInput style={styles.input} autoCorrect={false} autoCapitalize={'none'} password={true} placeholder="初始密码" onChangeText={this._setPassword.bind(this)}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>手机号码</Text>
          <TextInput style={styles.input} autoCorrect={false} autoCapitalize={'none'} onChangeText={this._setTelephone.bind(this)}/>
        </View>

        <View style={{marginTop:30, alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={() => this._register()}>
            <View style={styles.btn}>
              <Text>注册</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._cancle.bind(this)}>
            <View style={[styles.btn,{marginTop:15}]}>
              <Text>取消</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  _setUserName(val){
    this.setState({
      username: val
    });
  }

  _setPassword(val){
    this.setState({
      password: val
    });
  }

  _setTelephone(val){
    this.setState({
      telephone: val
    });
  }

  _register(){
    var username = this.state.username;
    var password = this.state.password;
    var telephone = this.state.telephone;

    if(!username || !password || !telephone){
      return AlertIOS.alert('提示', '用户名、初始密码、手机号必填，请确认!');
    }

    var that = this;
    NWDHttpClient.nwdRegister(username, telephone, password, function(result) {
      if (result == NWDMacroDefine._MD_Result_Success) {
        // AlertIOS.alert('成功','注册成功，请告知用户初始密码');
        that.props.navigator.pop();
        // that.props.navigator.resetTo({
        //   component: NWDTabBar,
        //   title: 'Home',
        // });
      }
      else {
        ToastIOS.bottom('注册失败！');
      }
    });
  }

  _cancle() {
    this.props.navigator.pop();
  }
}


var styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:7,
  },
  label:{
    width:70,
    marginLeft:15,
  },
  input:{
    borderWidth: NWDUtil.pixel,
    height:35,
    flex:1,
    marginRight:20,
    borderColor:'#ddd',
    borderRadius: 4,
    paddingLeft:5,
    fontSize:14,
  },
  btn:{
    borderColor:'#268DFF',
    height:35,
    width:200,
    borderRadius:5,
    borderWidth:NWDUtil.pixel,
    alignItems:'center',
    justifyContent:'center'
  }
});
