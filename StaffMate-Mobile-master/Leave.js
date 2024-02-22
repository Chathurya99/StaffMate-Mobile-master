import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';



const PlaceholderImage = require('./assets/logo.png');

function Leave({ navigation }) {
  const [empID, setEmpID] = useState('');
  const [reason, setReason] = useState('');
  
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };
  const [date, setDate] = useState(new Date());
  
  return (
    <ScrollView>

      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{ color: '#F42B4E' }}>Employee ID :</Text>
          <TextInput
            value={empID}
            onChangeText={(empID) => setEmpID(empID)}
            placeholderTextColor={'#FFFFFF'}
            placeholder={'Type your Employee ID here'}
            style={[styles.input, { color: '#FFFFFF' }]}
          />

           
          

        <View style={styles.lineBreak} />
        <Text style={{ color: '#F42B4E' }}>Select the leave time :</Text>
          <View style={styles.lineBreak} />
          <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => handleOptionSelection('Option 1')}
      >
        <View style={[styles.radio, selectedOption === 'Option 1' && styles.selectedRadio]} />
        <Text style={styles.label}>Before Lunch</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => handleOptionSelection('Option 2')}
      >
        <View style={[styles.radio, selectedOption === 'Option 2' && styles.selectedRadio]} />
        <Text style={styles.label}>After Lunch</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => handleOptionSelection('Option 3')}
      >
        <View style={[styles.radio, selectedOption === 'Option 3' && styles.selectedRadio]} />
        <Text style={styles.label}>Full Day</Text>
      </TouchableOpacity>

          <View style={styles.lineBreak} />
          <Text style={{ color: '#F42B4E' }}>Reason :</Text>
          <TextInput
            multiline={true}
            numberOfLines={9} // Set the desired number of lines to display initially
            value={reason}
            onChangeText={(reason) => setReason(reason)}
            placeholderTextColor={'#FFFFFF'}
            style={[styles.input, { color: '#FFFFFF' }]}
          />

        </View>

        <Text style={{ color: '#F42B4E' }}></Text>
        <View style={styles.lineBreak} />
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Request</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
    flex: 1,
    alignSelf: 'flex-start',
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
    width:330,
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

  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff', // Change border color to white
    backgroundColor: 'transparent', // Change background color to white
    marginRight: 10,
  },
  selectedRadio: {
    backgroundColor: '#F42B4E', // Change background color of selected radio to white
  },
  label: {
    fontSize: 16,
    color: '#F42B4E', // Change label color to white
  },
});

export default Leave;