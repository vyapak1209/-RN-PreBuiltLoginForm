import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({ onPress, children, value }) => {

    const {buttonStyle, textStyle} = styles;

    return(
       <TouchableOpacity onPress = {onPress} style = {buttonStyle}> 
        <Text style = {textStyle}>
            {value}
        </Text>
       </TouchableOpacity> 
    );

};


const styles = {

    textStyle: {
        alignSelf: 'center',
        color: "#ff7200",
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },


    buttonStyle : {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ff7200",
        marginLeft : 5,
        marginRight: 5,
    }
};



export {Button};