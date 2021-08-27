import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function ButtonKeyCalc({number, logicCalculator}){
    return(
    <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={()=>logicCalculator(number)} style={styles.ButtonOpacity}>
            <Text style={styles.ButtonText}>{number}</Text>
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    ButtonContainer:{
        backgroundColor:'black',
        borderColor: 'white',
        borderWidth:1,
        width:'33.3%',
        height:'25%',
    },
    ButtonText: {
        fontSize:24,
        color: 'white',
    },
    ButtonOpacity: {
        width:'100%', 
        height:"100%",
        justifyContent:'center', 
        alignItems:'center'
    }
})