import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInWelcomeScreen from '../Screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../Screens/authScreens/SignInScreen';
import HomeScreen from '../Screens/HomeScreen';
const Auth = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
      />
      <Auth.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
        name="SignInScreen"
        component={SignInScreen}
      />
      <Auth.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
