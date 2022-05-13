import React from 'react'
import { SafeAreaView, StyleSheet, Text} from 'react-native'
//import { StatusBar } from 'expo-status-bar';

import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import Aleatorio from './components/Aleatorio'
//import MinMax from './components/MinMax'
//import CompPadrao, { Comp1, Comp2 } from './components/Mult'
//import Primeiro from './components/Primeiro'

export default function App() {
    return (
    <SafeAreaView style={style.App}>
        <Contador inicial={100} />
        <Text>asdfkhgasdf</Text>
        {/*
        <Titulo principal="Cadastro Produto"
        secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60}/>
        <MinMax min={3} max={20}/>
        <CompPadrao />
        <Botao />
        <Comp1 />
        <Comp2 />
        <Primeiro />*/}
        {/*<StatusBar style="auto" />*/}
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center", 
        alignItems: "center",
        padding: 20
    }
})