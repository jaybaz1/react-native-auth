import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = { 
        email: '',
        password: '',
        error: ''
    };

    onButtonPress(){
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
                this.setState({ error: 'Authenication Failed!' })
            });
        })
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        placeholder="test@example.com"
                        value={this.state.email}
                        onChangeText={value => this.setState({ email:value })}    
                        label="Email"                    
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry={true}
                        placeholder="*********"
                        value={this.state.password}
                        onChangeText={value => this.setState({ password:value })}    
                        label="Password"                    
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;