import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props)
  {
     super(props)
     this.state = { count: 0 }
  }
  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress} >
            <Text>Touch Here</Text>
        </TouchableOpacity>
        <Button style={styles.button} onPress={this.onPress} title="Button"/>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.text}>Count = {this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    margin: 10,
  },
});
