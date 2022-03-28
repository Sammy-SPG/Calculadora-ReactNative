import React, {useState} from 'react';
import {Button, View, Text, TextInput, Alert} from 'react-native';
import styles from './styles';

export default function Multiplicacion(){

    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);

    const multiplicar = ()=>{
        if(typeof numberOne === 'string' && typeof numberTwo === 'string'){
            const resultado = parseFloat(numberOne) * parseFloat(numberTwo);
            if(isNaN(resultado)) {
                return 'No es numero';
            }
            return `${resultado}`;
        }
    }

    return(
        <View>
            <Text style = {styles.text} >Esto es la multiplicacion</Text>
            <View>
                <TextInput style = {styles.input} placeholder="Ingresa el primer valor" onChangeText={(number)=>setNumberOne(number)}/>
                <TextInput style = {styles.input} placeholder="Ingresa el segundo valor" onChangeText={(number)=>setNumberTwo(number)}/>
            </View>
            <View>
                <Button title = 'Multiplicar' onPress={ 
                    ()=> Alert.alert('la multiplicacion es: ', multiplicar())}
                />
            </View>
        </View>
    );
}