// src/screens/ProductDetails.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetails = ({ route }: { route: any }) => {
  const { product } = route.params; // Extract the product from the route params

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  productDescription: {
    color: 'white',
    fontSize: 16,
    marginTop: 8,
  },
  productPrice: {
    color: 'tomato',
    fontSize: 18,
    marginTop: 8,
  },
});

export default ProductDetails;
