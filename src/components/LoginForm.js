import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = { 
        email: '',
        password: '' 
    };

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

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


export default LoginForm;