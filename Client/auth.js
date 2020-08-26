import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import {onSignUp, signInFirebase} from './App';

export const USER_KEY = "auth-demo-key";

export const logout = () => {
    AsyncStorage.removeItem(USER_KEY);
    AsyncStorage.removeItem('username');
    AsyncStorage.removeItem('password');
    RNRestart.Restart();
}

export const onSignIn = (user, pass, id) => {
    AsyncStorage.setItem(USER_KEY, "true");
    AsyncStorage.setItem('username', user);
    AsyncStorage.setItem('password', pass);
    AsyncStorage.setItem('id', id);
}
export const onSignOut = () => AsyncStorage.setItem(USER_KEY, "false");

export const isSignedIn = () => {
    return new Promise((resolve, reject)  => {
        AsyncStorage.getItem(USER_KEY).then(res => {
            if(res !== null){
                resolve(true);
            } else {
                resolve(false);
            }
        }).catch(err => reject(err));

    });
}