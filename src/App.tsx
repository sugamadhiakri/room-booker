import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './homeScreen';
import { ConferenceRoom } from './ConferenceRoom';
import { AnotherRoom } from './AnotherRoom';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Book Room" component={HomeScreen} />
        <Stack.Screen name="Conference Room" component={ConferenceRoom} />
        <Stack.Screen name="Another Room" component={AnotherRoom} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

