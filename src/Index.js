import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen/index';
import DestinationSearch from './screens/DestinationSearch/index';
import SearchResult from './screens/SearchResult/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function Index() {
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode={false}>            
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Destination" component={DestinationSearch} />
      <Stack.Screen name="SearchResult" component={SearchResult} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
