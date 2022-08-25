import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Button} from '../../components/inputs';
import {apis} from '../../constants';
import {setLoading, setUserDetails} from '../../redux/actions/userActions';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isLoading, userDetails} = useSelector(state => state.userReducer);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (!email) {
      alert('Please enter email');
      return;
    }
    if (!password) {
      alert('Please enter password');
    }

    try {
      dispatch(setLoading(true));

      const {data} = await axios.post(apis.baseUrl + 'authentication', {
        email,
        password,
      });

      console.log('..data', data);
      dispatch(setUserDetails(data));
    } catch (error) {
      console.log('...Error in login', error?.response?.data ?? error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={styles.Sign}>Sign up </Text>

      <Text style={styles.Email}>Email</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Enter your email"
        autoCapitalize="none"
        value={email}></TextInput>

      <Text style={styles.Email1}>Password</Text>
      <TextInput
        style={styles.Password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        value={password}></TextInput>

      <Button style={styles.button} textStyle={{fontSize: 20}} onPress={login}>
        Login
      </Button>

      {isLoading && <ActivityIndicator size="large" />}

      <TouchableOpacity style={styles.button1}>
        <Text style={{flexDirection: 'row'}}>
          Forgot password? <Text style={{color: 'orange'}}>New password</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.button2}>
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
