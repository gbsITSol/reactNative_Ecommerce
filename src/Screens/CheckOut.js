import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addOrder, removeFromCart } from '../Redux/actions';
import CommonButton from '../common/CommonButton';
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from '@react-navigation/native';



const CheckOut = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducers);
  const addressList = useSelector((state) => state.AddressReducers);
  const [selectedAddress, setSelectedAddress] = useState("");
  const navigation = useNavigation()
  // const dispatch = useDispatch()

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  );

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
        />

        <FlatList
          data={addressList}
          renderItem={({ item, index }) => (
            <View style={styles.addressItemContainer}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={styles.addressText}>{`Country: ${item.country}`}</Text>
                <Text style={styles.addressText}>{`City: ${item.city}`}</Text>
                <Text style={styles.addressText}>{`Zip Code: ${item.zipCode}`}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSelectedAddress(`Country: ${item.country}, City: ${item.city}, Zip Code: ${item.zipCode}`);
                }}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteButtonText}>SELECT ADDRESS</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text>{selectedAddress === "" ? "Please select your order address" : selectedAddress}</Text>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>{totalAmount}</Text>
          <CommonButton
        title={'PAY ORDER '}
        textColor={'blue'}
        bgColor={'brown'}
        onPress={() => {
          console.log("hellooo from chekckk outt ")
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_0hE4fShT1FxgWO', 
            amount: '' + parseInt(totalAmount * 100) +"",
            name: 'foo',
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software'
            },
            theme: {color: '#000'}
          }
          RazorpayCheckout.open(options).then((data) => {
           
            console.log(`Success: ${data.razorpay_payment_id}`);
            dispatch(addOrder({
              items: cartItems,
              total: totalAmount,
              address: selectedAddress
            }));
            navigation.navigate("OrderSuccess" , {
              status : "success"
            })
          }).catch((error) => {
           
            console.log(`Error: ${error.code} | ${error.description}`);
            navigation.navigate("OrderSuccess" , {
              status : "failed"
            })
          });
          
        }}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 16,
    color: 'green', 
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 20,
    color: 'blue', 
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

export default CheckOut;






