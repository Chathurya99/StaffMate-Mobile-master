import * as React from 'react';
import { useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "./src/config/firebase"
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

const PlaceholderImage = require('./assets/logo.png');

function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [passWord,setPassWord] = useState(''); 
  const [firstName,setFirstName] = useState(''); 
  const [lastName,setLastName] = useState(''); 
  const [empNumber,setEmpNumber] = useState(''); 
  return (
    <ScrollView contentContainerStyle={styles.content}>
    <SafeAreaView style={styles.container}>
      
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} />
        </View>
        
        <View style={[styles.inputContainer]}>
          <Text style={{ color: '#F42B4E' }}>First Name :</Text>
          <TextInput
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
            placeholderTextColor={'#FFFFFF'} 
            placeholder={'Type your First Name here'}
            style={[styles.input, { color: '#FFFFFF' }]}
          />
          <View style={styles.lineBreak} />
          <Text style={{ color: '#F42B4E' }}>Last Name :</Text>
          <TextInput
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
            placeholderTextColor={'#FFFFFF'} 
            placeholder={'Type your Last Name here'}
            style={[styles.input, { color: '#FFFFFF' }]}
          />
          <View style={styles.lineBreak} />
          <Text style={{ color: '#F42B4E' }}>Email :</Text>
          <TextInput
            value={email}
            onChangeText={(email) => setEmail(email)}
            placeholderTextColor={'#FFFFFF'} 
            placeholder={'Type your Email here'}
            style={[styles.input, { color: '#FFFFFF' }]}
          />
          <View style={styles.lineBreak} />
          <Text style={{ color: '#F42B4E' }}>Password :</Text>
          <TextInput
            value={passWord}
            onChangeText={(passWord) => setPassWord(passWord)}
            placeholderTextColor={'#FFFFFF'} 
            placeholder={'Password'}
            style={[styles.input, { color: '#FFFFFF' }]}
          />    
          <View style={styles.lineBreak} />
          <Text style={{ color: '#F42B4E' }}>Employee Number :</Text>
          <TextInput
            value={empNumber}
            onChangeText={(empNumber) => setEmpNumber(empNumber)}
            placeholderTextColor={'#FFFFFF'} 
            placeholder={'Employee Number'}
            style={[styles.input, { color: '#FFFFFF' }]}
          />    
        </View>

        <View style={styles.lineBreak} />
        <View style={styles.lineBreak} />
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
      </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 248 * 0.5,
    height: 238 * 0.5,
    borderRadius: 10,
  },
  inputContainer: {
    alignSelf: 'flex-start',
    marginTop: 0,
    paddingHorizontal: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
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
    alignSelf: 'center',
    marginTop: 10,
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
});

export default Register;