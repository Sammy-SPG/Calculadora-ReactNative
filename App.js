import React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import suma from './components/suma';
import multiplicar from './components/multiplicacion';
import resta from './components/resta';
import division from './components/division';
import styles from './components/styles';

const Stack = createNativeStackNavigator();

const menu = ({navigation})=>{
  return(
    <View>
      <Text style = {styles.text} >Menu de la calculadora</Text>
      <View>
        <Button title="Suma" onPress={()=> navigation.navigate('suma')} color="#000"/>
        <Button title="Resta" onPress={()=> navigation.navigate('resta')} color="#2ECC71"/>
        <Button title="Multiplicacion" onPress={()=> navigation.navigate('multiplicacion')} color="#E67E22"/>
        <Button title="Divicion" onPress={()=> navigation.navigate('division')}/>
      </View>
    </View>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'menu'>
        <Stack.Screen name = 'menu' component={menu}/>
        <Stack.Screen name = 'suma' component={suma}/>
        <Stack.Screen name = 'multiplicacion' component={multiplicar}/>
        <Stack.Screen name = 'resta' component={resta} />
        <Stack.Screen name = 'division' component={division} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}