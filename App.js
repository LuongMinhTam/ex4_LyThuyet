import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Alert, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View,} from 'react-native';
import background from './src/asset/backgroundmommy.png';
import { Button, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/Buoi4_Navigation/Router/MyStack';
import MyDrawer from './src/Buoi4_Navigation/Router/MyDrawer';
import MyBottomTab from './src/Buoi4_Navigation/Router/MyBottomTab';

const App = ()=> {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MyBottomTab/>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
