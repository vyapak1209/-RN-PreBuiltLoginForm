import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{

    state = {loggedIn: null};

    componentWillMount() {


        firebase.auth().onAuthStateChanged((user) => {

            if(user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }


        });

    }

    onLogOutPress() {
        firebase.auth().signOut().then(
            this.renderContent()
        );
    }


    renderContent(){

        switch (this.state.loggedIn) {
            case true:
                return(
               
                    <Button value = 'Log Out!' onPress = {this.onLogOutPress.bind(this)}/>

            );
                
            case false:
                return(
                <View>
                    <LoginForm />
                </View>
            );
            
            default:
                return <Spinner size = 'large' />;
        }
    }

    render(){
        return(
            <View>
                <Header headerText = 'Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;