import React from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome-Bar';

export default class App extends React.Component{

constructor(){
  super();

  this.state={
    name:"Keaton"
  }
}

render(){
  //a statusbar that only shows on ios
    const statusBar = (Platform.OS=='ios') ? <View style = {styles.statusBar}></View>:<View></View>;

  return(
    <View style={styles.container}>
      {statusBar}
      <Welcome title={"Welcome, " + this.state.name} />
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'purple',
  },
  statusBar: {
    backgroundColor:'purple',
    height:20
  },
});
