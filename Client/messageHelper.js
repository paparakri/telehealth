import firebase from 'firebase'
import {useState} from 'react'

class Fire{
    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message)
        });
    };

    

    parse = message => {
        const {user, text, timestamp} = message.val();
        const {key: _id} = message;
        const createdAt = new Date(timestamp);

        return{
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
    };

    off(){
        this.db.off();
    }

    get db(){
        return firebase.database().ref('messages/'+this.uid)
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }

}

export default new Fire();