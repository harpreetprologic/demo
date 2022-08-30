import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {Provider} from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Modal,
  Center,
  FormControl,
  Input,
  Text,
  FlatList,
  Icon,
} from 'native-base';
import {useSelector} from 'react-redux';
import axios from 'axios';
import DeleteModal from './DeleteModal';

import {Button} from '../../components/inputs';

// const Products = () => {
export default function Products({}) {
  const navigation = useNavigation();

  const {userDetails} = useSelector(state => state.userReducer);
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const [selectedIds, setSelectedIds] = useState([]);

  const [deleteId, setDeleteId] = useState(null);

  const getProducts = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = await axios.get('http://192.168.1.238:5500/api/products', {
        headers: {
          Authorization: `Bearer ${userDetails?.token}`,
        },
      });

      console.log('...products', data);
      setProducts(data?.products);
    } catch (error) {
      console.log('...error', error);
    } finally {
      setLoading(false);
    }

    return () => {};
  }, [userDetails?.token, setProducts]);

  useEffect(() => {
    navigation.addListener('focus', getProducts);
  }, []);

  const toggleItem = _id => {
    if (selectedIds.includes(_id)) {
      setSelectedIds(selectedIds.filter(s => s !== _id));
    } else {
      setSelectedIds([...selectedIds, _id]);
    }
  };

  const renderProductItem = ({item}) => {
    const {_id, name, price, quantity} = item;

    const isSelected = selectedIds.includes(_id);

    return (
      <View style={{borderWidth: 1, borderColor: '#ededed'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 6}}>
          <TouchableOpacity onPress={() => toggleItem(_id)}>
            <FeatherIcon
              name={isSelected ? 'check-square' : 'square'}
              size={25}
              style={{marginTop: 4}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.FlatListView1}
            onPress={() => navigation.navigate('ViewProduct', {_id})}>
            <Text style={{fontSize: 20}}>{name}</Text>
          </TouchableOpacity>
          <Text style={[styles.FlatListView1, {width: '15%'}]}>
            {'\u20b9'}
            {price}
          </Text>
          <Text style={[styles.FlatListView1, {width: '15%'}]}>{quantity}</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProduct', {_id});
            }}
            style={styles.button1}>
            <Text style={{fontSize: 15, color: 'white'}}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDeleteId(_id)}
            style={[styles.button1, {width: '15%', marginLeft: 10}]}>
            <Text style={{fontSize: 15, color: 'white'}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <DeleteModal
        deleteId={deleteId}
        onClose={() => {
          getProducts();
          setDeleteId(null);
        }}
      />

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#3498eb',
        }}>
        Product details
      </Text>

      <View
        style={{
          width: '100%',
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => {
            navigation.navigate('EditProduct');
          }}>
          Add Product
        </Button>
        {!!selectedIds.length && (
          <Button onPress={() => setDeleteId1(_id)} style={{marginLeft: 10}}>
            Delete Selected
          </Button>
        )}
      </View>

      <View style={{flexDirection: 'row', margin: 6}}>
        <Text style={styles.HeaderView}>Product</Text>
        <Text style={styles.HeaderView}>Price</Text>
        <Text style={styles.HeaderView}> Quantity</Text>
      </View>

      <View style={{flex: 2, marginTop: 5, marginStart: 8}}>
        <FlatList
          style={{flex: 1}}
          data={products}
          keyExtractor={item => item?._id}
          renderItem={renderProductItem}
        />
      </View>
    </View>
  );
}

// export default Products;
const styles = StyleSheet.create({
  button1: {
    alignItems: 'center',
    backgroundColor: '#3498eb',
    padding: 8,
    width: '15%',
    height: 40,
  },
  title: {
    fontSize: 32,
  },
  FlatListView1: {
    fontSize: 20,
    marginTop: 6,
    width: '20%',
    marginStart: 8,
  },
  HeaderView: {fontSize: 20, margin: 8, color: '#3498eb'},
  button3: {
    alignItems: 'center',
    backgroundColor: '#3498eb',
    padding: 8,
    width: '30%',
    height: 40,
    alignSelf: 'center',
    marginBottom: 15,
  },
});
