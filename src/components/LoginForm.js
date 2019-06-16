import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = {
        email: ''
    };

    render() {

        const { email } = this.state;

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>

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

export default LoginForm