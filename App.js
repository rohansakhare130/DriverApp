// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/Navigation/Home";
import Login from "./src/Navigation/Login";
import { Button, View, Text } from 'react-native';
const App = () => {

  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={Home} />
    
    <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
