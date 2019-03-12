import React from 'react';
import { StyleSheet, Text, View, Image, PanResponder } from 'react-native';

export default class Banner extends React.Component {
  render() {
    debugger;
    return (
      <View style={{flex:1, alignItems:'center'}}>
        <Image resizeMode={'cover'} 
         style={{ width: 293, height: 341}} source={{uri:'https://reactfoo.in/images/reactfoo-logo.png'}} />
      </View>
    );
  }
}

