import React, { Component } from 'react';
import {View, Text} from 'react-native';

class StackNav02 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount(): void {

  }

  getMoviesFromApiAsync = ()=> {
    return fetch('http://facebook.github.io/react-native/movies.json',{
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": 'application/json',
        "type":"getUserData",
        "Connection": "keep-Alive",
      },
      body: JSON.stringify({})
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <Text>StackNav02</Text>
      </View>
    )
  }
}

export default StackNav02;