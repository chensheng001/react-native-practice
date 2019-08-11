/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    Dimensions
} from 'react-native';
import Demo01 from './src/components/Demo01';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
    <View style={styles.container}>

        <Demo01/>
      {/*<View style={{backgroundColor:'powderblue',height:50}}>
        <Text>111</Text>
      </View>
      <View style={{backgroundColor:'skyblue',height:80}}>
          <Text>222</Text>
      </View>
        <View style={{backgroundColor:'steelblue',height:100}}>
            <Text>333</Text>
        </View>
        <View>
            <Text>
                当前屏幕宽度：{Dimensions.get('window').width}
            </Text>
            <Text>
                当前屏幕高度：{Dimensions.get('window').height}
            </Text>
            <Text>
                当前分辨率：{Dimensions.get('window').scale}
            </Text>
        </View>*/}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'pink',
        /*flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'*/
    }
})

export default App;
