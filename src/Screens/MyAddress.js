import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../Redux/actions';

const MyAddress = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const addressList = useSelector((state) => state.AddressReducers);
  const dispatch = useDispatch()

  const handleDeleteAddress = (index) => {
    // Implement the logic to delete the address at the given index
    // For example, you can dispatch an action to update your Redux state
    console.log(`Deleting address at index ${index}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.headerText}>ADDRESS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddAddress')} style={styles.addButton}>
          <Text style={styles.buttonText}>Add Address</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={addressList}
        renderItem={({ item, index }) => (
          <View style={styles.addressItemContainer}>
          <View style={{flex:1, flexDirection :"column", }}>
            <Text style={styles.addressText}>{`Country: ${item.country}`}</Text>
            <Text style={styles.addressText}>{`City: ${item.city}`}</Text>
            <Text style={styles.addressText}>{`Zip Code: ${item.zipCode}`}</Text>
            </View>
            <TouchableOpacity onPress={() => {
              dispatch(deleteAddress(index))
            }} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addressItemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
