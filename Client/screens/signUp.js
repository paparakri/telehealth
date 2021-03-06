import React, {useState} from 'react';
import * as firebase from "firebase";
import {onSignIn, createUser} from '../auth';
import RNRestart from 'react-native-restart';
import {
  Dimensions, SafeAreaView, StyleSheet, ScrollView, View, Image, 
  Button, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Text, StatusBar, Alert, KeyboardAvoidingView, TextInput,
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
  const [fullName, SetFullName] = useState('');
  const [mail, SetMail] = useState('');

  const logIn = () => {
    console.log('Pressed Button');
    if(mail=='' || password==''){
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
      console.log('Everything Is Filled Correctly');
      firebase.auth().createUserWithEmailAndPassword(mail.toString(), password.toString())
      .then((data) => {
        console.log('User account created & signed in!');
        userId = data.user.uid;
        
        console.log('userId created');
        onSignIn(mail, password, userId);
        console.log('debug1')
        firebase.database().ref('users/'+userId).set({
          name: fullName,
          username: username,
        }).catch((error) => {
          alert(error);
        })
        console.log('debug2');
        RNRestart.Restart();
      })
      .catch((error) => {
        alert("Error With Creating User.");
      });
    }
  }

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex:1}}>
        <View style={{}}>
          <Image source={require('../assets/logo.png')} style={{width: 200, height: 100}}/>
        </View>
        <View style={{}}>
            
            <View style={{alignItems: 'center'}}>
              <TextInput style={{fontSize: 16, alignItems: 'center'}}
              placeholder="Full Name"
              onChangeText={fullName => SetFullName(fullName)}
              defaultValue={fullName}/>

              <TextInput style={{fontSize: 16, alignItems: 'center'}}
              placeholder="e-Mail"
              onChangeText={mail => SetMail(mail)}
              defaultValue={mail}/>

              <TextInput style={{marginTop: 7, fontSize: 16, alignItems: 'center'}}
              placeholder="Username"
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
                <Text style={{color: Colors.white}}>Sign Up</Text>
              </TouchableOpacity>
              </View>
              </View>
        </View>
        </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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