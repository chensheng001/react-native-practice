import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  AlertIOS,
  TouchableHighlight
} from "react-native";

class CTouchEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "默认"
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.1}
          onPress={() => {
            this.click("点击");
          }}
          onPressIn={() => {
            this.click("按下");
          }}
          onPressOut={() => {
            this.click("抬起");
          }}
          onLongPress={() => {
            this.click("长按");
          }}
          style={styles.button}
        >
          <Text>click</Text>
        </TouchableOpacity>

        <Text>{this.state.text}</Text>
      </View>
    );
  }
  click(event) {
    this.setState({
      text: event
    });
    setTimeout(() => {
      console.log(this.state.text);
    });
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center"
  },
  button: {
    width: 260,
    backgroundColor: "blue"
  }
});

export default CTouchEvent;
