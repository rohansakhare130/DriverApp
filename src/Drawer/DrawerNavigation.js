import {View, Text} from 'react-native';
import React from 'react';
import DrawerNavigator from '../Drawer/DrawerNavigation'
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Main from './Main';
import 'react-native-gesture-handler';

const Drawer= createDrawerNavigator()

const DrawerNavigation =() => {
    return(

        <Text>Hyy</Text>
    //   <Drawer.Navigator>
    //     <Drawer.Screen name='Main' component= {Main} />
    //   </Drawer.Navigator>  
    );
};

export default DrawerNavigation;