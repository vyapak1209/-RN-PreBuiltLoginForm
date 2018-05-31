import React, {Component} from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {


    return (
        <View style = {styles.viewStyle}>
         <Text style = {styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle : {
        fontSize: 20,
        color : '#000'
    },

    viewStyle : {
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        elevation: 5,
        position: 'relative'
    }
}

export {Header};