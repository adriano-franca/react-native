import React from 'react'
import { Text } from 'react-native'
import Estlo from './estilo'

export default props =>(
        <>
            <Text style={Estlo.Titulo}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    )