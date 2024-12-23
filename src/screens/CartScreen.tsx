// src/screens/CartScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import supabase from '../supabaseClient'; // Import supabase client

const CartScreen = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);  // Add error state

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data, error } = await supabase.from('cart_items').select('*');
        if (error) {
          setError('Error fetching cart items: ' + error.message); // Set error message if error occurs
          console.error('Error fetching cart items:', error);
        } else {
          console.log('Cart items fetched:', data); // Log data to check if it's fetched properly
          setCartItems(data || []);
        }
      } catch (err) {
        setError('An unexpected error occurred: ' + err.message);  // Catch any unexpected errors
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.cartItem}>
      <Text style={styles.productName}>{item.product_name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} color="#ff6347" />
    </View>
  );

  const removeFromCart = async (id: string) => {
    try {
      const { error } = await supabase.from('cart_items').delete().eq('id', id);
      if (error) {
        console.error('Error removing item:', error);
      } else {
        // Refresh cart items after removal
        setCartItems(cartItems.filter(item => item.id !== id));
      }
    } catch (err) {
      console.error('Error removing item:', err);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: 'black' 
  },
  cartItem: { 
    padding: 16, 
    borderBottomWidth: 1, 
    borderColor: '#444', 
    backgroundColor: '#222' 
  },
  productName: {
    color: '#fff', // White text for product names
    fontSize: 18, 
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#ff6347', // Tomato color for price
    fontSize: 16
  },
  loadingText: {
    color: '#fff', // White loading text
    fontSize: 20,
    textAlign: 'center',
  },
  errorText: {
    color: 'red', // Red color for errors
    fontSize: 16,
    textAlign: 'center',
  }
});

export default CartScreen;
