import React, {useState} from 'react';
import * as firebase from "firebase";
import {onSignIn, checkIfCorrect} from '../auth';
import RNRestart from 'react-native-restart';
import {
  Dimensions, SafeAreaView, StyleSheet, ScrollView, View, Image, 
  Button, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Text, StatusBar, Alert, TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {saveCreds} from '../App';


const dimensions = Dimensions.get('window');

function App({ navigation }){

  const [username, SetUser] = useState('');
  const [password, SetPass] = useState('');

  const logIn = async () => {
    if(username=='' || password==''){
      Alert.alert(
        'Required Fields',
        'Please enter all the required information',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
    else{
      console.log('1username: ' + username + '\n' + '1password:' + password);
      firebase.auth().signInWithEmailAndPassword(username, password)
      .then((data) => {
        userId = data.user.uid;
        console.log('User account signed in!');
        onSignIn(username, password, userId);
        RNRestart.Restart();
      })
      .catch((error) => {
        alert("Wrong email or password.");
      });
    }
  }

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{}}>
          <Image source={require('../assets/logo.png')} style={{width: 200, height: 100}}/>
        <View style={{}}>
            
            <View style={{alignItems: 'center'}}>

              <TextInput style={{marginTop: 7, fontSize: 16, alignItems: 'center'}}
              placeholder="e-Mail"
              onChangeText={username => SetUser(username)}
              defaultValue={username}/>

              <TextInput style={{marginTop: 7, fontSize: 16, alignItems: 'center'}}
              placeholder="Password"
              secureTextEntry={true}
              password={true}
              onChangeText={password => SetPass(password)}
              defaultValue={password}/>

              <View style={{width: 115, alignItems:'center', paddingTop:30}}>
                <TouchableOpacity onPress={logIn} style={{borderWidth:1, borderColor:'rgba(0,0,0,0.2)', alignItems:'center',
                  justifyContent:'center', width:150, height:40, backgroundColor:'#90bede', borderRadius:50}}>
                <Text style={{color: Colors.white}}>Log In</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default App;