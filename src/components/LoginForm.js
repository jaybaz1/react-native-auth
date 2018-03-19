import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress(){
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail(){
        this.setState({ 
            error: 'Authenication Failed!', 
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading){
            return <Spinner size="small" />
        }
         
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
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
                    {this.renderButton()}
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