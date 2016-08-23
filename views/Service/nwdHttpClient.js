'use strict';

import React, { Component } from 'react';
import {
  View,
  AlertIOS,
} from 'react-native';

import NWDBaseHttp from './nwdBaseHttp';
import NWDService from './nwdService';
import NWDMacroDefine from '../Common/nwdMacroDefine';


var NWDHttpClient = {
  nwdLogin: function(telephone, password, resultCallback) {
    var where = '?telephone=' + telephone + '&password=' + password;

    var url = NWDService.host + NWDService.login + where;

    NWDBaseHttp.get(url, function(response){//{"code":"200","result":{"desc":"登录成功"}}
      var code = response.code;
      if (code == NWDMacroDefine._MD_Network_Success) {
        resultCallback(NWDMacroDefine._MD_Result_Success);
      }
      else {
        resultCallback(NWDMacroDefine._MD_Result_Failure);
      }
    }, function(err){
      alert(err);
      // resultCallback(NWDMacroDefine._MD_Result_Failure);
    });
  },

  nwdRegister: function(username, telephone, password, resultCallback) {
    var where = '?username=' + username + '&telephone=' + telephone + '&password=' + password;

    var url = NWDService.host + NWDService.register + where;

    NWDBaseHttp.get(url, function(response){
      var code = response.code;
      if (code == NWDMacroDefine._MD_Network_Success) {
        resultCallback(NWDMacroDefine._MD_Result_Success);
      }
      else {
        resultCallback(NWDMacroDefine._MD_Result_Failure);
      }
    }, function(err){
      alert(err);
    });
  }

};

module.exports = NWDHttpClient;
