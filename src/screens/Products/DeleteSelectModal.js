import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {
  Modal,
  Center,
  Button,
  FormControl,
  Input,
  Text,
  FlatList,
} from 'native-base';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {apis} from '../../constants';

const DeleteSelectModal = ({onClose, deleteId1}) => {
  const {userDetails} = useSelector(state => state.userReducer);

  const [isLoading, setLoading] = useState(false);

  const deleteProduct = async () => {
    setLoading(true);
    try {
      const {data} = await axios.delete(
        `${apis.baseUrl}/products/${deleteId1}`,
        {
          Authorization: `Bearer ${userDetails.token}`,
        },
      );

      console.log('...data', data);

      onClose();
      alert(data.message);
    } catch (error) {
      console.log('...error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={!!deleteId1} onClose={onClose}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Delete</Modal.Header>

        {isLoading ? (
          <Modal.Body>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 15,
              }}>
              <ActivityIndicator size="large" />
            </View>
          </Modal.Body>
        ) : (
          <>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>
                  Are you sure you want to delete?
                </FormControl.Label>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={deleteProduct}>
                  Yes
                </Button>
                <Button onPress={onClose}>No</Button>
              </Button.Group>
            </Modal.Footer>
          </>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default DeleteSelectModal;

const styles = StyleSheet.create({});
