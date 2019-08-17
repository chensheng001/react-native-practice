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
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import MinePage from './src/components/MinePage';
import HomePage from './src/components/HomePage';
import StackNav01 from './src/components/stackNav/StackNav01';
import StackNav02 from './src/components/stackNav/StackNav02';
import StackNav03 from './src/components/stackNav/StackNav03';
import StackNav04 from './src/components/stackNav/StackNav04';
import StackNav05 from './src/components/stackNav/StackNav05';
const {width} = Dimensions.get('window');

const TopBar = createMaterialTopTabNavigator(
  {
    StackNav01: {
      screen: StackNav01,
      navigationOptions: {
        tabBarLabel: 'StackNav01'
      }
    },
    StackNav02: {
      screen: StackNav02,
      navigationOptions: {
        tabBarLabel: 'StackNav02'
      }
    },
    StackNav03: {
      screen: StackNav03,
      navigationOptions: {
        tabBarLabel: 'StackNav03'
      }
    },
    StackNav04: {
      screen: StackNav04,
      navigationOptions: {
        tabBarLabel: 'StackNav04'
      }
    },
    StackNav05: {
      screen: StackNav05,
      navigationOptions: {
        tabBarLabel: 'StackNav05'
      }
    }
  },
  {
    initialRouteName: 'StackNav01',
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true,
      upperCaseLabel: false, // 是否大写
      activeTintColor: 'red', // 活动选项卡
      inactiveTintColor: 'red', // "非活动" 选项卡
      tabStyle: {
        // 选项卡样式
        width: width / 4,
        // paddingTop: 35,
        paddingBottom: 4
      },
      style: {
        backgroundColor: 'white' // 头部导航栏样式
      },
      indicatorStyle: {
        backgroundColor: 'red' // 指示器样式
      }
    }
  }
)

/*底部菜单栏*/
const BottomMater = createBottomTabNavigator(
  {
    HomePage: {
      screen: TopBar,
      navigationOptions: {
        tabBarColor: '#3472EE',
      }
    },
    MinePage: {
      screen: MinePage,
      navigationOptions: {
        tabBarColor: '#EC3E3E',
      }
    },
  },
  {
    initialRouteName: 'HomePage', //第一次加载时初始选项卡路由的 routeName
    order: ['HomePage','MinePage'], //定义选项卡顺序的 routeNames 数组
    tabBarOptions: {
      activeTintColor: 'red',//标签和图标选中颜色
      activeBackgroundColor: 'yellow',//导航选中背景色
      inactiveTintColor: '#000', //标签和图标未选中颜色
      inactiveBackgroundColor: 'white',//导航未选中背景色
      showIcon: true,//是否显示 Tab 的图标,默认不显示
      style: {
        backgroundColor: 'yellow',//tabBar背景色
        height: 49
      },
      // labelStyle 选项卡标签的样式对象
      // tabStyle 选项卡的样式对象
    },
  }
);

const Stack = createStackNavigator({
  BottomBar: {
    screen: BottomMater,
    navigationOptions: {
      header: null
    }
  }
})

//const AppContainer = createAppContainer(StackNavigator);  //顶部导航
const AppContainer = createAppContainer(Stack); //底部导航


const App = () => {
  return <AppContainer />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
