import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import { useState } from "react";


const Screen = ({navigation}) => {
    const [submit,setSubmit] = useState(false)
    const [name, setname] = useState('');
    const ChangeName = (e) => {
        setname(e)

    }

    const [address, setAddress] = useState('');

    const ChangeAddress = (e) => {
        setAddress(e)
    }

    const [phoneNumber, setPhoneNumber] = useState('');

    const ChangePhone = (e) => {
        setPhoneNumber(e)
    }

    const HandleSubmit = () => {
        setSubmit(!submit);
        navigation.navigate('data', {
            name,
            phoneNumber,
            address,
        });

    } 

    return (
        <ScrollView>
            <View style={{ flexDirection: "row", margin: 25, justifyContent: "space-around",marginTop:100 }}>
                <Text>Name</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        width: 200,
                        height: 50,
                        borderWidth: 2,
                        borderRadius: 5,
                        backgroundColor: "#FFF8DC",
                    }}

                    onChangeText={ChangeName}
                    value={name}
                    keyboardType="default"
                /></View>
            <View style={{ flexDirection: "row", margin: 25, justifyContent: "space-around" }}>
                <Text>Address</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        width: 200,
                        height: 50,
                        borderWidth: 2,
                        borderRadius: 5,
                        backgroundColor: "#FFF8DC",
                    }}
                    onChangeText={ChangeAddress}
                    value={address}
                    multiline={true}
                /></View>
            <View style={{ flexDirection: "row", margin: 25, justifyContent: "space-around" }}>
                <Text>PhoneNo</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        width: 200,
                        height: 50,
                        borderWidth: 2,
                        borderRadius: 5,
                        backgroundColor: "#FFF8DC",
                    }}
                    onChangeText={ChangePhone}
                    value={phoneNumber}
                    keyboardType="numeric"
                /></View>

            <TouchableOpacity
                style={styles.button} onPress={HandleSubmit}
            >
                <Text style={{ padding: 8 }}>Press Me</Text>
            </TouchableOpacity>
        </ScrollView>
    )


}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        padding: 15,
        width: "100%",
        height: 80,
        borderWidth: 2,
        backgroundColor: "#C0C0C0"

    },
    input: {
        width: 200,
        height: 50,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "#FFF8DC",
        padding: 10

    },
    button: {
        width: 100,
        height: 40,
        borderColor: "#FF00FF",
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "#DDA0DD",
        marginLeft: 150,
        marginTop: 80,
    }

})

export default Screen;