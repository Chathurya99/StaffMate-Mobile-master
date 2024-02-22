import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './Start';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Leave from './Leave';
import Dbs from './Dbs';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{

            cardStyle: {
              backgroundColor: '#000000', //Set Header color
            },
            headerStyle: {
              backgroundColor: '#F42B4E', //Set Header color
            },
            headerTintColor: '#ffffff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login', //Set Header Title
            cardStyle: {
              backgroundColor: '#000000', //Set Header color
            },
            headerStyle: {
              backgroundColor: '#F42B4E', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register', //Set Header Title
            cardStyle: {
              backgroundColor: '#000000', //Set Header color
            },
            headerStyle: {
              backgroundColor: '#F42B4E', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard', //Set Header Title
            cardStyle: {
              backgroundColor: '#000000', //Set Header color
            },
            headerStyle: {
              backgroundColor: '#F42B4E', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Leave"
          component={Leave}
          options={{
            title: 'Leave', //Set Header Title
            cardStyle: {
              backgroundColor: '#000000', //Set Header color
            },
            headerStyle: {
              backgroundColor: '#F42B4E', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="Dbs"
          component={Dbs}
          options={{
            title: 'Dbs', //Set Header Title
            cardStyle: {
              backgroundColor: '#000000', //Set Header color
            },
            headerStyle: {
              backgroundColor: '#F42B4E', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default App;
