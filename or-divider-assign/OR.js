import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function ORDivider() {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>OR</Text>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 85,
    },

    line: {
        height: 1,
        width: '45%',
        backgroundColor: "#E3E3E3"
    },

    text: {
        fontSize: 20,
        lineHeight: 90,
        color: "white"
    },
});