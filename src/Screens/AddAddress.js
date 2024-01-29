import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import { useDispatch } from 'react-redux';
import { addAddress } from '../Redux/actions';

const AddAddress = () => {
  const navigation = useNavigation();
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleCountryChange = (text) => {
    setCountry(text);
  };

  const handleCityChange = (text) => {
    setCity(text);
  };

  const handleZipCodeChange = (text) => {
    setZipCode(text);
  };

  const handleAddAddress = () => {
    // Handle the logic for adding the address, e.g., API call or local storage
    console.log('Country:', country);
    console.log('City:', city);
    console.log('ZipCode:', zipCode);
  };




  const dispatch= useDispatch()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require("../images/back.png")} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>

      <CustomTextInput
        placeholder={'Enter your Country'}
        icon={require('../images/country.png')}
        value={country}
        onChangeText={handleCountryChange}
      />

      <CustomTextInput
        placeholder={'Enter your City'}
        icon={require('../images/city.png')}
        value={city}
        onChangeText={handleCityChange}
      />

      <CustomTextInput
        placeholder={'Enter your ZipCode'}
        icon={require('../images/zipcode.png')}
        value={zipCode}
        onChangeText={handleZipCodeChange}
      />

      <TouchableOpacity onPress={()=>{
        if(country!== ""&& city !== "" && zipCode !== ""){
          dispatch(addAddress({country:country, city:city , zipCode: zipCode}))
          navigation.goBack()
        }
        
      }} style={styles.addButton}>
        <Text style={styles.buttonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    // position: 'absolute',
    top: 20,
    left: 20,
    marginBottom : 50,
    width : 30,
    height : 30
  
  },
  addButton: {
  
    width : 250, height:40,
    marginTop: 50,
    backgroundColor: 'blue', // Adjust the background color as needed
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf : "center"
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
