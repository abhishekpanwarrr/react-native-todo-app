import React from 'react'
import {Container,Text} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Add from './screens/Add'
import Edit from './screens/Edit'

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor:'#0f4c75'},title:'Todo App ',headerTitleStyle:{color:'#fff',textAlign:'center'}}}></Stack.Screen>
        <Stack.Screen name="Add" component={Add} options={{headerStyle:{backgroundColor:'#0f4c75'},title:'Todo App ',headerTitleStyle:{color:'#fff',textAlign:'center'}}}></Stack.Screen>
        <Stack.Screen name="Edit" component={Edit}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
