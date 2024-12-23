import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface RatingComponentProps {
  rating: number;
  maxRating?: number;
  onRate?: (newRating: number) => void;
}

const RatingComponent: React.FC<RatingComponentProps> = ({
  rating,
  maxRating = 5,
  onRate,
}) => {
  const stars = Array.from({ length: maxRating }, (_, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onRate && onRate(index + 1)}
    >
      <MaterialIcons
        name={index < rating ? 'star' : 'star-border'}
        size={24}
        color="#FFD700"
      />
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      {stars}
      <Text style={styles.text}>{rating}/{maxRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  text: { marginLeft: 8, fontSize: 16, color: '#333' },
});

export default RatingComponent;
