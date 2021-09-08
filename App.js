/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LandingScreen from './Screens/Landing/LandingScreen';
import LoginScreen from './Screens/Login/LoginScreen';
import RegisterScreen from './Screens/Register/RegisterScreen';
import DashboardScreen from './Screens/Dashboard/DashboardScreen';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  state = {
    screens: [
      {
        name: 'Landing',
        component: LandingScreen,
        options: { headerShown: false }
      },
      {
        name: 'SignUp',
        component: RegisterScreen,
        options: { title: 'Sign Up' }
      },
      {
        name: 'SignIn',
        component: LoginScreen,
        options: { title: 'Sign In' }
      },
      {
        name: 'Dashboard',
        component: DashboardScreen
      }
    ]
  }
  redirect = (props, name) => {
    props.navigation.navigate(name);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            this.state.screens.map((scr, index) => {
              let Component = scr.component
              return (
                <Stack.Screen 
                  name={scr.name} 
                  component={props => <Component {...props} redirect={name => this.redirect(props, name)} />} 
                  options={scr.options ?? null}
                  key={index}
                />
              )
            })
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
