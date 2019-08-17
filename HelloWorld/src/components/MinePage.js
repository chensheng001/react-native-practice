import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class MinePage extends Component {
  static navigationOptions = {
    tabBarLabel: 'Mine',
    headerTitle: '我的 header',
    tabBarIcon: ({focused}) => {
      if (focused) {
        return (
          <Image style={styles.tabBarIcon} source={require("../assets/imgs/qq/icon3.png")}/>
        );
      }
      return (
        <Image style={styles.tabBarIcon} source={require("../assets/imgs/qq/icon3.png")}/>
      );
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>这是Mine</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarIcon: {
    width: 21,
    height: 21,
  }
});