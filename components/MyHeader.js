import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const MyHeader = props=>{
    return(
        <header
        centerComponent = {{text: props.title, style: {color: '#90a8a9', fontSize: 20, fontWeigth: "bold"}}}
        backgroundColor = "cyan" />
    );

}

export default MyHeader;