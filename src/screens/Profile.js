import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../components/inputs';

const Profile = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const onPress = () => setPassword(password);

  const login = () => {};

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={styles.Sign}>Sign up </Text>

      <Text style={styles.Email}>Email</Text>

      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        placeholder="Enter your email"
        value={number}></TextInput>

      <Text style={styles.Email1}>Password</Text>
      <TextInput
        style={styles.Password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        value={password}></TextInput>

      <Button style={styles.button} textStyle={{fontSize: 20}} onPress={login}>
        Login
      </Button>

      <TouchableOpacity style={styles.button1} onPress={onPress}>
        <Text style={{flexDirection: 'row'}}>
          Forgot password? <Text style={{color: 'orange'}}>New password</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={onPress}>
        <Text style={{flexDirection: 'row'}}>
          Don't have an account? <Text style={{color: 'orange'}}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  Sign: {
    marginTop: 45,
    marginLeft: 11,
    fontSize: 28,
  },
  Email: {
    marginTop: 45,
    marginLeft: 18,
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  Email1: {
    marginTop: 1,
    marginLeft: 18,
    fontSize: 20,
  },
  Password: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'grey',
    margin: 70,
    borderRadius: 15,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 8,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 25,
    marginTop: 20,
  },
  button2: {
    alignItems: 'center',
    padding: 8,
    marginLeft: 55,
    marginRight: 55,
    marginTop: 250,
  },
});
