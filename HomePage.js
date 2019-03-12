import React from 'react';
import { StyleSheet, Text, View, Image, PanResponder,ScrollView } from 'react-native';
import Banner from './Banner.js'
import CardWidget from './CardWidget.js'
import CardImage from './CardImage.js'
import data from './MockData';
import renderWidgetMapper from './WidgetMapper.js';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this._layoutProvider = new LayoutProvider(
      (index) => {
        if (index === 0) {
            return 'full';
        } else {
          return 'normal';
      }
    },
    (type, dim) => {
      switch (type) {
        case 'full':
          dim.width = 360;
          dim.height = 360;
          break;
        case 'normal':
          dim.width = 360;
          dim.height = 250;
      }
    }
  );
  this._dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
  });
  }

 renderItem(index,data) {
    switch(data.name) {
      case 'BANNER' :
        return <Banner />
        break;
      case 'CARD' :
        return <CardWidget data={data.data} />
        break;
      case 'CARDIMAGE' :
        return <CardImage data={data.data} />
        break;
    }
 }
  render() {
    const childData = data.widgets;
    this._dataProvider = this._dataProvider.cloneWithRows(childData, undefined);
    return (
      <View style={styles.container}>
       
            contentContainerStyle={styles.mainContainerStyle}
            layoutProvider={this._layoutProvider}
            dataProvider={this._dataProvider}
            rowRenderer={this.renderItem}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainerStyle: { 
    width:360,
    height:1500,
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  container: {
    height:1500,
    width:360,
    display:'flex',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  upButton: {
    width:50,
    height:50,
    position:'absolute',
    bottom:10
  },
  plusButton: {
    width:40,
    height:40,
    position:'absolute',
    top:30,
    left:'85%'
  }
});
