// src/screens/ProfileScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import supabase from '../supabaseClient'; // Import supabase client

const ProfileScreen = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);  // Add error state

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data, error } = await supabase.from('users').select('*').single(); // Fetch single user profile
        if (error) {
          setError('Error fetching user profile: ' + error.message); // Set error message if error occurs
        } else {
          setUser(data);
        }
    } catch (err: any) {  // Explicitly typing the error as 'any'
        setError('An unexpected error occurred: ' + err.message);  // Access 'message' safely
      }
      
      setLoading(false);
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          <Text style={styles.text}>Name: {user?.name}</Text>
          <Text style={styles.text}>Email: {user?.email}</Text>
          <Text style={styles.text}>Phone: {user?.phone}</Text>
          <Text style={styles.text}>Address: {user?.address}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: 'black'  // Set background to black for better visibility
  },
  text: { 
    color: 'white',  // Set text color to white
    fontSize: 16,    // Adjust font size for better readability
    marginBottom: 8  // Add some spacing between text items
  },
  errorText: {
    color: 'red',    // Red color for errors
    fontSize: 16,    // Adjust font size for error messages
    marginBottom: 8  // Add some spacing for error text
  },
});

export default ProfileScreen;
