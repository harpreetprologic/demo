import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input} from 'native-base';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import {apis} from '../../constants';
import {TextInput, Button} from '../../components/inputs';
import {setLoading, setUserDetails} from '../../redux/actions/userActions';
// import LinearGradient from 'react-native-linear-gradient';

const Register = props => {
  const dispatch = useDispatch();

  const {isLoading, userDetails} = useSelector(state => state.userReducer);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  // const registerSubmit = async () => {
  //   try {
  //     dispatch(setLoading(true));

  //     const body = {
  //       firstName,
  //       lastName,
  //       password,
  //       email,
  //     };

  //     const {data} = await axios.post(apis.baseUrl + '/userregistration', body);

  //     console.log('..data', data);

  //     dispatch(setUserDetails(data));

  //     alert('Registration successful');
  //   } catch (error) {
  //     alert(error.response?.data?.errors?.message || 'Something went wrong');

  //     console.error('Error in registerSubmit', error?.response?.data ?? error);
  //   } finally {
  //     dispatch(setLoading(false));
  //   }
  // };

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

      <Text>isLoading: {JSON.stringify(isLoading)}</Text>
      <Text>userDetails: {JSON.stringify(userDetails)}</Text>
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
