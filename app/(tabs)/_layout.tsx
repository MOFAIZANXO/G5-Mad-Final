import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';  // Correct import
import HomeScreen from '../../src/screens/HomeScreen';
import CartScreen from '../../src/screens/CartScreen';
import ProfileScreen from '../../src/screens/ProfileScreen';
import ProductDetails from '@/src/screens/ProductDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack navigator with product details
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const TabsLayout = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabsLayout;
