import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

class CScrollView extends Component {
  constructor(props) {
    super(props);
  }
  renderChildView() {
    var allChild = [];
    var color = ["#ddd", "#eee", "#ccc", "#333", "pink"];
    for (var i = 0; i < 5; i++) {
      allChild.push(
        // eslint-disable-next-line react-native/no-inline-styles
        <View
          key={i}
          style={{ height: 120, width: width, backgroundColor: color[i] }}
        >
          <Text>{i}</Text>
        </View>
      );
    }
    return allChild;
  }

  render() {
    return (
      <View>
        <ScrollView
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {this.renderChildView()}
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {}
});

export default CScrollView;
