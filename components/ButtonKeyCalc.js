import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function ButtonKeyCalc({number}){
    return(
    <View style={styles.ButtonContainer}>
        <TouchableOpacity>
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
    },
    ButtonText: {
        textAlign:'center',
        fontSize:24,
        color: 'white',
    }
})