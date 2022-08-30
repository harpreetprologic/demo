import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'native-base';
import {Button} from '../../components/inputs';
// import {logout} from '../../redux/actions/userActions';

// import {Select, Center, Box, CheckIcon} from 'native-base';
// import DatePicker from 'react-native-date-picker';
// import {format} from 'date-fns';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import api from '../../utils/api';
import axios from 'axios';

export default function EditProduct({route}) {
  const {_id} = route.params || {};

  const dispatch = useDispatch();
  const {userDetails} = useSelector(state => state.userReducer);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [add, setAddName] = useState('');
  const navigation = useNavigation();

  const getProduct = async () => {
    try {
      const {data} = await axios.get(
        `http://192.168.1.238:5500/api/products/${_id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userDetails.token}`,
          },
        },
      );

      console.log('...data', data);

      const {name, price, quantity} = data.data;
      setProductName(name);
      setPrice(String(price));
      setQuantity(String(quantity));
    } catch (error) {
      console.log('...error from getProduct', error);
    }
  };

  useEffect(() => {
    // Editing product
    if (_id) {
      getProduct();
    }
  }, [_id]);

  const editProduct = async () => {
    try {
      const body = {
        name: productName,
        price,
        quantity,
      };

      if (_id) {
        // Editing Product
        const {data} = await axios.put(
          `http://192.168.1.238:5500/api/products/${_id}`,
          body,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userDetails.token}`,
            },
          },
        );
        console.log('..data', data);
      } else {
        // Creating Product
        const {data} = await axios.post(
          'http://192.168.1.238:5500/api/products',
          body,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userDetails.token}`,
            },
          },
        );
        console.log('..data', data);
        alert(data.message);
      }

      navigation.goBack();
    } catch (error) {
      console.log('...error', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          marginTop: 15,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#3498eb',
          }}>
          {_id ? 'Edit' : 'Add'} Product
        </Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>Product Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setProductName}
            placeholder="Enter Product Name"
            autoCapitalize="none"
            value={productName}></TextInput>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>Price</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPrice}
            placeholder="Enter Price"
            autoCapitalize="none"
            value={price}></TextInput>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>Quantity</Text>
          <TextInput
            style={styles.input}
            onChangeText={setQuantity}
            placeholder="Product Quantity"
            autoCapitalize="none"
            value={quantity}></TextInput>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity onPress={() => editProduct()} style={styles.button1}>
        <Text style={{fontSize: 20, color: 'white'}}>
          {_id ? 'Edit' : 'Add'} Product
        </Text>
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
    width: '93%',
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
