import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { Alert, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View,} from 'react-native';
import Feed from './src/screens/Feed';
import MyStyle from './src/screens/MyStyle';
import background from './src/asset/backgroundmommy.png';

const App = ()=> {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  const onpress = () => {
    Alert.alert('Loginname: ' + userName, 'Password: ' + passWord );
    setUserName('');
    setPassWord('');
  }
  return (
    <View style={styles.root} >
        <StatusBar hidden/>

        <ImageBackground 
          style={styles.container}
          source={require('./src/asset/backgroundmommy.png')}
        >
          <View style={styles.formsubmit}>
            <Text style={{fontSize: 30, fontWeight: 'bold', margin: 10}}>SIGN UP</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={setUserName}
              placeholder='Loginname'
              value={userName}
            />
            <TextInput
              style={styles.textinput}
              onChangeText={setPassWord}
              placeholder='Password'
              value={passWord}
            />

            <TouchableOpacity style={styles.btnsubmit} onPress={onpress}>
              <Text style={{fontSize: 23, fontWeight: 'bold', color:'#f5f1ed'}}>SUBMIT</Text>
            </TouchableOpacity>
              
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent:'center',
  },
  formsubmit: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f1ed',
    marginTop: 400,
    width: 300,
    borderRadius: 8
  },
  textinput: {
    borderWidth: 1,
    width: '85%',
    padding: 10 ,
    margin: 10,
    fontSize: 20
  },
  btnsubmit: {
    borderWidth:1,
    width: '85%',
    height: 50,
    margin: 20,
    alignItems: 'center',
    padding: 7 ,
    backgroundColor: '#e3ac6d'
  }
});

export default App;
