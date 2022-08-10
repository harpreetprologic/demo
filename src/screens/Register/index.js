import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input} from 'native-base';
import axios from 'axios';

import {apis} from '../../constants';
import {TextInput, Button} from '../../components/inputs';

const Register = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const registerSubmit = async () => {
    try {
      const body = {
        firstName,
        lastName,
        password,
        email,
      };

      const {data} = await axios.post(apis.baseUrl + '/userregistration', body);

      console.log('..data', data);
      alert('Registration successful');
    } catch (error) {
      alert('Something went wrong');

      console.error('Error in registerSubmit', error?.response?.data ?? error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput label="Email" value={email} onChangeText={setEmail} />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button onPress={registerSubmit}>Register</Button>

      <Button variant="text">Already have an account</Button>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    padding: 20,
  },
});
