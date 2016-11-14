import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class Teste extends Component {
  render() {
    return (
      <Text>teste!</Text>
    );
  }
}

class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
      <Teste/>
    );
  }
}



AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
