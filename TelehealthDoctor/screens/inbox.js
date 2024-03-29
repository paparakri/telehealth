import React, {useState} from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import {
    Dimensions, SafeAreaView, StyleSheet, ScrollView, View, Image, 
    Button, TouchableOpacity, Text, StatusBar, Alert, FlatList,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';


function App({ navigation }){

    const [people, setPeople] = useState([
        {name: 'Chris', key: '567867891'},
        {name: 'John', key: '2456745'},
        {name: 'Asshat', key: '337567834'},
        {name: 'Duchebag', key: '45685674'},
        {name: 'Preacher', key: '5467578'},
        {name: 'Kris', key: '6786'},
        {name: 'Sanctuary', key: '73564456'},
        {name: 'Iron', key: '56875678'},
    ]);

    return(
        <>
        <View>
          <FlatList
            data={people}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={{color:Colors.black, alignSelf:'flex-start', width:70}}>{item.name}</Text>
                </View>
            )}
          />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    item: {
        borderColor:Colors.black,
        borderBottomWidth:1,
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:100
    },
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