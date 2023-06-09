import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import Gaveta from './navegador/gaveta';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Gaveta/>
    </NavigationContainer>
  );
}