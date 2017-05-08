import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';
import { Header } from './components/common';

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
                <Text>An App!</Text>
            </View>
        );
    }
};

export default App;
