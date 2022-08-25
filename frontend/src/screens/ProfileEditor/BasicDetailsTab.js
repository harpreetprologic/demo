import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {Select, Center, Box, CheckIcon} from 'native-base';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function BasicDetailsTab({
  navigation,
  nextStep,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  gender,
  setGender,
  dateOfBirth,
  setDateOfBirth,
}) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flex: 1, marginTop: 15, paddingHorizontal: 15}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            placeholder="Enter your First Name"
            autoCapitalize="none"
            value={firstName}></TextInput>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            placeholder="Enter your Last Name"
            autoCapitalize="none"
            value={lastName}></TextInput>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>Gender</Text>
          <View style={{flexDirection: 'column'}}>
            {/* <TextInput
            style={styles.input}
            onChangeText={setGender}
            placeholder="Select Gender"
            autoCapitalize="none"
            value={gender}></TextInput> */}
            <Box w="full">
              <Select
                style={{
                  height: 40,
                }}
                selectedValue={gender}
                minWidth="236"
                marginTop={1}
                height={10}
                borderColor={'black'}
                accessibilityLabel="Select Gender"
                placeholder="Select Gender"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => setGender(itemValue)}>
                <Select.Item label="Male" value="male" />
                <Select.Item label="Female" value="female" />
                <Select.Item label="Others" value="others" />
              </Select>
            </Box>
          </View>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name2}>Date Of Birth</Text>
          {/* <TextInput
            style={styles.input}
            onChangeText={setDate}
            placeholder="Select Date Of Birth"
            autoCapitalize="none"
            
            value={date}></TextInput> */}

          {/* <Button
            color="red"
            title={format(date, 'MM/dd/yyyy')}
            onPress={() => setOpen(true)}
          /> */}
          <View style={[styles.input]}>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Text>{format(dateOfBirth, 'MM/dd/yyyy')}</Text>
            </TouchableOpacity>
            <DatePicker
              placeholder="Date"
              modal
              open={open}
              date={dateOfBirth}
              mode="date"
              onConfirm={date => {
                setOpen(false);
                setDateOfBirth(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>

          {/* <DatePicker date={date1} onDateChange={setDate} /> */}
        </View>
      </KeyboardAwareScrollView>

      <TouchableOpacity onPress={nextStep} style={styles.button1}>
        <Text style={{fontSize: 20, color: 'white'}}>Next Step</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    marginTop: 5,
    fontSize: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
  },

  button1: {
    alignItems: 'center',
    backgroundColor: '#3498eb',
    padding: 8,
    // margin: 12,

    width: '93%',
    height: 40,
    alignSelf: 'center',
    // marginVertical: 15,
    marginBottom: 10,
  },
  name1: {
    marginTop: 20,
    marginLeft: 18,
    fontSize: 20,
    width: '24%',
  },
  name2: {
    marginTop: 23,
    fontSize: 20,
  },
});
