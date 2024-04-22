import React, { useLayoutEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export default function HomeScreen({navigation}) {
   
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screens</Text>
        <Button mode='contained' onPress={() => navigation.navigate('detail')}>
            Go to detail
        </Button>
    </View>
  )
}
