import * as React from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const PlaceholderImage = require('./assets/logo.png');


function Start({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>  
      <View style={styles.imageContainer}>
        <Image source ={PlaceholderImage} style={styles.image} />
      </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.buttonContainer}
          activeOpacity={0.5}
        >
          <Text style={styles.buttonText}>StaffMate</Text>
        </TouchableOpacity>
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
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 30, // Adjust the value as needed to shorten the button width
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#F42B4E',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },

  image: {
    width: 248*0.9,
    height: 238*0.9,
    borderRadius: 9,
    
},
});

export default Start;