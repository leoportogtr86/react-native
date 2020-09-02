import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button'

export default function App() {


  return (
    <View style={styles.container}>


      <Text style = {styles.text}>{1 + 1}</Text>
      <Button style = {styles.button} title = "Click 1"/>
      <Button title = "Click 2"/>
      <Button title = "Click 3"/>
      <Button title = "Click 4"/>
      <Button title = "Click 5"/>
      <Button title = "Click 6"/>
      <Button title = "Click 7"/>
      
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',

  },

  text:{

    fontSize: 200,
    color: "yellow",
    fontWeight: 'bold'
    
  },

  button:{

    backgroundColor: "red"
  }
});
