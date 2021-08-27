import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default function OperatorKeysCalc ({logicCalculator}){
    return(
        <View style={styles.operatorKeysBox}>
            <TouchableOpacity style={styles.operatorKeys} onPress={()=>logicCalculator("+")}>
                <Text style={styles.operatorKeysText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorKeys} onPress={()=>logicCalculator("-")}>
                <Text style={styles.operatorKeysText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorKeys}onPress={()=>logicCalculator("/")}>
                <Text style={styles.operatorKeysText}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorKeys} onPress={()=>logicCalculator("*")}>
                <Text style={styles.operatorKeysText}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorKeys} onPress={()=>logicCalculator("=")}>
                <Text style={styles.operatorKeysText}>=</Text>
            </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    operatorKeysBox:{
        flexDirection: 'row',
        height:'16.6%',
        alignItems: 'center'
      },
    operatorKeys:{
        width: '20%',
        backgroundColor: 'rgb(20,20,20)',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },
    operatorKeysText:{
        fontSize: 24,
        color: 'white',
      },
})