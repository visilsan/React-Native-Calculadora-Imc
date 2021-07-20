import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SingIn from './src/screens/SingIn'


const Menu = createStackNavigator();

export default function App() {
  return (

    

    <NavigationContainer>
    <Menu.Navigator
     initialRouteName="SingIn"
     headerMode='none'
     screenOptions={{
         cardStyle:{
             backgroundColor: 'transparent'
         }
     }}>
    <Menu.Screen name="SingIn" component={SingIn} sty/>

 
    </Menu.Navigator>
  </NavigationContainer>

  )
}