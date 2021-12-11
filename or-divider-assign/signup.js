import React from 'react'
import { StyleSheet, ScrollView, Text, ImageBackground, TextInput } from 'react-native'
function Signup() {
    return (
        <ImageBackground style={{flex: 1}} source={require('./assets/images/bg2.jpg')}>
        <ScrollView style={newstyle.container}>
        
        <Text style={newstyle.maintext}>Create an Account</Text>
        <TextInput style={newstyle} keyboardType="email-address" placeholder="Email Id" placeholderTextColor='white'></TextInput>
        <TextInput style={newstyle} secureTextEntry placeholder="Password" placeholderTextColor='white'></TextInput>
        
        </ScrollView>
        </ImageBackground>
    )
}
const newstyle = StyleSheet.create({
    container: {
        height: 100,
    },
    maintext: {
        color: 'white',
        fontSize: 30,
        marginTop: 100,
        textAlign: 'center',
        letterSpacing: 0.8,
        shadowColor: 'yellow',
        shadowRadius: 25,
        shadowOffset: {width: 0, height: 8},
        textTransform: 'capitalize'
}
})
export default Signup
