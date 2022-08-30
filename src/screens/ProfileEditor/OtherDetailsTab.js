import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Select, Center, Box, CheckIcon} from 'native-base';
import axios from 'axios';
import {apis} from '../../constants';
import {setLoading, setUserDetails} from '../../redux/actions/userActions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function OtherDetailsTab({
  identification,
  setIdentification,
  identificationType,
  setIdentificationType,
  country,
  setCountry,
  state,
  setState,
  city,
  setCity,
  nextStep,
}) {
  const [data, setData] = useState([]);

  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flex: 1, marginTop: 15, paddingHorizontal: 15}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.textView}>Identification Type </Text>
          <View style={{flexDirection: 'column'}}>
            <Box w="full">
              <Select
                selectedValue={identificationType}
                minWidth="360"
                height={10}
                width={20}
                borderColor={'black'}
                accessibilityLabel="Select Type"
                placeholder="Select Type"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="6" />,
                }}
                mt={1}
                onValueChange={itemValue => setIdentificationType(itemValue)}>
                <Select.Item label="Voter Card" value="voterCard" />
                <Select.Item label="Pan Card" value="panCard" />
              </Select>
            </Box>
          </View>
        </View>

        <View style={{flexDirection: 'column', marginTop: 4}}>
          <Text style={styles.textView}>Identication Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={setIdentification}
            placeholder="Enter Id Number"
            autoCapitalize="none"
            value={identification}></TextInput>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.textView}>State</Text>
          <TextInput
            style={styles.input}
            onChangeText={setState}
            placeholder="Enter State"
            autoCapitalize="none"
            value={state}></TextInput>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.textView}>City</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCity}
            placeholder="Enter City"
            autoCapitalize="none"
            value={city}></TextInput>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.textView}>Country</Text>
          <View style={{flexDirection: 'column'}}>
            <Box w="full">
              <Select
                selectedValue={country}
                minWidth="360"
                height={10}
                width={20}
                borderColor={'black'}
                accessibilityLabel="Select Country"
                placeholder="Select Country"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="6" />,
                }}
                mt={1}
                onValueChange={itemValue => setCountry(itemValue)}>
                <Select.Item label="India" value="india" />
                <Select.Item label="Canada" value="canada" />
                <Select.Item label="France" value="france" />
                <Select.Item label="Japon" value="japon" />
                <Select.Item label="Pakistan" value="pakistan" />
              </Select>
            </Box>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity style={styles.button1} onPress={nextStep}>
        <Text style={{fontSize: 20, color: 'white'}}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    fontSize: 20,
    marginTop: 5,
  },
  input: {
    width: '100%',
    height: 40,
    // margin: 9,
    borderWidth: 1,
    marginTop: 5,
    padding: 10,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#3498eb',
    padding: 8,
    width: '95%',
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
  button2: {
    width: 400,
    height: 40,
    width: '98%',
  },
  button3: {
    width: 400,
    height: 40,
    width: '98%',
    marginTop: 20,
  },
  // textView1: {
  //   marginTop: 18,
  //   marginLeft: 18,
  //   fontSize: 20,
  //   width: '30%',
  // },
  // input1: {
  //   width: '60%',
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
  // textView2: {
  //   marginTop: 18,
  //   marginLeft: 18,
  //   fontSize: 20,
  //   width: '26%',
  // },
  // textView3: {
  //   marginTop: 18,
  //   marginLeft: 18,
  //   fontSize: 20,
  //   width: '33%',
  // },
  // input2: {
  //   width: '60%',
  //   height: 40,
  //   // margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
});
