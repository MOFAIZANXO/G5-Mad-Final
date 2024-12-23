// src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import supabase from '../supabaseClient'; // Import the supabase client

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data || []); // Set products data
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const renderProduct = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.product}
      onPress={() => {
        navigation.navigate('ProductDetails', { product: item }); // Navigate to product details
      }}
    >
      {/* Display Product Image if available */}
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.productImage} />
      ) : (
        <Text style={styles.noImageText}>No image available</Text> // Fallback if image is not available
      )}
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  product: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#444',
  },
  productImage: {
    width: '100%',  // Ensure image takes full width
    height: 200,    // Set a fixed height for the image
    resizeMode: 'cover', // Make sure image scales properly
    marginBottom: 8, // Add space between image and text
  },
  productName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'tomato',
    fontSize: 16,
  },
  loadingText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  noImageText: {
    color: 'gray', // Gray text for when no image is available
    fontSize: 14,
    marginBottom: 8,
  },
});

export default HomeScreen;
