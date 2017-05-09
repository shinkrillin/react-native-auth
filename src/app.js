import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDtuyXpEPgq82CcKnnI9ah497Zpt961UWM',
            authDomain: 'authicator.firebaseapp.com',
            databaseURL: 'https://authicator.firebaseio.com',
            projectId: 'authicator',
            storageBucket: 'authicator.appspot.com',
            messagingSenderId: '13508733370'
      });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
};

export default App;
