import React from 'react';
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

function App({ navigation }) {
  
  return (
    <>
    <View style={styles.all}>
      <SafeAreaView style={styles.SafeAreaView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
            <View style={{alignItems: "flex-end"}} style={styles.image}>
              <Image source={require('../assets/symbol.png')} style={{width: 415, height: 130}}/>
            </View>
            <View></View>
            <View style={{paddingTop: 20, width: undefined, height: undefined, resizeMode: 'contain', alignItems: "center"}}>
              <Image source={require('../assets/name.png')} style={{width: 233, height: 100}}/>
            </View>

          <View style={{alignItems: 'center', paddingTop: 200}}>
            <View style={{width: 115, alignItems:'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Log In')} style={{borderWidth:1, borderColor:'rgba(0,0,0,0.2)', alignItems:'center',
                justifyContent:'center', width:150, height:40, backgroundColor:'#90bede', borderRadius:50}}>
                  <Text style={{color: Colors.white}}>Log In</Text>
              </TouchableOpacity>
            </View>
            <View style={{width: 115, paddingTop: 20, alignItems:'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Sign Up')} style={{borderWidth:1, borderColor:'rgba(0,0,0,0.2)', alignItems:'center',
                justifyContent:'center', width:150, height:40, backgroundColor:'#90bede', borderRadius:50}}>
                  <Text style={{color: Colors.white}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          </ScrollView>
          </SafeAreaView>
      </View>
    </>
  );
};

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
