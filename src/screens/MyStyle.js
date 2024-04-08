import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Button from '../component/Button'

function MyStyle() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const onPress = () => {
        Alert.alert(`${userName} ăn mặn đái khai!`);
    }
  return (
    <View style={{flex: 1, marginTop: 20}}>
        <TextInput
            style={{height: 80, fontSize: 30}}
            underlineColorAndroid="blue"
            placeholder='Input user name'
            placeholderTextColor='red'
            onChangeText={setUserName}
            value={userName}
        />
        <TextInput
            style={{height: 80, fontSize: 30}}
            underlineColorAndroid="blue"
            placeholder='Input user name'
            placeholderTextColor='black'
            onChangeText={setPassword}
            value={password}
        />

        <TouchableOpacity
            style={{
                backgroundColor:'aqua',
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onPress={() => onPress()}
        >
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 40,
                }}>
                Login
            </Text>
        </TouchableOpacity>

        <Image
            style={{ marginTop: 100,height: 100, width: 100 }}
            source={{ uri: 'https://reactnative.dev/img/header_logo.svg' }}
        />
    
    </View>
  )
}

export default MyStyle

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        marginTop: 20
    },
    TextContent: {
        fontSize: 25,
        color: 'blue'
    }
})