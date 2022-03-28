import React, {useState} from 'react';
import {Button, Text, TextInput, View, Alert} from 'react-native';
import styles from './styles';

function componentResta(){

  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTow] = useState(0);

  const restar = () => {
    if(typeof numberOne === "string" && typeof numberTwo === "string"){
      const resultado = parseFloat(numberOne) - parseFloat(numberTwo);
      if(isNaN(resultado)){
        return "No es un numero";
      }
      return `${resultado}`;
    }
  }

  return(
    <View>
      <Text style = {styles.text} >Esta es la calculadora de la resta</Text>
      <View>
        <TextInput style = {styles.input} placeholder="Ingresa un numero" onChangeText={(number)=>setNumberOne(number)} />
        <TextInput style = {styles.input} placeholder="Ingresa otro numero" onChangeText={(number)=>setNumberTow(number)} />
        <View>
          <Button title = "Resta" onPress={
            ()=> Alert.alert('La resta es: ', restar())
          }/>
        </View>
      </View>
    </View>
  );
}

export default componentResta;