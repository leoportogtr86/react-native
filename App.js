import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Pai from './src/components/Pai';
import Axios from 'axios'
import Ferrari from './src/components/ferrari.jpeg'


export default function App() {

  const [url, setUrl] = useState('./src/components/ferrari.jpeg')

  const [estado, setEstado] = useState('')

  Axios.get('https://gu-adaptacoes.herokuapp.com/ma').then((res)=>{

      

      setEstado(res.data.estado)

      // teste


  })


  return (
    <View style={styles.container}>


      <Pai/>
      <Text>{estado}</Text>

      <Image style = {styles.image} source = {Ferrari}/>
      
      
      
     
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  text:{

    fontSize: 20,
    color: "yellow",
    fontWeight: 'bold'
    
  },
  image:{

    width: 400
  }
});
