import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';

const PlaceholderImage = require('./assets/logo.png');

function Login({ navigation }) {
  const [empID, setempID] = useState('');
  const [passWord,setPassWord] = useState(''); 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} /></View>
        
        <View style={styles.inputContainer}>
        <Text style={{ color: '#F42B4E' }}>Employee ID :</Text>
          <TextInput
            value={empID}
            onChangeText={(empID) => setmpID(empID)}
            placeholderTextColor={'#FFFFFF'} 
            placeholder={'Type your Employee ID here'}
            style={[styles.input, { color: '#FFFFFF' }]}
          />

            <View style={styles.lineBreak} />
            <Text style={{ color: '#F42B4E' }}>Password :</Text>
            <TextInput
            value={passWord}
            onChangeText={(passWord) => setPassWord(passWord)}
            placeholderTextColor={'#FFFFFF'} 
            placeholder={'Type your Password here'}
            style={[styles.input, { color: '#FFFFFF' }]}
          />    
          
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
           onPress={() => navigation.navigate('Dashboard')}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

    
        <Text style={{ color: '#F42B4E' }}>Don't have an account? Sign Up from here !</Text>
        <View style={styles.lineBreak} />
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginBottom: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#F42B4E',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 248 * 0.5,
    height: 238 * 0.5,
    borderRadius: 10,
  },
  inputContainer: {
    flex : 1,
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 30,
    
  },
  input: {
    borderWidth: 2,
    borderColor: '#F42B4E',
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: 250,
  },

  lineBreak: {
    height: 15,
  },

  buttonSContainer: {
    
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginBottom: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#F42B4E',
  },
  buttonSText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Login;