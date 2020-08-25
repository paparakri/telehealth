import React, {useState} from 'react';
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

const dimensions = Dimensions.get('window');

function App({ navigation }){
    const [nameShow, SetNameShow] = useState('');
    firebase.auth().onAuthStateChanged((user) => {
    if(user){
      temp = 'users/'+user.uid.toString();
      firebase.database().ref(temp).once('value').then(snapshot => {
        SetNameShow(snapshot.val().name);
        console.log(temp);
        //console.log(snapshot.val().name);
      })
    }
    else{
      console.log("There was a problem with your account. Please log out and log in again.")
    }
  })
  
    return(
        <>
        <View style={styles.all}>
          <SafeAreaView style={styles.SafeAreaView}>
            <Text>Hey {nameShow}</Text>
          </SafeAreaView>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
  
  engine: {
    position: 'absolute',
    right: 0,
  },
  all: {
    flex: 1,
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  button: {
    width: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  image: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    alignItems: "center",
  },
});

export default App;