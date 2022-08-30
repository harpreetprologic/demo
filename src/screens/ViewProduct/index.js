import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const ViewProduct = ({route}) => {
  const {_id} = route.params;

  const {userDetails} = useSelector(state => state.userReducer);

  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState();

  const getProduct = async () => {
    setLoading(true);
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

      setProduct(data.data);
    } catch (error) {
      console.log('...error from getProduct', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Editing product
    if (_id) {
      getProduct();
    }
  }, [_id]);

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <Text>{JSON.stringify(product, null, 2)}</Text>
      )}
    </View>
  );
};
export default ViewProduct;
