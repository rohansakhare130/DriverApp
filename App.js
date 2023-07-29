// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/Navigation/Home";
import Login from "./src/Navigation/Login";
import { Button, View, Text } from 'react-native';
import Log from "./src/Navigation/Log";
import Join from "./src/Navigation/Join";

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Log'>
    <Stack.Screen name="Log" component={Log} />
    <Stack.Screen name="Home" component={Home} />
    
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Join" component={Join} />
    
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
