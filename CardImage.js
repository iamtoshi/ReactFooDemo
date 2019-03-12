import React from 'react';
import { StyleSheet, Text, View, Image, PanResponder,ScrollView } from 'react-native';

export default class CardImage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <View style={styles.card}> 
            <Image  source={{uri: this.props.data.imageUrl}} style={{marginTop:20, width: 300, height: 300}}/>
            <Text style={styles.speakerTitle}>{this.props.data.speakerName}</Text>
            <Text style={styles.talk}>{this.props.data.talkDetails}</Text>
            <Text style={styles.speaker}>{this.props.data.speakerDetails}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
        flex:1,
        width: '100%',
        backgroundColor: '#64cbea',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom:20
      },
      speakerTitle: {
        color: '#ffffff',
        fontSize: 24,
        // fontFamily: 'sans-serif, Cochin',
        fontWeight: 'bold',
        margin:10
      },
      talk: {
        color: '#ffffff',
        fontSize: 18,
        // fontFamily: 'sans-serif, Cochin',
        fontWeight: 'bold',
        margin: 10
      },
      speaker: {
        color: '#ffffff',
        fontSize: 16,
        // fontFamily: 'sans-serif, Cochin',
        margin: 10
      }

});

