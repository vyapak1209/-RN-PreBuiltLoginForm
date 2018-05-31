import React, {Component} from 'react';
import {Card, CardSection, Button, Input, Spinner} from './common';
import {Text, View} from 'react-native';
import firebase from 'react-native-firebase';




class LoginForm extends Component {


    state = { email: '', password : '', error : '', loading: false };

    onButtonPress() {

        const {email, password} = this.state;

        this.setState({ error : '', loading : true});

        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail(){
        this.setState({error: 'Authentication Failed', loading: false});
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if(this.state.loading){
            return <Spinner size = 'small'/>
        }

        return (
            <Button value = 'Log In!' onPress = {this.onButtonPress.bind(this)}/>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder = 'user@gmail.com'
                        label = 'Email'
                        value = {this.state.email}
                        onChangeText = {email => this.setState({ email })}
                        />
                </CardSection>
                
                <CardSection>
                    <Input  
                        secureTextEntry
                        placeholder = '*******'
                        label = 'Password'
                        value = {this.state.password}
                        onChangeText = {password => this.setState({ password })}
                        />
                </CardSection>


                <CardSection>
                    <Text style = {styles.errorText}> {this.state.error} </Text>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}


const styles = {
    errorText : {
        fontSize : 10,
        alignSelf: 'center',
        color : 'red'
    }
}

export default LoginForm;