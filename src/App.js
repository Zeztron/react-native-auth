import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from "firebase";
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyD-OqfZG4ZoU2A1HOkkRwgd4lYtdS0kLV0",
            authDomain: "auth-63629.firebaseapp.com",
            databaseURL: "https://auth-63629.firebaseio.com",
            projectId: "auth-63629",
            storageBucket: "auth-63629.appspot.com",
            messagingSenderId: "173237895569",
            appId: "1:173237895569:web:31dea9ea35fcb1b6"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Auth App" />
                <LoginForm/>
            </View>
        )
    }
}

export default App;