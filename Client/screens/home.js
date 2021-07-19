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
    const [people, SetPeople] = useState('');
    firebase.auth().onAuthStateChanged((user) => {
    if(user){
      temp = 'users/'+user.uid.toString();
      firebase.database().ref(temp).once('value').then(snapshot => {
        SetNameShow(snapshot.val().name);
        console.log(temp);
      })
      temp = 'messages/'+user.uid.toString();
      firebase.database().ref(temp).once('value').then(snapshot => {
        //SetPeople(snapshot.child());
        //console.log(people);
      })
    }
    else{
      console.log("There was a problem with your account. Please log out and log in again.")
    }
  })
  
    return(
        <>
        <View style={styles.all} style={{alignItems:"center"}}>
          <SafeAreaView style={styles.SafeAreaView}>
            <Text>Hey {nameShow}</Text>
          </SafeAreaView>
          <TouchableOpacity onPress={() => navigation.navigate('Messager')} style={{borderWidth:1, borderColor:'rgba(0,0,0,0.2)', alignSelf: "flex-start", marginTop: 20,
              justifyContent:'center', width:40, height:40, backgroundColor:'#90bede', borderRadius:15}}>
              <Text style={{color: Colors.white, textAlign: "center"}}>L</Text>
          </TouchableOpacity>
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