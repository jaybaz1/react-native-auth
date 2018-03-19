import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDOm3Z6a_iep8jLd28a3RIAGKvbw4VC20k',
            authDomain: 'auth-9d6ff.firebaseapp.com',
            databaseURL: 'https://auth-9d6ff.firebaseio.com',
            projectId: 'auth-9d6ff',
            storageBucket: 'auth-9d6ff.appspot.com',
            messagingSenderId: '403644209951'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent(){
        switch (this.state.loggedIn){
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => { firebase.auth().signOut() }}>
                                Logout
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerStyle}>
                        <Spinner />
                    </ View>
                );
        }        
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    }
}

export default App;