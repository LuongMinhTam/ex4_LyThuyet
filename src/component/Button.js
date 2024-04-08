import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Button = (props) => {

    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.Years}</Text>
        </View>
      )
    
}

export default Button