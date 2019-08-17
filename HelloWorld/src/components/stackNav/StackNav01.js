import React, { Component } from 'react';
import {View, Text, Button, Image} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

class StackNav01 extends Component{
  render() {
    return (
      <View>
        <Text>StackNav01</Text>
        <Text style={{marginBottom: 20, width: 200, height: 200, backgroundColor: 'gray'}}>
          <AntDesign name = {'home'} />
          <Image source={{uri: 'asset:/logo-og.png'}} style={{width: 100, height: 100}}/>
        </Text>
        <Button
          title="跳转到Two页面"
          onPress={() => {
            this.props.navigation.navigate('StackNav02')
          }}
        />
      </View>
    )
  }
}

export default StackNav01;