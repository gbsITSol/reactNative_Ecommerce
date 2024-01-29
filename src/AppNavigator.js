import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp'
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import CheckOut from './Screens/CheckOut';
import OrderSuccess from './Screens/OrderSuccess';
import Main from './Bottom/Main';
import Order from './Screens/Order';






const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown : true}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown : false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown : true}} />
      <Stack.Screen name="MyAddress" component={MyAddress} options={{headerShown : true}} />
      <Stack.Screen name="AddAddress" component={AddAddress} options={{headerShown : false}} />
      <Stack.Screen name="CheckOut" component={CheckOut} options={{headerShown : true}} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} options={{headerShown : true}} />
      <Stack.Screen name="Main" component={Main} options={{headerShown : false}} />
      <Stack.Screen name="Order" component={Order} options={{headerShown : true}} />







    </Stack.Navigator>
 
  </NavigationContainer>
  )
}

export default AppNavigator