import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Filho from './Filho'
import Botao from './Botao'



export default props => {

    console.warn('Teste de click')

    const [texto, setTexto] = useState('Texto 1')

    function mudarTexto() {

        setTexto('Texto 2')
        
    }

    return (

        <View>

            {/* propriedade definida no componente filho para ser setada no pai */}
            <Filho texto = {texto}/>
            <Botao onPress = {mudarTexto}/>
        </View>
    )
}