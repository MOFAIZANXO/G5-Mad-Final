import React from 'react';
import {  Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface ProductCardProps {
  product: { id: string; name: string; price: number; image: string };
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  image: { width: '100%', height: 150, resizeMode: 'cover' },
  name: { fontSize: 16, fontWeight: 'bold', margin: 8 },
  price: { fontSize: 14, color: 'green', marginHorizontal: 8, marginBottom: 8 },
});

export default ProductCard;
