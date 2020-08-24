import React, {Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {isSignedIn, logout} from './auth'
import SignUp from './screens/signUp';
import LogIn from './screens/logIn';
import startup from './screens/startup';
import Home from './screens/home';
import * as firebase from "firebase";

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
const logOut = () => {
  logout();
  firebase.auth().signOut()
}

const firebaseConfig = {
  apiKey: "AIzaSyA0poFIb61l7Tpy06DqH3m1pdm_8a-KBrM",
  authDomain: "telehealth-342b7.firebaseapp.com",
  databaseURL: "https://telehealth-342b7.firebaseio.com",
  projectId: "telehealth-342b7",
  storageBucket: "telehealth-342b7.appspot.com"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
  

export const onSignUp = (mail, pass) => {
  firebase.auth().createUserWithEmailAndPassword(mail.toString().trim(), pass.toString().trim());
}

class TopComponent extends Component {
  state = false;

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
  }

  componentDidMount(){
    isSignedIn().then(res => this.setState({signedIn: res, checkedSignIn: true}))
    .catch(err => alert("An error occured"));
  }

  render(){
    const {checkedSignIn, signedIn} = this.state;
    if(!checkedSignIn) return null;
    if(signedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerRight: () => (
            <TouchableOpacity onPress={logOut} style={{borderWidth:1, borderColor:'#d8e2dc', justifyContent:'center', alignItems:'center', width:50, height:50, backgroundColor:'#d8e2dc', borderRadius:50}}>
              <Text>Log</Text>
              <Text>Out</Text>
            </TouchableOpacity>
          )}} name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    } else {
      return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="startup" component={startup} />
            <Stack.Screen name="Sign Up" component={SignUp} />
            <Stack.Screen name="Log In" component={LogIn} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
    }
  }

export default TopComponent;
