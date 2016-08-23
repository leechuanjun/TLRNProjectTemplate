'use strict';

var NWDBaseHttp = {
  /**
   * 基于fetch的get方法
   * @method post
   * @param {string} url
   * @param {function} callback 请求成功回调
   */
  get: function(url, successCallback, failCallback){
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        successCallback(JSON.parse(responseText));
      })
      .catch(function(err){
        failCallback(err);
      });
  },

  //post请求
  post: function (url, data, callback) {
    // var aa = JSON.stringify(data);
    // AlertIOS.alert('测试', aa);
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
    .then((response) => response.text())
    .then((responseText) => {
      // alert(responseText);
      callback(JSON.parse(responseText));
    });
  },

  // fetchData() {
  //   fetch(REQUEST_URL)
  //     .then(response => response.json())
  //     .then(responseData => {
  //       this.setState({
  //         movies: this.state.movies.cloneWithRows(responseData.movies),
  //         loaded: true
  //       })
  //     })
  //     .done()
  // },

  //Key
  key: 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE'
};

module.exports = NWDBaseHttp;
