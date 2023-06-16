import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Results() {
    const route = useRoute();
    const { name, phoneNumber, address, } = route.params

    return (
        <View style={styles.container}>
            <View style = {styles.TextContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.label1}>{name}</Text>
            </View>
            <View style={styles.TextContainer}>
                <Text style={styles.label}>Phone Number:</Text>
                <Text style={styles.label1}>{phoneNumber}</Text>
            </View>
            <View style={styles.TextContainer}>
                <Text style={styles.label}>Address:</Text>
                <Text style={styles.label1}>{address}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    label1: {
        fontSize: 16,
        marginBottom: 10,
        color:'red'
    },
    TextContainer:{
        flexDirection:'row'
    }
});
