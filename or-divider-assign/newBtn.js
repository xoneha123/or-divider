import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default function NewButton(props) {

    return(
        <TouchableOpacity style={main.button}><Text style={main.titleStyle}>{props.title}</Text></TouchableOpacity>
    )

}

const main = StyleSheet.create({
    button: {
        backgroundColor: 'yellow',
        height: 45,
        margin: 80,
        marginBottom: 30,
        marginTop: 50,
        borderRadius: 8,
        borderColor: 'red',
        borderWidth: 1,
    },
    titleStyle: {
        textAlign: 'center',
        padding: 6,
        fontSize: 22,
    }
})