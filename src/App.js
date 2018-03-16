import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDOm3Z6a_iep8jLd28a3RIAGKvbw4VC20k',
            authDomain: 'auth-9d6ff.firebaseapp.com',
            databaseURL: 'https://auth-9d6ff.firebaseio.com',
            projectId: 'auth-9d6ff',
            storageBucket: 'auth-9d6ff.appspot.com',
            messagingSenderId: '403644209951'
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
}

export default App;