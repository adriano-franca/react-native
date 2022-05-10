import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => (
        <Text style={Estilo.Titulo}>
            O valor aleatorio entre {props.max} e {props.min} é {Math.random()*(props.max - props.min) + props.min}
        </Text>

)
