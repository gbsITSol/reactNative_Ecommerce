import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

const Order = () => {
  const order = useSelector((state) => state.orderReducer);

  const renderItem = ({ item }) => (
    <View style={styles.orderItemContainer}>
      <FlatList
        data={item.items}
        renderItem={({ item: product }) => (
          <View style={styles.productItemContainer}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          </View>
        )}
        keyExtractor={(product) => product.name}
        
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.orderHeader}>Your Orders</Text>
        <FlatList
          data={order}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
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
  orderHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  orderItemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  productItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 5,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
});

export default Order;
