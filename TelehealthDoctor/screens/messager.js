import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import {
    Dimensions, SafeAreaView, StyleSheet, ScrollView, View, Image, 
    Button, TouchableOpacity, Text, StatusBar, Alert, TextInput,
} from 'react-native';


function App({ navigation }){
    return(
        <>
        <View style={{alignItems:"center"}}>
          <SafeAreaView>
            <Text>Hey</Text>
          </SafeAreaView>
        </View>
        </>
    );
}


export default App;