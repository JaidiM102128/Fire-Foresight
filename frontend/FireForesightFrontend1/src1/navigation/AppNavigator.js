// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import the screens
import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SafetyGuidelinesScreen from '../screens/SafetyGuidelinesScreen';

// Create the stack navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Safety Guidelines" component={SafetyGuidelinesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
