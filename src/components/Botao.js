import React from 'react'
import { View, Text, Button } from 'react-native'
import estilo from './estilo'




export default props => {

    return (

        <View>

            <Button title = 'Mudar Texto' onPress = {props.onPress}/>

            
        </View>
    )
}