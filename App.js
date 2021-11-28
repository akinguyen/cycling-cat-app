
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {login} from './src/login/index';
import {Welcome} from './src/Welcome/index';
import {test} from './src/test';
const Stack = createNativeStackNavigator();

export default ({navigation }) =>{
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="test" component={test}/>
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="login" component={login}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};
