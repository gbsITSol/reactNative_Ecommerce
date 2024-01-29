import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/actions';
import CommonButton from '../common/CommonButton';
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducers);

  const removeFromCartHandler = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleCheckOut = () => {
    console.log("hello from checkout button ")

  };

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.noItemText}>No items added in the cart</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{`Price: $${item.price.toFixed(2)}`}</Text>
                <Image source={item.image} style={styles.itemImage} />
              </View>
              <TouchableOpacity onPress={() => removeFromCartHandler(index)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      {cartItems.length > 0 && (
        <View style={{marginBottom : 90}}>
        <CommonButton
        title={'CHECK OUT '}
        textColor={'blue'}
        bgColor={'brown'}
        onPress={() => {
          console.log("hellooo from chekckk outt ")
          // var options = {
          //   description: 'Credits towards consultation',
          //   image: 'https://i.imgur.com/3g7nmJC.png',
          //   currency: 'INR',
          //   key: 'rzp_test_0hE4fShT1FxgWO', 
          //   amount: '122000',
          //   name: 'foo',
          //   prefill: {
          //     email: 'void@razorpay.com',
          //     contact: '9191919191',
          //     name: 'Razorpay Software'
          //   },
          //   theme: {color: '#000'}
          // }
          // RazorpayCheckout.open(options).then((data) => {
          //   // handle success
          //   console.log(`Success: ${data.razorpay_payment_id}`);
          // }).catch((error) => {
          //   // handle failure
          //   console.log(`Error: ${error.code} | ${error.description}`);
          // });
          navigation.navigate("CheckOut")
        }}
    />
    
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  noItemText: {
    flex: 1,
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250
  }
});

export default Cart;








// import React from 'react';
// import { View, Text, FlatList, Button, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../Redux/actions';
// import CommonButton from '../common/CommonButton';
// import RazorpayCheckout from 'react-native-razorpay';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.reducers);

//   const removeFromCartHandler = (index) => {
//     dispatch(removeFromCart(index));
//   };


//   const handleCheckOut = ()=>{
//   console.log("hello form checkout button ")
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {cartItems.length === 0 ? (
//         <Text style={styles.noItemText}>No items added in the cart</Text>
//       ) : (
//         <FlatList
//         data={cartItems}
//         renderItem={({ item, index }) => (
//           <View style={styles.itemContainer}>
//             <View style={styles.itemDetails}>
//               <Text style={styles.itemName}>{item.name}</Text>
//               <Text style={styles.itemPrice}>{`Price: $${item.price.toFixed(2)}`}</Text>
//               <Image source={item.image} style={styles.itemImage} />
//             </View>
//             <TouchableOpacity onPress={() => removeFromCartHandler(index)} style={styles.removeButton}>
//               <Text style={styles.removeButtonText}>Remove</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//       )}

//       {
//         cartItems.length > 0 ? (
//           <View>
//             <CommonButton title={'CHECK OUT '} textColor={'blue'} bgColor={'brown'} onPress={()=>{
//               var options = {
//                 description: 'Credits towards consultation',
//                 image: 'https://i.imgur.com/3g7nmJC.jpg',
//                 currency: 'INR',
//                 key: '<YOUR_KEY_ID>',
//                 amount: '5000',
//                 name: 'Acme Corp',
//                 order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
//                 prefill: {
//                   email: 'gaurav.kumar@example.com',
//                   contact: '9191919191',
//                   name: 'Gaurav Kumar'
//                 },
//                 theme: {color: '#53a20e'}
//               }
//               RazorpayCheckout.open(options).then((data) => {
//                 // handle success
//                 alert(`Success: ${data.razorpay_payment_id}`);
//               }).catch((error) => {
//                 // handle failure
//                 alert(`Error: ${error.code} | ${error.description}`);
//               });
//             }} />
//           </View>
//         ) : null
//       }

//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
 
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingBottom: 10,
//   },
//   itemDetails: {
//     flex: 1,
//     marginRight: 10,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   itemPrice: {
//     fontSize: 14,
//     color: '#888',
//   },
//   itemImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 5,
//   },
//   removeButton: {
//     backgroundColor: 'red',
//     padding: 8,
//     borderRadius: 5,
//   },
//   removeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   noItemText:{
//     flex: 1,
//     fontSize : 30,
//     justifyContent : "center", 
//     alignItems : "center",
//     marginTop : 250
//   }
// });

// export default Cart;
