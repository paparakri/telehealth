import React, { useState } from 'react'
import {
    Dimensions, SafeAreaView, StyleSheet, ScrollView, View, Image, 
    Button, TouchableOpacity, TouchableWithoutFeedback, Platform,
    KeyboardAvoidingView, Keyboard, Text, StatusBar, Alert, TextInput,
  } from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  import {GiftedChat} from 'react-native-gifted-chat';
  import Fire from '../messageHelper';

export default class messager extends React.Component{

    state = {
        messages:[]
    }

    get user(){
        return {
            _id: Fire.uid
        }
    }

    componentDidMount(){
        Fire.get(message => 
            this.setState(previous => ({
                messages: GiftedChat.append(previous.messages, message)
            }))
        );
    }

    componentWillUnmount(){
        Fire.off();
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />

        if(Platform.OS == 'android'){
            return (
                <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView style={{flex:1}} keyboardVerticalOffset={30} enabled>
                        {chat}
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            );
        }
    return <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
    }

}