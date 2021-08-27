import React, {useState, useEffect} from 'react';
import { LogBox, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ButtonKeyCalc from './components/ButtonKeyCalc';
import OperatorKeysCalc from './components/OperatorKeysCalc';

export default function App() {

  LogBox.ignoreAllLogs();

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState(""); 
  const [stringCalculation, setStringCalculation] = useState(0);

  //Numbers show in the keyboard of caculator
  var numbersKeys = [];
  for(var i = 0; i <= 9; i++){
    numbersKeys.push(i);
  }
  //function responsible for the logic of the calculator
  function logicCalculator(n){
    if(operator == ""){
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setStringCalculation(parseInt(firstNumber.toString() + n.toString()));
    }

    if((n == "/" || n == "*" || n == "+" || n == "-") && secondNumber == 0){
      setStringCalculation(firstNumber.toString() + n);
      setOperator(n);
    }

    if(operator != ""){
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setStringCalculation(firstNumber + operator + parseInt(secondNumber.toString() + n.toString()))
    }

    if(n == "="){
      let result= 0;
      if(operator == "+"){
        result = firstNumber + secondNumber;
      } else if(operator == "-"){
        result = firstNumber - secondNumber;
      } else if(operator == "/"){
        result = firstNumber / secondNumber;
      } else if(operator == "*"){
        result = firstNumber * secondNumber;
      }
      setStringCalculation(result);
      setOperator(result);
      setFirstNumber(result);
      setSecondNumber(0);
    }

  }


  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <StatusBar hidden />
      <View style={styles.Top}>
        <Text style={styles.TextTop}>{stringCalculation}</Text>
      </View>
      <OperatorKeysCalc logicCalculator={logicCalculator}/>
      <View style={styles.numbersKeysBox}>
        {
          numbersKeys.map(function(e){
            return(<ButtonKeyCalc logicCalculator={logicCalculator} number={e}></ButtonKeyCalc>);
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Top:{
    padding: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    height:'16.6%',
    justifyContent:'center',
    paddingLeft: 20,
  },
  TextTop: {
    fontSize: 24,
    color: 'white',
  },
  numbersKeysBox:{
    flexDirection: 'row',
    flexWrap:'wrap',
    borderTopColor: 'black',
    borderTopWidth:2,
    height:'66.8%',
  }
});
