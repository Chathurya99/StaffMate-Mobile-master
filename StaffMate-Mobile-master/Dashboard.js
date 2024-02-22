import * as React from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';


const PlaceholderImage = require('./assets/logo.png');

function Dashboard({ navigation }) {
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} />
          <Text>BabyMate</Text>
        </View>
        
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dbs')}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Mark Attendance</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dbs')}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Performance Feedback</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Leave')}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Requesting Leave</Text>
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

  lineBreak: {
    height: 15,
  },

  buttonSContainer: {
    
    alignSelf: 'flex-start',
    alignSelf: 'center',
    marginTop: -100,
    marginBottom: 150,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#F42B4E',
    width: 320,
    height: 60
  },
 
});


export default Dashboard;