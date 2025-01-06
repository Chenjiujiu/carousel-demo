/**
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen.tsx';
import DescScreen from './DescScreen.tsx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const RootStack = createNativeStackNavigator<any>();


function App(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef();
  return (
    <GestureHandlerRootView>
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <RootStack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            freezeOnBlur: true,
            headerBackVisible: false,
            animation: 'slide_from_right',
            animationDuration: 100,
            orientation: 'portrait',
            headerTitleAlign: 'center',
          }}

        >
          <RootStack.Screen name="Home" component={HomeScreen}/>
          <RootStack.Screen name="Desc" component={DescScreen} />
        </RootStack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({

});

export default App;
