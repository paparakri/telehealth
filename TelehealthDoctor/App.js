import React, {Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import inbox from './screens/inbox';
import messager from './screens/messager';

import {
  Dimensions, SafeAreaView, StyleSheet, ScrollView, View, Image, 
  Button, TouchableOpacity, Text, StatusBar, Alert, TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

class TopComponent extends Component {

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inbox" component={inbox} />
          <Stack.Screen name="Messages" component={messager} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}

export default TopComponent;