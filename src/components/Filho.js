import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



export default props => {

    return (

        <View>

            {/* propriedade a ser passada pelo componente pai */}

            <Text style= {style.text}>{props.texto}</Text>
        </View>
    )
}

const style = StyleSheet.create({

    text: {

        fontSize: 40,
        color: 'red'
    }
})