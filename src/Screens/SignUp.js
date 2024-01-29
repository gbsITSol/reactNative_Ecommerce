import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleButton = async() => {
    // Name validation
    if (!name) {
      setNameError('Please enter your name');
    } else {
      setNameError('');
    }

    // Email validation
    if (!email) {
      setEmailError('Please enter your email');
    } else {
      setEmailError('');
    }

    // Contact number validation
    if (!contactNumber) {
      setContactNumberError('Please enter your contact number');
    } else {
      setContactNumberError('');
    }

    // Password validation
    if (!password) {
      setPasswordError('Please enter your password');
    } else {
      setPasswordError('');
    }

    // Confirm password validation
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }

    // If all fields are entered and passwords match, proceed with signup
    if (name && email && contactNumber && password && confirmPassword && password === confirmPassword) {
      console.warn('Sign up successful!');
    }

    await saveData();
  };


  const saveData = async () => {
    try {
      if (name && email && contactNumber && password) {
        await AsyncStorage.setItem('NAME', name);
        await AsyncStorage.setItem('EMAIL', email);
        await AsyncStorage.setItem('CONTACTNUMBER', contactNumber);
        await AsyncStorage.setItem('PASSWORD', password);
    navigation.goBack();
      
  
        console.warn('User  saved to AsyncStorage');
      } else {
        console.error('Invalid data. User details not saved to AsyncStorage.');
      }
    } catch (error) {
      console.error('Error ', error);
    }
  };
  

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ alignSelf: 'center', marginBottom: 30, marginTop: 30, fontSize: 50 }}>SIGNUP PAGE</Text>
      <Image source={require('../images/appstore.png')} style={{ width: 100, height: 100, borderRadius: 60, alignSelf: 'center' }} />

      <CustomTextInput placeholder={'Enter your name'} icon={require('../images/user.png')} value={name} onChangeText={setName} />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      <CustomTextInput placeholder={'Enter your email address'} icon={require('../images/mail.png')} value={email} onChangeText={setEmail} />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <CustomTextInput placeholder={'Enter your contact number'} icon={require('../images/user.png')} value={contactNumber} onChangeText={setContactNumber} />
      {contactNumberError ? <Text style={styles.errorText}>{contactNumberError}</Text> : null}

      <CustomTextInput placeholder={'Enter your password'} icon={require('../images/hide.png')} type={'password'} value={password} onChangeText={setPassword} />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <CustomTextInput placeholder={'Confirm your password'} icon={require('../images/hide.png')} type={'password'} value={confirmPassword} onChangeText={setConfirmPassword} />
      {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

      <CommonButton title={'Sign Up'} textColor={'blue'} bgColor={'brown'} onPress={handleButton} />

      <Text style={styles.navigateSignUp} onPress={goBack}>
        Already have an account
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navigateSignUp: {
    marginLeft: 100,
    marginTop: 70,
    textDecorationLine: 'underline',
    fontSize: 19,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 5,
  },
});

export default SignUp;
