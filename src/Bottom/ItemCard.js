import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native';

const ItemCard = ({ item, handleAddToCart, handleAddToWishlist }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const toggleWishlist = () => {
    handleAddToWishlist();
    setIsInWishlist(!isInWishlist);
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.productImage} />

        <TouchableOpacity style={styles.heartIcon} onPress={toggleWishlist}>
          <Image
            source={isInWishlist ? require("../images/red.png") : require("../images/heart.png")}
            style={styles.heartIconImage}
          />
        </TouchableOpacity>

        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>

        <Button
          title="Add to Cart"
          type="solid"
          buttonStyle={styles.addToCartButton}
          onPress={() => handleAddToCart(item)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};








const styles = StyleSheet.create({
  productContainer: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  heartIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 10,
    zIndex: 1,
  },
  heartIconImage: {
    width: 20,
    height: 20,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  productPrice: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#3498db',
    borderRadius: 0,
  },
});

export default ItemCard;
