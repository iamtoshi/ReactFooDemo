import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  TouchableHighlight
} from "react-native";

export default class CardWidget extends React.Component {
  render() {
    debugger;
    return (
        <View style={styles.card}>
          <Text style={styles.cardText}>{this.props.data.title}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex:1,
    width: "95%",
    height: 200,
    backgroundColor: "#58d8f4",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  cardText: {
    color: "#ffffff",
    fontSize: 30
  }
});
