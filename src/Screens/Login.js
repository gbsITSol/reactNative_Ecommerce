import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    // Clear email error when the user starts typing
    setEmailError('');
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    // Clear password error when the user starts typing
    setPasswordError('');
    setPassword(text);
  };

  const handleButton = () => {
    // Email validation
    if (!email) {
      setEmailError('Please enter your email');
    } else {
      setEmailError('');
      getData();
    }

    // Password validation
    if (!password) {
      setPasswordError('Please enter your password');
    } else {
      setPasswordError('');
    }

    // If both email and password are entered, proceed with login
    if (email && password) {
    
    }
  
  };

const getData = async () => {
  const storedEmail = await AsyncStorage.getItem('EMAIL');
  const storedPassword = await AsyncStorage.getItem('PASSWORD');

  if (storedEmail === email && storedPassword === password) {
    navigation.navigate('Home');
  } else {
    Alert.alert('Login Failed', 'Invalid email or password.');
  }
};


  const signUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ alignSelf: 'center', marginBottom: 30, marginTop: 30 }}>Login</Text>
      <Image source={require('../images/appstore.png')} style={{ width: 100, height: 100, borderRadius: 60, alignSelf: 'center' }} />

      <CustomTextInput
        placeholder={'Enter your email address'}
        icon={require('../images/mail.png')}
        value={email}
        onChangeText={handleEmailChange}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <CustomTextInput
        placeholder={'Enter your password'}
        icon={require('../images/mail.png')}
        type={'password'}
        value={password}
        onChangeText={handlePasswordChange}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <CommonButton title={'LOGIN'} textColor={'blue'} bgColor={'brown'} onPress={handleButton} />

      <Text style={styles.navigateSignUp} onPress={signUp}>
        Click here to sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navigateSignUp: {
    marginLeft: 100,
    marginTop: 40,
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

export default Login;
