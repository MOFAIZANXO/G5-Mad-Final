import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SellerDashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seller Dashboard</Text>
      <Button title="Add New Product" onPress={() => alert('Navigate to Add Product Screen')} />
      <Button title="View Orders" onPress={() => alert('Navigate to Orders Screen')} />
      <Button title="Analytics" onPress={() => alert('View Sales Analytics')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
});

export default SellerDashboardScreen;
