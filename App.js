import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import GetStartedScreen from './frontend/FireForesightFrontend1/src1/GetStartedScreen';
import HelloScreen from './frontend/FireForesightFrontend1/src1/HelloScreen';
import AuthScreen from './frontend/FireForesightFrontend1/src1/AuthScreen';
import SignUpScreen from './frontend/FireForesightFrontend1/src1/SignUpScreen'; // Import SignUpScreen
import HomeScreen from './frontend/FireForesightFrontend1/src1/HomeScreen';
import SettingsScreen from './frontend/FireForesightFrontend1/src1/SettingsScreen';
import SafetyGuidelinesScreen from './frontend/FireForesightFrontend1/src1/SafetyGuidelinesScreen';
import NotificationScreen from './frontend/FireForesightFrontend1/src1/NotificationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        {/* Get Started Screen */}
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{ title: 'Welcome' }}
        />
        
        {/* Hello Screen */}
        <Stack.Screen
          name="Hello"
          component={HelloScreen}
          options={{ title: 'Hello' }}
        />

        {/* Authentication Screen */}
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ title: 'Sign In' }}
        />

        {/* SignUp Screen */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'Sign Up' }}
        />

        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />

        {/* Notification Screen */}
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ title: 'Notifications' }}
        />

        {/* Safety Guidelines Screen */}
        <Stack.Screen
          name="SafetyGuidelines"
          component={SafetyGuidelinesScreen}
          options={{ title: 'Emergency Guidelines' }}
        />

        {/* Settings Screen */}
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
