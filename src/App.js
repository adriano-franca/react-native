import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import MinMax from './components/MinMax'
//import CompPadrao, { Comp1, Comp2 } from './components/Mult'
//import Primeiro from './components/Primeiro'

export default() => (
    <SafeAreaView style={style.App}>
        <MinMax min={3} max={20}/>
        {/*<CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />*/}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center", 
        alignItems: "center",
        padding: 20
    }
})