// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./src/Navigation/Home";
import Login from "./src/Navigation/Login";
import { Button, View, Text } from 'react-native';
import Log from "./src/Navigation/Log";
import Join from "./src/Navigation/Join";
import Dashborad from "./src/Navigation/Dashborad";
// import DrawerNavigation from "./src/Drawer/DrawerNavigation";


const App = () => {

  const Stack = createNativeStackNavigator();
  const Drawer= createDrawerNavigator()
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Log'>
    <Stack.Screen name="Log" component={Log} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Join" component={Join} />
    </Stack.Navigator> */}

      <Drawer.Navigator initialRouteName='Log'>
        <Stack.Screen name="Log" component={Log} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Join" component={Join} />
        <Drawer.Screen name='Dashborad' component={Dashborad} />
      </Drawer.Navigator>
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
