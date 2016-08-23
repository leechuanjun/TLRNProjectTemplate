/**
 * Created by Bruce on Mon Jan 25 2016 23:28:33 GMT+0800 (CST).
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  RefreshControl,
  NavigatorIOS,
} from 'react-native';

import nwdDataTemp from '../Data/nwdDataTemp';

export default class NWDBorrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: new ListView.DataSource({
        rowHasChanged: (row1, row2) => { row1 !== row2 }
      }),
      loaded: false,
      isRefreshing: false,
    }
  }

  componentDidMount() {
    this.setState({
      products: this.state.products.cloneWithRows(nwdDataTemp.allProducts),
      loaded: true,
    });
  }

  _onRefresh() {
     this.setState({
       isRefreshing: true,
     });

     setTimeout(() => {
      //  准备下拉刷新的数据
      this.setState({
        products: this.state.products.cloneWithRows(nwdDataTemp.allProductsLast),
        loaded: true,
        isRefreshing: false,
      });
    }, 2000);
  }

  render() {
    return (
      <ScrollView style={styles.container} scrollEnabled={true}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={()=>this._onRefresh()}
            tintColor="#3A5795"
            title="下拉刷新中..."
          />}
        >
        <Image style={ styles.imageSize } source={require('image!borrow_image')} />
        {
          (this.state.loaded) &&
          <ListView
            dataSource={this.state.products}
            renderRow={(product) => this.renderProduct(product)}
            style={styles.listView}
          />
        }
        { (!this.state.loaded) && this.renderLoadingView() }

      </ScrollView>
    )
  }

  renderProduct(product) {
    return (
      <TouchableOpacity onPress={() => this._navigateToSubview(product)}>
        <View style={styles.productContainer}>
            <Image
              style={ styles.iconTitle }
              source={ product.iconpro }//source={{uri: movie.posters.thumbnail}}
            />
            <View style={styles.rightContainer}>
              <View style={styles.productName}>
                <Text style={[styles.baseText, styles.title]}>{ product.title }</Text>
                <Text style={[styles.baseText, styles.personCount]}>{ product.persons }</Text>
                <Text style={[styles.baseText, styles.persons]}>人已成功借款</Text>
              </View>
              <Text style={[styles.baseText, styles.desc]}>{ product.desc }</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>Loading products...</Text>
      </View>
    )
  }

  _navigateToSubview(product) {
    alert(product.title);
    // this.props.navigator.push({
    //   message: '向右拖拽关闭页面',
    //   sceneConfig: NavigatorIOS.SceneConfigs.FloatFromRight,
    // });
  }
};

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F1F1F1',
  },
  imageSize: {
    height:80,
    resizeMode: Image.resizeMode.stretch,
  },
  listView: {
    marginBottom: 70,
    backgroundColor: '#FFFFFF',
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#F1F1F1',
  },
  rightContainer: {
    flex: 1,
    marginTop:10,
  },
  productName: {
    flex: 1,
    flexDirection: 'row',
  },
  iconTitle: {
    width:50,
    height:80,
    resizeMode: Image.resizeMode.contain,
    marginLeft: 5,
    marginRight: -5,
  },
  title: {
    flex: 2,
    marginLeft: 15,
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'left',
    fontWeight: '600',
  },
  personCount: {
    flex: 1,
    marginTop: -1,
    marginBottom: 8,
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'normal',
    color: 'red'
  },
  persons: {
    flex: 1,
    marginRight:10,
    marginBottom: 8,
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'normal',
  },
  desc: {
    flex: 1,
    marginLeft: 15,
    fontSize: 12,
    textAlign: 'left',
  },
  baseText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#4a4a4a'
  },

});
