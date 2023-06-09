import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Perfil from '../screens/perfil';
import Tab from './tab';


const Gaveta = createDrawerNavigator()

export default function Gaveta() {
  return (
      <Gaveta.Navigator>
        <Gaveta.Screen component={Tab} name='Início'/>
        <Gaveta.Screen component={Perfil} name='Perfil'/>
      </Gaveta.Navigator>
  );
}