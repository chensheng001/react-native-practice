/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from "react-native";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";


import Demo01 from "./src/components/Demo01";
import LoginView from "./src/components/LoginView";
import CInput from "./src/components/CInput";
import CTouchEvent from "./src/components/CTouchEvent";
import CScrollView from "./src/components/CScrollView";
import DemoScrollView from "./src/components/DemoScrollView";
import CList from './src/components/CList';

/*--------------菜单栏------------------------------------------------------*/
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MinePage from './src/components/MinePage';
import HomePage from './src/components/HomePage';
import StackNav01 from './src/components/stackNav/StackNav01';
import StackNav02 from './src/components/stackNav/StackNav02';

/*头部菜单栏*/
const StackNavigator = createStackNavigator(
  {
    StackNav01: {
      screen: StackNav01,
      navigationOptions: {
        title: 'StackNav01',
        headerLeft: <Text>left</Text>,
        headerRight: <Text>right</Text>,
        headerLeftContainerStyle: {
          width: 30,
          height: 30,
          backgroundColor: '#fff'
        }
      }
    },
    StackNav02: {
      screen: StackNav02,
      navigationOptions: {
        title: 'StackNav02',
      }
    }
  },
  {
    initialRouteName: 'StackNav01',
    headerLayoutPreset: 'center',  //标题居中
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontSize: 18,
        height: 80,
        lineHeight:80
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f4511e',
      }
    }
  }
);

const AppContainer = createAppContainer(StackNavigator);  //顶部导航
//const AppContainer = createAppContainer(BottomTabNavigator); //底部导航


const App = () => {
  return <AppContainer />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
