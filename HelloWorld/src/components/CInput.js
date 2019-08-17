import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class CInput extends Component {
  render() {
    return (
      <View>
        <TextInput
          clearButtonMode={"always"}
          placeholder={"默认"}
          keyboardType={"default"}
          multiline={true}
          onChangeText={text => {
            this.changeText(text);
          }}
          style={styles.input}
        />
        <TextInput secureTextEntry={true} style={styles.input} />
      </View>
    );
  }

  changeText(text) {
    console.log(text);
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#ddd"
  }
});

export default CInput;
