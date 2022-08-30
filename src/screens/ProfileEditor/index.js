import {StyleSheet, useWindowDimensions, Text} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TabView, SceneMap} from 'react-native-tab-view';

import BasicDetailsTab from './BasicDetailsTab';
import BioDetailsTab from './BioDetailsTab';
import OtherDetailsTab from './OtherDetailsTab';
import {View} from 'native-base';
import axios from 'axios';
import {setUserDetails} from '../../redux/actions/userActions';
import {apis} from '../../constants';

export default function ProfileEditor() {
  const dispatch = useDispatch();

  const {userDetails} = useSelector(state => state.userReducer);

  // Basic Details
  const [firstName, setFirstName] = useState(userDetails.firstName ?? '');
  const [lastName, setLastName] = useState(userDetails.lastName ?? '');
  const [gender, setGender] = useState(userDetails.gender ?? '');
  const [dateOfBirth, setDateOfBirth] = useState(
    userDetails.dateOfBirth ? new Date(userDetails.dateOfBirth) : new Date(),
  );

  // Bio Details
  const [height, setHeight] = useState(userDetails.height ?? '');
  const [weight, setWeight] = useState(userDetails.weight ?? '');

  // Other Details
  const [identification, setIdentification] = useState(
    userDetails.identification ?? '',
  );
  const [identificationType, setIdentificationType] = useState(
    userDetails.identificationType ?? '',
  );
  const [country, setCountry] = useState(userDetails.country ?? '');
  const [state, setState] = useState(userDetails.state ?? '');
  const [city, setCity] = useState(userDetails.city ?? '');

  const validate = async () => {
    if (!firstName) {
      alert('Please enter first name');
      return false;
    }
    if (!identificationType) {
      alert('Select identification type');
      return false;
    }
    if (!identification) {
      alert('Please enter identification number');
      return false;
    }
    if (!state) {
      alert('Please select state');
      return false;
    }

    if (!city) {
      alert('Please select city');
      return false;
    }
    if (!country) {
      alert('Please select country');
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) {
      return;
    }

    const body = {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      height,
      weight,
      identification,
      identificationType,
      country,
      state,
      city,
    };

    console.log('..data', JSON.stringify(body, null, 2));

    try {
      const {data} = await axios.put(`${apis.baseUrl}/user`, body, {
        headers: {
          Authorization: `Bearer ${userDetails.token}`,
        },
      });

      console.log('..result', data);

      dispatch(setUserDetails(data));

      alert('Profile saved successfully');
    } catch (error) {
      console.error('Error in submit', error);
      alert('Something went wrong');
    }
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'basic', title: 'Basic Details'},
    {key: 'bio', title: 'Bio Details'},
    {key: 'other', title: 'Other Details'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'basic':
        return (
          <BasicDetailsTab
            nextStep={() => setIndex(1)}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            gender={gender}
            setGender={setGender}
            dateOfBirth={dateOfBirth}
            setDateOfBirth={setDateOfBirth}
          />
        );
      case 'bio':
        return (
          <BioDetailsTab
            nextStep={() => setIndex(2)}
            height={height}
            setHeight={setHeight}
            weight={weight}
            setWeight={setWeight}
          />
        );
      case 'other':
        return (
          <OtherDetailsTab
            identification={identification}
            setIdentification={setIdentification}
            identificationType={identificationType}
            setIdentificationType={setIdentificationType}
            country={country}
            setCountry={setCountry}
            state={state}
            setState={setState}
            city={city}
            setCity={setCity}
            nextStep={submit}
          />
        );
    }
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
const styles = StyleSheet.create({});
