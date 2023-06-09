import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './screens/feed';
import Historia from './screens/historia';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function Tab() {
  return (
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
                iconName = focused
                    ? 'book'
                    : 'book-outline';
            } else if (route.name === 'Criar História') {
                iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
       })}
       tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
       }}
    >
        <Tab.Screen component={Feed} name='Feed'/>
        <Tab.Screen component={Historia} name='Criar História'/>
      </Tab.Navigator>
  );
}