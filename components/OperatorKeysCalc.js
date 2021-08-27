import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default function OperatorKeysCalc (){
    return(
        <View style={styles.operatorKeysBox}>
        <TouchableOpacity style={styles.operatorKeys}><Text style={styles.operatorKeysText}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.operatorKeys}><Text style={styles.operatorKeysText}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.operatorKeys}><Text style={styles.operatorKeysText}>/</Text></TouchableOpacity>
        <TouchableOpacity style={styles.operatorKeys}><Text style={styles.operatorKeysText}>*</Text></TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    operatorKeysBox:{
        flexDirection: 'row',
      },
    operatorKeys:{
        width: '25%',
        backgroundColor: 'rgb(20,20,20)'
    },
    operatorKeysText:{
        fontSize: 24,
        textAlign:'center',
        color: 'white',
      },
})