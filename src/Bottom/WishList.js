// import React from 'react';
// import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromWishlist } from '../Redux/actions';

// const WishList = () => {
//   const dispatch = useDispatch();
//   const wishlistItems = useSelector((state) => state.wishlistReducer);

//   const removeFromWishlistHandler = (index) => {
//     dispatch(removeFromWishlist(index));
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={wishlistItems}
//         renderItem={({ item, index }) => (
//           <View style={styles.itemContainer}>
//             <Text style={styles.itemName}>{item.name}</Text>
//             <Button
//               title="Remove from wishlist"
//               onPress={() => removeFromWishlistHandler(index)}
//               style={styles.removeButton}
//             />
//           </View>
//         )}
//       />
//     </View>
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
//   itemName: {
//     fontSize: 16,
//   },
//   removeButton: {
//     backgroundColor: 'red',
//     padding: 8,
//     borderRadius: 5,
//   },
// });

// export default WishList;
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, addToCart } from '../Redux/actions'; // Import addToCart action

const WishList = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlistReducer);

  const removeFromWishlistHandler = (index) => {
    dispatch(removeFromWishlist(index));
  };

  const [isInWishlist, setIsInWishlist] = useState(false); // State to manage heart icon

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log('Item added to cart:', item.name);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlistItems}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemDetails}>
            <Image source={item.image} />
             
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemName}>{item.price}</Text>

              {/* Add to Cart Button */}
              <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>

            {/* Remove from Wishlist Button */}
            <TouchableOpacity onPress={() => removeFromWishlistHandler(index)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
    backgroundColor: "#ebedec",
    justifyContent : "center",
    alignItems : "center"
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  heartIcon: {
    // Add styling for the heart icon if needed
  },
  heartIconImage: {
    width: 20,
    height: 20,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    width : "50%",
    alignSelf : "center"

  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
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
});

export default WishList;









